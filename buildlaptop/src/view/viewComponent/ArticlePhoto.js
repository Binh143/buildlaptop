import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link } from 'react-router-dom'
class ArticlePhoto extends Component {
    render() {
        return (
            <Fragment>
            <div>
                <div className="blog-item">
                    <hr className="offset-lg visible-xs" />
                    <hr className="offset-lg visible-xs" />
                    <img src="../assets/img/blog/item-photo.jpg" alt="Apple 3D Touch" className="hidden-xs" />
                    <img src="../assets/img/blog/item-photo-xs.jpg" alt="Apple 3D Touch" className="visible-xs" />
                    <div className="white">
                        <hr className="offset-md" />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2">
                                    <h1>
                                        Apple Introduces 3D Touch, The Next Generation Of Multitouch For The iPhone 6S
                                    </h1>
                                    <br />
                                    <p>
                                        In an effort to deliver the next generation of what Apple CEO Tim Cook called
                                        "the most-loved phone in the world," the iPhone 6S has created the next
                                        generation of its industry-shattering multitouch screen: the 3D Touch, which
                                        Chief Design Officer Jony Ive called "a tremendous breakthrough in interacting
                                        with our devices" in the company's demo video.
                                        <br />
                                        <br />
                                        Deemed "a whole new dimension to the way you experience your iPhone" by Apple,
                                        3D Touch recognizes a user's wanted action via finger pressure and force, rather
                                        than a mere gesture like the traditional swipe or pinch.
                                        <br />
                                        <br />
                                        But how exactly does this work? The explanation is somewhat simple, even if the
                                        technology is more extensive than meets the eye. To wit: sensors within the
                                        smartphone measure the force of finger pressure, which then translates, letting
                                        the iPhone know the users needs and wants.
                                        <br />
                                        <br />
                                        For example, if a user applies a light pressure to the screen when selecting an
                                        option to view content, the preview for said content pops up; if the user
                                        presses harder on the option for the content, it will open automatically.
                                        <br />
                                        <br />
                                        Apple's Craig Federighi, senior vice president of software engineering, who
                                        conducted a live demo at the Apple event, also demonstrated how the new
                                        interactive interface eliminates going "in and out" of windows in certain apps,
                                        like mail apps – with 3D Touch, pressure dictates whether the user wants a sneak
                                        peek of a message, or to fully view it.
                                    </p>
                                    <br />
                                    <button className="btn btn-primary btn-sm facebook">
                                        {' '}
                                        <i className="ion-social-facebook" /> Share{' '}
                                    </button>
                                    <button className="btn btn-primary btn-sm twitter">
                                        {' '}
                                        <i className="ion-social-twitter" /> Retweet
                                    </button>
                                    <button className="btn btn-primary btn-sm googleplus">
                                        {' '}
                                        <i className="ion-social-googleplus" /> Plus{' '}
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
                                        {' '}
                                        <i className="ion-android-textsms" /> Add comment{' '}
                                    </button>
                                    <hr className="offset-md" />
                                    <h3>Anne Hathaway</h3>
                                    <label>2 years ago</label>
                                    <p>
                                        Apple Music brings iTunes music streaming to the UK. But is it worth paying for?
                                        In our Apple Music review, we examine the service's features, UK pricing, audio
                                        quality and music library
                                    </p>
                                    <h3>Chris Hemsworth</h3>
                                    <label>Today</label>
                                    <p>
                                        Samsung's Galaxy S7 smartphone is getting serious hype. Here's what it does
                                        better than Apple's iPhone 6s.
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

export default ArticlePhoto;