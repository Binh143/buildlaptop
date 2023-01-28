import React, { Component } from "react";
import { Fragment } from "react";
class ContentContacts extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <hr className="offset-top" />
          <div className="white">
            <hr className="offset-sm" />
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div id="Address">
                    <address>
                      <label className="h3">Unistore Pro, Inc.</label>
                      <br />
                      1305 Market Street, Suite 800
                      <br />
                      San Francisco, CA 94102
                      <br />
                      <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                    <address>
                      <strong>Support</strong>
                      <br />
                      <a href="mailto:#">sup@example.com</a>
                      <br />
                      <br />
                      <strong>Partners</strong>
                      <br />
                      <a href="mailto:#">col@example.com</a>
                    </address>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div id="GoMap">
                    <iframe
                      title="This is a unique title"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7516950361482!2d106.77279011428737!3d10.830304561159634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEPDtG5nIFRoxrDGoW5nIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1635082172640!5m2!1svi!2s"
                      width={400}
                      height={250}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="offset-lg" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContentContacts;
