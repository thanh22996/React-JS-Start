import * as types from "./../constants/ActionTypes";

var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
  var {product, quantity} = action;
  var index = -1;
  switch (action.type) {
    case types.ADD_TO_CART:
      index = findProductInCart(state, product);
      // console.log(action);
      if(index !== -1){
        state[index].quantity += quantity;
      }else {
        state.push({
          product,
          quantity
        })
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.REMOVE_TO_CART:
      
      index = findProductInCart(state, product.product);
      if(index !== -1){
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
      case types.UPDATE_ADD_TO_CART:
        index = findProductInCart(state, product.product);
        if(index !== -1){
          state[index].quantity += quantity;
        }
        localStorage.setItem("CART", JSON.stringify(state));
        return [...state];
      case types.UPDATE_SUB_TO_CART:
        // console.log(action);
        index = findProductInCart(state, product.product);
        if(index !== -1 && state[index].quantity === 1){
          
        }else if(index !== -1 && state[index].quantity > 1){
          state[index].quantity -= quantity;
        }
        localStorage.setItem("CART", JSON.stringify(state));
        return [...state];
    default:
      return [...state];
  }
};

var findProductInCart = (cart, product) => {
  var index = -1;
  if(cart.length > 0){
    for(var i = 0; i < cart.length; i++){
      if(cart[i].product.id === product.id){
        index = i;
        break; 
      }
    }
  }
  return index;
}

export default cart;
