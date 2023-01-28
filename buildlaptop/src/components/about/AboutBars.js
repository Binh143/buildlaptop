import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
class AboutBars extends Component {
  render() {
    return (
      <Fragment>
        <div className="carousel" data-count={1} data-current={1}>
          <div className="items">
            <div className="item center" data-marker={1}>
              <img
                src="/assets/img/carousel/bckg-3.jpg"
                alt="Background"
                className="background hidden-xs hidden-sm"
              />
              <img
                src="../assets/img/carousel/bckg-3-sm.jpg"
                alt="Background"
                className="background visible-sm"
              />
              <img
                src="../assets/img/carousel/bckg-3-xs.jpg"
                alt="Background"
                className="background visible-xs"
              />
              <div className="content">
                <div className="outside-content">
                  <div className="inside-content">
                    <div className="container align-right">
                      <hr className="offset-lg visible-xs" />
                      <h1 className="h3 upp colorful blue">
                        Beautiful, smart and powerful
                      </h1>
                      <hr className="offset-sm" />
                      <h2 className="h1 lg upp colorful blue">
                        Brand new <br /> devices for all
                      </h2>
                      <hr className="offset-md" />
                      <hr className="offset-md" />
                      <Link
                        to="../store"
                        rel="nofollow"
                        className="btn btn-primary btn-lg black"
                      >
                        {" "}
                        Buy now{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AboutBars;
