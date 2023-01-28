import React from 'react';
import { Link } from 'react-router-dom';
function TopNav() {
    return (
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
                    <a href="#open-cart" className="navbar-brand pull-right hidden-sm hidden-md hidden-lg">
                        <i className="ion-bag" /> 7
                    </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to="./">Home</Link>
                        </li>
                        <li>
                            <Link to="./store">Store</Link>
                        </li>
                        <li>
                            <Link to="./blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="./contacts">Contacts</Link>
                        </li>
                        <li className="dropdown">
                            <a
                                href="./store/"
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
                                    <a href="./store/product.html">Product</a>
                                </li>
                                <li>
                                    <a href="./about/">About Us</a>
                                </li>
                                <li>
                                    <a href="./checkout/">Checkout</a>
                                </li>
                                <li>
                                    <a href="./faq/">FAQ</a>
                                </li>
                                <li>
                                    <a href="./gallery/">Gallery</a>
                                </li>
                                <li role="separator" className="divider" />
                                <li className="dropdown-header">Variations</li>
                                <li>
                                    <a href="./blog/item-photo.html">Article Photo</a>
                                </li>
                                <li>
                                    <a href="./blog/item-video.html">Article Video</a>
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
                        <input type="text" name="search" defaultValue placeholder="Type here..." />
                    </div>
                </div>
            </div>
            {/*/.container-fluid */}
            {/* <script type="text/javascript">function active_nav {element.classList.add('active')}</script> */}
        </nav>
    );
}
export default TopNav;
