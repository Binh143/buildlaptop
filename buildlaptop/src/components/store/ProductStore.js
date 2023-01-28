import React, { Component } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../../api/Context";

class ProductStore extends Component {
  static contextType = DataContext;

  render() {
    const { products } = this.context;
    return (
      <Fragment>
        <div className="col-sm-8 col-md-9">
          <hr className="offset-lg" />
          <div className="products">
            <div className="row">
              {products.map((product) => (
                <div className="col-sm-6 col-md-4 product " key={product.id}>
                  <div className="body">
                    <a
                      href="#favorites"
                      className="favorites"
                      data-favorite="inactive"
                    >
                      <i className="ion-ios-heart-outline" />
                    </a>
                    {/* <Link to={`product/${product.id}`}> */}
                    <Link to={`/product/${product.id}`}>
                      <img src={"../" + product.img} alt={product.title} />
                    </Link>

                    <div className="content">
                      <h1 className="h3">{product.title}</h1>
                      <p className="price">{product.price}</p>
                      <p className="price through">{product.priceSale}</p>
                      <label>{product.type}</label>
                      <button className="btn btn-link">
                        <i className="ion-android-open" /> Details
                      </button>
                      <button className="btn btn-primary btn-sm rounded">
                        <i className="ion-bag" /> Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {console.log(this.match)}
            </div>
          </div>
          <nav>
            <ul className="pagination">
              <li>
                <a href="./" aria-label="Previous">
                  <span aria-hidden="true">
                    <i className="ion-ios-arrow-left" />
                  </span>
                </a>
              </li>
              <li className="active">
                <a href="./">1</a>
              </li>
              <li>
                <a href="./">2</a>
              </li>
              <li>
                <a href="./">3</a>
              </li>
              <li className="disabled">
                <a href="./">..</a>
              </li>
              <li>
                <a href="./">10</a>
              </li>
              <li>
                <a href="./" aria-label="Next">
                  <span aria-hidden="true">
                    <i className="ion-ios-arrow-right" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* /// */}
      </Fragment>
    );
  }
}

export default ProductStore;
