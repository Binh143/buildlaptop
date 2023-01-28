import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopNav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="./" className="navbar-brand">
                Unistore Pro
              </Link>
              <Link
                to="#open-cart"
                className="navbar-brand pull-right hidden-sm hidden-md hidden-lg"
              >
                <i className="ion-bag" /> 7
              </Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                {/* <li className="active">
                            <Link to="/">Home</Link>
                        </li> */}
                <li className="">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/product">Store</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
                <li className="dropdown">
                  <a
                    href="/store"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    More <i className="ion-android-arrow-dropdown" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/product">Product</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li role="separator" className="divider" />
                    <li className="dropdown-header">Variations</li>
                    <li>
                      <Link to="/blog/articlephoto">Article Photo</Link>
                    </li>
                    <li>
                      <Link to="/blog/articlevideo">Article Video</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/*/.nav-collapse */}
            <div className="search hidden-xs" data-style="hidden">
              <div className="input">
                <button type="button">
                  <i className="ion-ios-search" />
                </button>
                <input
                  type="text"
                  name="search"
                  defaultValue
                  placeholder="Type here..."
                />
              </div>
            </div>
          </div>
          {/*/.container-fluid */}
          {/* <script type="text/javascript">function active_nav {element.classList.add('active')}</script> */}
        </nav>
      </div>
    );
  }
}

export default TopNav;
