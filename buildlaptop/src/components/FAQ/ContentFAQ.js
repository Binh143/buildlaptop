import React, { Component } from "react";
import { Fragment } from "react";
class ContentFAQ extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <div className="container faq">
            <div className="row">
              <div className="col-sm-6">
                <a
                  className
                  role="button"
                  data-toggle="collapse"
                  href="#question1"
                  aria-expanded="true"
                  aria-controls="question1"
                >
                  <h1 className="h3">How much should I bid?</h1>
                </a>
                <div className="collapse" id="question1">
                  <div className="well">
                    <p>
                      Unistore is great for finding deals, as long as you know
                      what you're looking for and how much the item is worth.
                      Having that information is vital to placing bids in
                      correct amount and saving lots of money.
                    </p>
                  </div>
                </div>
                <br />
                {/* //// */}
                <a
                  className
                  role="button"
                  data-toggle="collapse"
                  href="#question3"
                  aria-expanded="false"
                  aria-controls="question3"
                >
                  <h1 className="h3">
                    What's the best way to find my favorite items?
                  </h1>
                </a>
                <div className="collapse" id="question3">
                  <div className="well">
                    <p>
                      If you're sick of trying to remember your searches for all
                      the different types of spellings, all the different
                      sellers you like, and all the different things you
                      collect, Unistore provides you with an easy way to
                      remember - My Unistore.
                    </p>
                  </div>
                </div>
                <br />
                {/* //// */}
                <a
                  className
                  role="button"
                  data-toggle="collapse"
                  href="#question5"
                  aria-expanded="false"
                  aria-controls="question5"
                >
                  <h1 className="h3">What should I use to pay?</h1>
                </a>
                <div className="collapse" id="question5">
                  <div className="well">
                    <p>
                      Although we've heard of issues with PayPal, we still
                      recommend them for nearly all purchases. Nearly all
                      sellers accept PayPal payment, and many purchases are
                      automatically covered for fraud protection. Please check
                      PayPal.com for details on their account protection tips
                      and fraud protection services.
                    </p>
                  </div>
                </div>
                <br />
                {/* //// */}
              </div>
              <div className="col-sm-6">
                <a
                  className
                  role="button"
                  data-toggle="collapse"
                  href="#question2"
                  aria-expanded="true"
                  aria-controls="question2"
                >
                  <h1 className="h3">What's the best way to search?</h1>
                </a>
                <div className="collapse" id="question2">
                  <div className="well">
                    <p>
                      Unistore search engine is pretty good but can be a bit
                      overwhelming if you're not sure what you're looking for,
                      or if you're just browsing. Unistore is constantly working
                      at upgrading its search engine to make things easier to
                      find (it's in their best interest to have as many buyers
                      for items as possible).
                    </p>
                  </div>
                </div>
                <br />
                {/* //// */}
                <a
                  className
                  role="button"
                  data-toggle="collapse"
                  href="#question4"
                  aria-expanded="false"
                  aria-controls="question4"
                >
                  <h1 className="h3">What's a good shipping rate/method?</h1>
                </a>
                <div className="collapse" id="question4">
                  <div className="well">
                    <p>
                      If possible, check with the seller to ask how they'll pack
                      the item. I once received a used laptop that was literally
                      scotch-taped into a used, ripped, USPS priority box that
                      was too small so part of the computer was sticking out -
                      with no padding what-so-ever. If you're getting breakable
                      items, make sure the seller will pack it correctly.
                    </p>
                  </div>
                </div>
                <br />
                {/* //// */}
                <a
                  className
                  role="button"
                  data-toggle="collapse"
                  href="#question6"
                  aria-expanded="false"
                  aria-controls="question6"
                >
                  <h1 className="h3">
                    What should I do if the item is defective/broken/wrong?
                  </h1>
                </a>
                <div className="collapse" id="question6">
                  <div className="well">
                    <p>
                      The first thing to do is to double check the item - make
                      sure it actually is broken. You'll probably need to go
                      over the item description on eBay to verify that it didn't
                      arrive as promised. Next, contact the seller directly and
                      describe the issue with the item.
                    </p>
                  </div>
                </div>
                <br />
                {/* //// */}
              </div>
            </div>
          </div>
          <hr className="offset-lg" />
          <hr className="offset-lg" />
        </div>
      </Fragment>
    );
  }
}

export default ContentFAQ;
