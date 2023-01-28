import React from 'react';
import { Fragment } from 'react';

function ImagesProductDetailt() {
    return (
        <Fragment>
            <div className="col-sm-7 col-md-7 white no-padding">
                <div className="carousel-product" data-count={4} data-current={1}>
                    <div className="items">
                        <button className="btn btn-control" data-direction="right">
                            {' '}
                            <i className="ion-ios-arrow-right" />
                        </button>
                        <button className="btn btn-control" data-direction="left">
                            {' '}
                            <i className="ion-ios-arrow-left" />
                        </button>
                        <div className="item center" data-marker={1}>
                            <img
                                src="../assets/img/product/1.jpg"
                                alt="Microsoft Surface Studio"
                                className="background"
                            />
                        </div>
                        <div className="item" data-marker={2}>
                            <img
                                src="../assets/img/product/2.jpg"
                                alt="Microsoft Surface Studio"
                                className="background"
                            />
                        </div>
                        <div className="item" data-marker={3}>
                            <img
                                src="../assets/img/product/3.jpg"
                                alt="Microsoft Surface Studio"
                                className="background"
                            />
                        </div>
                        <div className="item" data-marker={4}>
                            <img
                                src="../assets/img/product/video.jpg"
                                alt="Microsoft Surface Studio"
                                className="background"
                            />
                            <div className="tiles">
                                <a href="#video" data-gallery="#video" data-source="youtube" data-id="BzMLA8YIgG0">
                                    <img src="../assets/img/product/video.jpg" alt="Surface Studio" />
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
        </Fragment>
    );
}
export default ImagesProductDetailt;
