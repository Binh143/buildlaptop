import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (
      <div>
        <div className="white">
          <hr className="offset-lg" />
          <hr className="offset-lg" />
          <hr className="offset-lg" />
          <hr className="offset-lg hidden-xs hidden-sm" />
          <div className="container about">
            <div className="row">
              <div className="col-sm-6 hidden-sm hidden-md hidden-lg">
                <img
                  src="../assets/img/about/anytime-mobility.png"
                  alt="Anywhere, anytime mobility"
                  title="Anywhere, anytime mobility"
                />
              </div>
              <div className="col-sm-6">
                <hr className="offset-lg hidden-xs hidden-sm" />
                <hr className="offset-lg hidden-xs hidden-sm" />
                <h2 className="featurette-heading">
                  Anywhere, anytime mobility.
                </h2>
                <hr className="offset-md" />
                <p className="lead">
                  School, home, or on the road, the slim design, and latest
                  processors give you everything you need to take on the world.
                  Conveniently store up to 100GB of your files and content with
                  the included 2-years of Google Drive access. With up to 9.5
                  hours of long lasting battery, search, stream, chat, and more
                  for hours without recharging.
                </p>
              </div>
              <div className="col-sm-6 hidden-xs">
                <hr className="offset-lg visible-sm" />
                <hr className="offset-lg visible-sm" />
                <img
                  src="../assets/img/about/anytime-mobility.png"
                  alt="Anywhere, anytime mobility"
                  title="Anywhere, anytime mobility"
                />
              </div>
            </div>
          </div>
          <hr className="offset-lg" />
          <hr className="offset-lg" />
          <hr className="offset-lg hidden-xs" />
        </div>
        <hr className="offset-lg" />
        <hr className="offset-lg" />
        <div className>
          <hr className="offset-lg hidden-xs" />
          <hr className="offset-lg hidden-xs" />
          <div className="container about">
            <div className="row">
              <div className="col-sm-6">
                <hr className="offset-lg visible-sm" />
                <img
                  src="../assets/img/about/new-entertainment.png"
                  alt="Anywhere, anytime mobility"
                  title="Anywhere, anytime mobility"
                />
              </div>
              <div className="col-sm-6">
                <hr className="offset-lg hidden-xs hidden-sm" />
                <hr className="offset-lg hidden-xs hidden-sm" />
                <h2 className="featurette-heading">
                  Entertainment at your fingertips.
                </h2>
                <hr className="offset-md" />
                <p className="lead">
                  Capture all the details with vibrant clarity, even in low
                  light. Enjoy the nuances of face-to-face conversations, thanks
                  to the HD Webcam. Lay back and get comfortable with your
                  favorite movies and shows. The HD IPS screens delivers your
                  entertainment in stunning quality, from any angle.
                </p>
              </div>
            </div>
          </div>
          <hr className="offset-lg" />
          <hr className="offset-lg" />
        </div>
        <hr className="offset-lg hidden-xs" />
        <hr className="offset-lg hidden-xs" />
        <hr className="offset-lg hidden-xs" />
        <div className="white">
          <hr className="offset-lg hidden-xs" />
          <hr className="offset-lg hidden-xs" />
          <hr className="offset-lg" />
          <div className="container about">
            <div className="row">
              <div className="col-sm-6 hidden-sm hidden-md hidden-lg">
                <img
                  src="../assets/img/about/sleek-and-colorful.png"
                  alt="Sleek and colorful"
                  title="Sleek and colorful"
                />
              </div>
              <div className="col-sm-6">
                <hr className="offset-lg hidden-xs hidden-sm" />
                <hr className="offset-lg hidden-xs hidden-sm" />
                <h2 className="featurette-heading">Sleek and powerfull.</h2>
                <hr className="offset-md" />
                <p className="lead">
                  With the brand new laptops running lightning-fast Windows 10,
                  the best of Microsoft is at hand on a colorfully sleek and
                  stylish notebook. Express yourself with an HD 29.5 cm (11.6")
                  diagonal screen in a slim package, styled in smoke silver or
                  sky blue.
                </p>
              </div>
              <div className="col-sm-6 hidden-xs">
                <hr className="offset-lg visible-sm" />
                <img
                  src="../assets/img/about/sleek-and-colorful.png"
                  alt="Sleek and colorful"
                  title="Sleek and colorful"
                />
              </div>
            </div>
          </div>
          <hr className="offset-lg" />
          <hr className="offset-lg hidden-xs" />
          <hr className="offset-lg hidden-xs" />
        </div>
        <hr className="offset-lg hidden-xs" />
        <hr className="offset-lg" />
        <div className="container align-center">
          <h1 className="upp"> Contact us </h1>
          <p> Please insert question to a form below. </p>
          <hr className="offset-md" />
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
              <form className="contact" action="index.php" method="post">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  required
                  rows={5}
                  defaultValue={""}
                />
                <br />
                <input
                  type="email"
                  name="email"
                  defaultValue
                  placeholder="E-mail"
                  required
                  className="form-control"
                />
                <br />
                <button type="submit" className="btn btn-primary justify">
                  {" "}
                  Send question
                </button>
              </form>
            </div>
          </div>
          <br />
        </div>
        <hr className="offset-lg" />
        <hr className="offset-sm" />
      </div>
    );
  }
}

export default AboutContent;
