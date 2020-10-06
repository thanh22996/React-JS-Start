import React, { Component } from 'react';
import ProductsContainer from './../containers/ProductsContainer';
// import Message from './Message';
// import Cart from './Cart';
import CartContainer from '../containers/CartContainer';
import MessageContainer from '../containers/MessageContainer';

class Content extends Component {
    render() {
        // var {message} = this.props;
        return (
            <main id="mainContainer">
            <div className="container">
                <ProductsContainer />
                <MessageContainer />
                <CartContainer />
            </div>
        </main>
        );
    }
}

export default Content;