import React, { Component } from "react";
import FilterBlog from "../../components/blog/FilterBlog";
import ProductBlog from "../../components/blog/ProductBlog";
class Blog extends Component {
  render() {
    return (
      <div>
        <FilterBlog />
        <ProductBlog/>
      </div>
    );
  }
}

export default Blog;
