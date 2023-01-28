import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
function Bars() {
  return (
    <Fragment>
      <hr className="offset-lg" />;
      <hr className="offset-lg" />;
      <div className="bars">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 no-padding padding-xs">
              <div
                className="bar medium"
                data-background="/assets/img/bars/macbook.jpg"
                style={{
                  background:
                    'url("/assets/img/bars/macbook.jpg") center center / cover no-repeat scroll',
                }}
              >
                <h3 className="title black">MacBook Air</h3>
                <div className="wrapper">
                  <div className="content">
                    <hr className="offset-sm" />
                    <Link
                      to="/store"
                      rel="nofollow"
                      className="btn btn-default black"
                    >
                      {" "}
                      Buy now{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div
                className="bar small"
                data-background="/assets/img/bars/dellinspirion.jpg"
                style={{
                  background:
                    'url("/assets/img/bars/dellinspirion.jpg") center center / cover no-repeat scroll',
                }}
              >
                <h3 className="title black">Dell Inspirion 7000</h3>
                <div className="wrapper">
                  <div className="content">
                    <hr className="offset-sm" />
                    <Link
                      to="/store"
                      rel="nofollow"
                      className="btn btn-primary black"
                    >
                      {" "}
                      Buy now{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="offset-xs" />
              <hr className="offset-xs" />
              <div
                className="bar small"
                data-background="/assets/img/bars/surfacestudio.jpg"
                style={{
                  background:
                    'url("/assets/img/bars/surfacestudio.jpg") center center / cover no-repeat scroll',
                }}
              >
                <h3 className="title">Surface Studio</h3>
                <div className="wrapper">
                  <div className="content">
                    <hr className="offset-sm" />
                    <Link
                      to="/store"
                      rel="nofollow"
                      className="btn btn-primary black"
                    >
                      {" "}
                      Buy now{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 no-padding hidden-xs hidden-sm">
              <div
                className="bar medium"
                data-background="/assets/img/bars/accessories.jpg"
                style={{
                  background:
                    'url("/assets/img/bars/accessories.jpg") center center / cover no-repeat scroll',
                }}
              >
                <h3 className="title black">Accessories</h3>
                <div className="wrapper">
                  <div className="content">
                    <hr className="offset-sm" />
                    <Link
                      to="/store"
                      rel="nofollow"
                      className="btn btn-primary black"
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
export default Bars;
