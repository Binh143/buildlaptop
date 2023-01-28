import React, { Component } from "react";
import CartCategory from "./CartCategory";
class Cart extends Component {
  render() {
    return (
      <div className="cart" data-toggle="inactive">
        <div className="label">
          <i className="ion-bag" /> 7
        </div>
        <div className="overlay" />
        <div className="window">
          <div className="title">
            <button type="button" className="close">
              <i className="ion-android-close" />
            </button>
            <h4>Shopping cart</h4>
          </div>
          <CartCategory />
          <div className="checkout container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 align-right">
                <a className="btn btn-primary" href="/checkout">
                  {" "}
                  Checkout order{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
