import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";

function NewComponent(props) {
  // const [post, setPost] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => setPost(json));
  // }, []);
  // console.log(post);
  return (
    <Fragment>
      <hr className="offset-lg" />
      <hr className="offset-lg" />
      <hr className="offset-lg hidden-xs" />
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7 white no-padding">
              <div className="carousel-product" data-count={4} data-current={1}>
                <div className="items">
                  <button className="btn btn-control" data-direction="right">
                    {" "}
                    <i className="ion-ios-arrow-right" />
                  </button>
                  <button className="btn btn-control" data-direction="left">
                    {" "}
                    <i className="ion-ios-arrow-left" />
                  </button>
                  <div className="item center" data-marker={1}>
                    <img
                      src="/assets/img/product/1.jpg"
                      alt="Microsoft Surface Studio"
                      className="background"
                    />
                  </div>
                  <div className="item" data-marker={2}>
                    <img
                      src="/assets/img/product/2.jpg"
                      alt="Microsoft Surface Studio"
                      className="background"
                    />
                  </div>
                  <div className="item" data-marker={3}>
                    <img
                      src="/assets/img/product/3.jpg"
                      alt="Microsoft Surface Studio"
                      className="background"
                    />
                  </div>
                  <div className="item" data-marker={4}>
                    <img
                      src="/assets/img/product/video.jpg"
                      alt="Microsoft Surface Studio"
                      className="background"
                    />
                    <div className="tiles">
                      <a
                        href="#video"
                        data-gallery="#video"
                        data-source="youtube"
                        data-id="BzMLA8YIgG0"
                      >
                        <img
                          src="/assets/img/product/video.jpg"
                          alt="Surface Studio"
                        />
                        <div className="overlay" />
                        <div className="content">
                          <div className="content-outside">
                            <div className="content-inside">
                              <i className="ion-ios-play" />
                              <h2 className="white hidden-xs">
                                Introducing Microsoft <br /> Surface Studio
                              </h2>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <ul className="markers">
                  <li data-marker={1} className="active" />
                  <li data-marker={2} />
                  <li data-marker={3} />
                  <li data-marker={4} />
                </ul>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 no-padding-xs">
              <div className="caption">
                <img
                  src="/assets/img/brands/microsoft.png"
                  alt="Microsoft"
                  className="brand hidden-xs hidden-sm"
                />
                <h1>Surface Studio</h1>
                <p> · OS Windows™ 10</p>
                <p> · 28 Inch PixelSense™ Display</p>
                <p> · Intel Core i5/i7</p>
                <hr className="offset-md hidden-sm" />
                <hr className="offset-sm visible-sm" />
                <hr className="offset-xs visible-sm" />
                <p className="price">$2 999.00</p>
                <p className="price through">$3 449.99</p>
                <hr className="offset-md" />
                <button className="btn btn-primary rounded">
                  {" "}
                  <i className="ion-bag" /> Add to cart
                </button>
                <button className="btn btn-link">
                  {" "}
                  <i className="ion-ios-heart" /> See later{" "}
                </button>
              </div>
            </div>
          </div>
          <hr className="offset-sm hidden-xs" />
          <div className="row">
            <div className="col-sm-7 white sm-padding">
              <hr className="offset-sm visible-xs" />
              <h2 className="h1">Microsoft Surface Studio</h2>
              <br />
              <p>
                Visualize ideas as you paint, edit, and design. Let the 10-bit
                color depth and strikingly large 28” display pull you in from
                across the room. Or, lose yourself in the creative details of
                your work. Surface Studio is designed with a Zero Gravity Hinge
                that moves the display weightlessly from an upright angle, down
                into Studio Mode with one hand.
              </p>
              <br />
              <h2>Product specifications</h2>
              <br />
              <div className="row specification">
                <div className="col-sm-4">
                  {" "}
                  <label>Operating system</label>{" "}
                </div>
                <div className="col-sm-8">
                  {" "}
                  <p>Windows 10™</p>{" "}
                </div>
              </div>
              <div className="row specification">
                <div className="col-sm-4">
                  {" "}
                  <label>Display</label>{" "}
                </div>
                <div className="col-sm-8">
                  <p>
                    Screen: 28" PixelSense Display
                    <br />
                    Resolution: 4500 x 3000 (192 DPI)
                    <br />
                    Color settings: sRGB, DCI-P3, and Vivid color profiles,
                    individually color calibrated
                    <br />
                    Touch: 10-point multi-touch
                  </p>
                </div>
              </div>
              <div className="row specification">
                <div className="col-sm-4">
                  {" "}
                  <label>Processor</label>{" "}
                </div>
                <div className="col-sm-8">
                  {" "}
                  <p>Quad-core 6th Gen Intel Core i5 or i7</p>{" "}
                </div>
              </div>
              <div className="row specification">
                <div className="col-sm-4">
                  {" "}
                  <label>Processor technology</label>{" "}
                </div>
                <div className="col-sm-8">
                  {" "}
                  <p>Intel Turbo Boost Technology</p>{" "}
                </div>
              </div>
              <div className="row specification">
                <div className="col-sm-4">
                  {" "}
                  <label>Graphics</label>{" "}
                </div>
                <div className="col-sm-8">
                  {" "}
                  <p>
                    NVIDIA GeForce GTX 965M 2GB GPU GDDR5 memory or NVIDIA
                    GeForce GTX 980M 4GB GPU GDDR5 memory
                  </p>{" "}
                </div>
              </div>
              <div className="row specification">
                <div className="col-sm-4">
                  {" "}
                  <label>Memory</label>{" "}
                </div>
                <div className="col-sm-8">
                  {" "}
                  <p>8GB, 16GB, or 32GB RAM</p>{" "}
                </div>
              </div>
              <div className="row specification">
                <div className="col-sm-4">
                  {" "}
                  <label>Hard drive</label>{" "}
                </div>
                <div className="col-sm-8">
                  {" "}
                  <p>
                    Rapid hybrid drive options: 64GB SSD with 1TB HDD, 128GB SSD
                    with 1TB HDD, 128GB SSD with 2TB HDD
                  </p>{" "}
                </div>
              </div>
              <div className="row specification">
                <div className="col-sm-4">
                  {" "}
                  <label>Wireless</label>{" "}
                </div>
                <div className="col-sm-8">
                  <p>
                    Wi-Fi: 802.11ac Wi-Fi wireless networking, IEEE 802.11
                    a/b/g/n compatible
                    <br />
                    Bluetooth: Bluetooth 4.0 wireless technology
                    <br />
                    Xbox Wireless built-in
                  </p>
                </div>
              </div>
              <div className="row specification">
                <div className="col-sm-4">
                  {" "}
                  <label>Power supply</label>{" "}
                </div>
                <div className="col-sm-8">
                  {" "}
                  <p>45 W AC power adapter</p>{" "}
                </div>
              </div>
              <div className="row specification">
                <div className="col-sm-4">
                  {" "}
                  <label>Battery</label>{" "}
                </div>
                <div className="col-sm-8">
                  {" "}
                  <p>3-cell, 36 Wh Li-ion</p>{" "}
                </div>
              </div>
              <hr className="offset-lg" />
            </div>
            <div className="col-sm-5 no-padding-xs">
              <div className="talk white">
                <h2 className="h3">Do you have any questions?</h2>
                <p className>Whatsuping now with our manager</p>
                <hr className="offset-md" />
                <a href="tel:+80005554465" className="btn btn-primary btn-sm">
                  {" "}
                  <i className="ion-social-whatsapp" /> 8000 555-44-65{" "}
                </a>
                <hr className="offset-md visible-xs" />
              </div>
              <hr className="offset-sm hidden-xs" />
              <div className="comments white">
                <h2 className="h3">What do you think? (#3)</h2>
                <br />
                <div className="wrapper">
                  <div className="content">
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
                    <h3>Anne Hathaway</h3>
                    <label>2 years ago</label>
                    <p>
                      Apple Music brings iTunes music streaming to the UK. But
                      is it worth paying for? In our Apple Music review, we
                      examine the service's features, UK pricing, audio quality
                      and music library
                    </p>
                  </div>
                </div>
                <hr className="offset-lg" />
                <hr className="offset-md" />
                <button
                  className="btn btn-primary btn-sm"
                  data-toggle="modal"
                  data-target="#Modal-Comment"
                >
                  {" "}
                  <i className="ion-chatbox-working" /> Add comment{" "}
                </button>
                <hr className="offset-md visible-xs" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="offset-lg" />
      <section className="products">
        <div className="container">
          <h2 className="upp align-center-xs"> Related products </h2>
          <hr className="offset-lg" />
          <div className="row">
            <div className="col-sm-4 col-md-3 product">
              <div className="body">
                <a
                  href="#favorites"
                  className="favorites"
                  data-favorite="inactive"
                >
                  <i className="ion-ios-heart-outline" />
                </a>
                <a href="./">
                  <img
                    src=" /assets/img/products/apple-imac-27-retina.jpg"
                    alt="Apple iMac 27 Retina"
                  />
                </a>
                <div className="content align-center">
                  <p className="price">$2099.99</p>
                  <h2 className="h3">iMac 27 Retina</h2>
                  <hr className="offset-sm" />
                  <button className="btn btn-link">
                    {" "}
                    <i className="ion-android-open" /> Details
                  </button>
                  <button className="btn btn-primary btn-sm rounded">
                    {" "}
                    <i className="ion-bag" /> Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 product">
              <div className="body">
                <a
                  href="#favorites"
                  className="favorites"
                  data-favorite="inactive"
                >
                  <i className="ion-ios-heart-outline" />
                </a>
                <a href="./">
                  <img
                    src=" /assets/img/products/dell-inspiron-23.jpg"
                    alt="Dell Inspion 23"
                  />
                </a>
                <div className="content align-center">
                  <p className="price">$1987.99</p>
                  <h2 className="h3">Dell Inspion 23</h2>
                  <hr className="offset-sm" />
                  <button className="btn btn-link">
                    {" "}
                    <i className="ion-android-open" /> Details
                  </button>
                  <button className="btn btn-primary btn-sm rounded">
                    {" "}
                    <i className="ion-bag" /> Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 product">
              <div className="body">
                <a
                  href="#favorites"
                  className="favorites"
                  data-favorite="inactive"
                >
                  <i className="ion-ios-heart-outline" />
                </a>
                <a href="./">
                  <img
                    src=" /assets/img/products/lenovo-yoga.jpg"
                    alt="Lenovo Yoga 900"
                  />
                </a>
                <div className="content align-center">
                  <p className="price">$1899.99</p>
                  <h2 className="h3">Lenovo Yoga 900</h2>
                  <hr className="offset-sm" />
                  <button className="btn btn-link">
                    {" "}
                    <i className="ion-android-open" /> Details
                  </button>
                  <button className="btn btn-primary btn-sm rounded">
                    {" "}
                    <i className="ion-bag" /> Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 product hidden-sm">
              <div className="body">
                <a
                  href="#favorites"
                  className="favorites"
                  data-favorite="inactive"
                >
                  <i className="ion-ios-heart-outline" />
                </a>
                <a href="./">
                  <img
                    src=" /assets/img/products/hp-spectre-x360.jpg"
                    alt="HP Spectre x360"
                  />
                </a>
                <div className="content align-center">
                  <p className="price">$2994.99</p>
                  <h2 className="h3">HP Spectre x360</h2>
                  <hr className="offset-sm" />
                  <button className="btn btn-link">
                    {" "}
                    <i className="ion-android-open" /> Details
                  </button>
                  <button className="btn btn-primary btn-sm rounded">
                    {" "}
                    <i className="ion-bag" /> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="offset-lg" />
      <hr className="offset-sm" />
    </Fragment>
  );
}

export default NewComponent;
