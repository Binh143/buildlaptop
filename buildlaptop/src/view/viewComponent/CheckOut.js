import React, { Component } from "react";
import TitleCheck from "../../components/checkOut/TitleCheck";
import ContentCheck from "../../components/checkOut/ContentCheck";
class CheckOut extends Component {
  render() {
    return (
      <div>
        <TitleCheck />
        <ContentCheck />
      </div>
    );
  }
}

export default CheckOut;
