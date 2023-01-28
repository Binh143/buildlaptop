import React, { Component } from "react";
import { Fragment } from "react";
import TopLink from "../../components/header/TopLink";
import TopNav from "../../components/header/TopNav";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <TopLink />
        <TopNav />
      </Fragment>
    );
  }
}

export default Header;
