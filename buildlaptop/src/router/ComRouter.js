import React, { Component } from "react";
import { Switch, Route } from "react-router";
import AboutUs from "../view/viewComponent/AboutUs";
import ArticlePhoto from "../view/viewComponent/ArticlePhoto";
import ArticleVideo from "../view/viewComponent/ArticleVideo";
import Blog from "../view/viewComponent/Blog";
import CheckOut from "../view/viewComponent/CheckOut";
import Contact from "../view/viewComponent/Contact";
import Error from "../view/viewComponent/Error";
import FAQ from "../view/viewComponent/FAQ";
import Favorites from "../view/viewComponent/Favorites";
import Gallery from "../view/viewComponent/Gallery";
import Home from "../view/viewComponent/Home";
import Product from "../view/viewComponent/Product";
import Store from "../view/viewComponent/Store";

class ComRouter extends Component {
  render() {
    return (
      <Switch>
        {/* từ react router 6 trở đi switch bị thay thế là routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contacts" component={Contact} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/blog/articlevideo" component={ArticleVideo} />
        <Route exact path="/blog/articlephoto" component={ArticlePhoto} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/product" component={Store} />
        <Route exact path="/product/:id" component={Product} />

        
        <Route path="/:somestring" component={Error} />
      </Switch>
    );
  }
}

export default ComRouter;
