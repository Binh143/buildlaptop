import React, { Component } from "react";
import Banner from "../../components/home/Banner";
import Bars from "../../components/home/Bars";
class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Bars />
      </div>
    );
  }
}

export default Home;
