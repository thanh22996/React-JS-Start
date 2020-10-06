import React, { Component } from "react";
// import message from "../reducers/message";
import * as message from "./../constants/MessageTypes"

class CartItem extends Component {
  render() {
    var { cart } = this.props;
    
    return (
      <tr>
        <th scope="row">
          <img
            src={cart.product.image}
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cart.product.name}</strong>
          </h5>
        </td>
        <td>{cart.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{cart.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateSubCart(cart)}
            >
              <div>—</div>
            </label>
            <label
              className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateAddCart(cart)}
            >
              <div >+</div>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(cart.product.price, cart.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onRemoveToCart(cart)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  showSubTotal = (price, quantity) => {
    return (price * quantity);
  }

  onRemoveToCart = (product) => {
    this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_SUCCESS);
    this.props.onRemoveProduct(product);
  }

  onUpdateAddCart = (product) => {
    this.props.onUpdateAddCart(product);
    this.props.onChangeMessage(message.MSG_UPDATE_CART_SUCCESS);
  }

  onUpdateSubCart =(product) => {
    this.props.onUpdateSubCart(product);
    this.props.onChangeMessage(message.MSG_UPDATE_CART_SUCCESS);
  }
}

export default CartItem;
