import React, { Component } from "react";
import { Fragment } from "react";
class TitleGallery extends Component {
  render() {
    return (
      <Fragment>
        <hr className="offset-top" />
        <div className="white">
          <div className="container checkout">
            <h1>Products gallery</h1>
            <hr className="offset-sm" />
          </div>
        </div>
        <div className="black">
          <hr className="offset-lg" />
          <hr className="offset-lg" />
        </div>
      </Fragment>
    );
  }
}

export default TitleGallery;
