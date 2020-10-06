import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartItem from "../components/CartItem";
import Cart from "../components/Cart";
import * as Message from "./../constants/MessageTypes";
import CartResult from "../components/CartResult";
import {actchangeMessage, actRemoveToCart, actUpdateAddToCart, actUpdateSubToCart} from "./../actions"
// import CartResult from "../components/CartResult";

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    // console.log(this.showCartResult(cart));

    return (
      <div>
        <Cart>
          {this.showCartItem(cart)}
          {this.showCartResult(cart)}
        </Cart>
      </div>
    );
  }
  addToCart = () => {};

  showCartItem(cart) {
    var {onChangeMessage, onRemoveProduct, onUpdateAddCart, onUpdateSubCart} = this.props;
    var result = <tr>
      <td>
      {Message.MSG_EMPTY_CART};
      </td>
    </tr>
    // console.log(cart);

    if (cart.length > 0) {
      result = cart.map((cart, index) => {
        return <CartItem 
                  cart={cart} key={index} 
                  onChangeMessage={onChangeMessage}
                  onRemoveProduct={onRemoveProduct}
                  onUpdateAddCart={onUpdateAddCart}
                  onUpdateSubCart={onUpdateSubCart}
                  />;
      });
    }
    return result;
  }

  showCartResult = (cart) => {
    var result = null;
    if(cart.length > 0){
      result = <CartResult 
                  cart={cart}
                />
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        discript: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
  onUpdateAddCart: PropTypes.func.isRequired,
  onUpdateSubCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return{
    onChangeMessage: (message) => {
      dispatch(actchangeMessage(message));
    },
    onRemoveProduct: (product) => {
      dispatch(actRemoveToCart(product));
    },
    onUpdateAddCart: (product) => {
      dispatch(actUpdateAddToCart(product, 1));
    },
    onUpdateSubCart: (product) => {
      dispatch(actUpdateSubToCart(product, 1));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
