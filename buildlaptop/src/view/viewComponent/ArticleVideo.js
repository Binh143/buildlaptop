import React, { Component } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

class ArticleVideo extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <div className="blog-item">
            <hr className="offset-lg visible-xs" />
            <hr className="offset-lg visible-xs" />
            <div className="tiles">
              <Link to="#video">
                <hr className="offset-lg visible-sm" />
                <img
                  src="../assets/img/blog/item-video.jpg"
                  alt="MacBook Pro"
                  className="hidden-xs"
                />
                <img
                  src="../assets/img/blog/item-video-xs.jpg"
                  alt="Apple 3D Touch"
                  className="visible-xs"
                />
                <div className="overlay" />
                <div className="content">
                  <div className="content-outside">
                    <div className="content-inside">
                      <i className="ion-ios-play" />
                      <h1>
                        MacBook Pro <br /> brand new day for business
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="white">
              <hr className="offset-lg" />
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2">
                    <p>
                      Organizations everywhere are realizing the potential that
                      Mac brings to their employees by giving them the freedom
                      to use the tools they already know and love.
                      <br />
                      <br />
                      Software and hardware made for each other. Because Apple
                      designs both the software and hardware, every Mac delivers
                      the best possible experience for employees. OS X works
                      seamlessly with hardware in every Mac, like the
                      super-responsive trackpad in Mac notebooks that make
                      Multi-Touch gestures feel natural to use. And thanks to
                      multicore Intel processors and fast flash storage, a Mac
                      wakes instantly from sleep, ready to perform any task.
                      <br />
                      <br />
                      New ways for employees to get work done. With OS X and the
                      built-in apps that come with every Mac, employees can be
                      productive right away — on a platform they love. And with
                      innovative new types of business apps, employees are able
                      to collaborate in new ways and manage their work like
                      never before.
                    </p>
                    <br />
                    <button className="btn btn-primary btn-sm facebook">
                      {" "}
                      <i className="ion-social-facebook" /> Share{" "}
                    </button>
                    <button className="btn btn-primary btn-sm twitter">
                      {" "}
                      <i className="ion-social-twitter" /> Retweet
                    </button>
                    <button className="btn btn-primary btn-sm googleplus">
                      {" "}
                      <i className="ion-social-googleplus" /> Plus{" "}
                    </button>
                  </div>
                </div>
              </div>
              <hr className="offset-lg" />
              <hr className="offset-lg" />
            </div>
            <hr className="offset-md" />
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                  <div className="comments">
                    <h2 className="h3">What do you think? (#2)</h2>
                    <hr className="offset-sm" />
                    <button
                      className="btn btn-default"
                      data-toggle="modal"
                      data-target="#Modal-Comment"
                    >
                      {" "}
                      <i className="ion-android-textsms" /> Add comment{" "}
                    </button>
                    <hr className="offset-md" />
                    <h3>Anne Hathaway</h3>
                    <label>2 years ago</label>
                    <p>
                      Apple Music brings iTunes music streaming to the UK. But
                      is it worth paying for? In our Apple Music review, we
                      examine the service's features, UK pricing, audio quality
                      and music library
                    </p>
                    <h3>Chris Hemsworth</h3>
                    <label>Today</label>
                    <p>
                      Samsung's Galaxy S7 smartphone is getting serious hype.
                      Here's what it does better than Apple's iPhone 6s.
                    </p>
                    <nav>
                      <ul className="pagination">
                        <li>
                          <Link to="#" aria-label="Previous">
                            <span aria-hidden="true">
                              <i className="ion-ios-arrow-left" />
                            </span>
                          </Link>
                        </li>
                        <li className="active">
                          <Link to="#">1</Link>
                        </li>
                        <li>
                          <Link to="#">2</Link>
                        </li>
                        <li>
                          <Link to="#" aria-label="Next">
                            <span aria-hidden="true">
                              <i className="ion-ios-arrow-right" />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="offset-lg" />
          <hr className="offset-sm" />
        </div>
      </Fragment>
    );
  }
}

export default ArticleVideo;
