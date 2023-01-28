import React, { Component } from "react";
import { Link } from "react-router-dom";
class TopLink extends Component {
  render() {
    return (
      <div className="toplinks">
        <Link
          to="#signin"
          data-toggle="modal"
          data-target="#Modal-Registration"
        >
          {" "}
          <i className="ion-person" /> Registration
        </Link>
        <Link to="#signin" data-toggle="modal" data-target="#Modal-SignIn">
          {" "}
          <i className="ion-unlocked" /> Sign In
        </Link>
        <Link to="/favorites">
          {" "}
          <i className="ion-ios-heart" /> Favorites{" "}
        </Link>
        <Link to="tel:+80005554465" className="hidden-xs">
          {" "}
          <i className="ion-android-call" /> 8000 555-44-65{" "}
        </Link>
      </div>
    );
  }
}

export default TopLink;
