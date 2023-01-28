import React, { Component } from "react";
import { Fragment } from "react";
import ContentProductDetailt from "../../components/productDetails/contentProduct";
import NewComponent from "../../components/productDetails/NewComponent";

class Product extends Component {
  render() {
    return (
      <Fragment>
        <ContentProductDetailt />
        {/* <NewComponent /> */}
      </Fragment>
    );
  }
}

export default Product;
