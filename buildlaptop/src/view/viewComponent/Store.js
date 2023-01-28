import React, { Component } from "react";
import { Fragment } from "react";
import FilterStore from "../../components/store/FilterStore";
import TagStore from "../../components/store/TagStore";
import ProductStore from "../../components/store/ProductStore";

class Store extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <TagStore />
        <div className="container">
          <div className="row">
            <FilterStore />

            <ProductStore />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Store;
