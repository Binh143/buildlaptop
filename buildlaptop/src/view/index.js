import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./viewComponent/Footer";
import Header from "./viewComponent/Header";
import ComRouter from "../router/ComRouter";
import Cart from "../components/shoppingCart/Cart";
// import { DataProvider } from "../api/Context";
class Index extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Cart />
        <ComRouter />
        <Footer />
      </Router>
    );
  }
}

export default Index;
