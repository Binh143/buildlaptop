import React, { Component } from "react";
import { Fragment } from "react";
class TitleCheck extends Component {
  render() {
    return (
      <Fragment>
        <hr className="offset-top" />
        <div className="white">
          <div className="container checkout">
            <h1>Checkout order</h1>
            <hr className="offset-sm" />
          </div>
        </div>
        <hr className="offset-md" />
      </Fragment>
    );
  }
}

export default TitleCheck;
