import React, { Component, Fragment } from "react";

class FilterBlog extends Component {
  render() {
    return (
      <Fragment>
        <hr className="offset-top" />
        <div className="tags">
          <div className="container">
            <p>Search by tags</p>
            <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-default btn-sm active">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  defaultChecked
                />{" "}
                All items
              </label>
              <label className="btn btn-default btn-sm">
                <input type="radio" name="options" id="option2" /> Newest
              </label>
              <label className="btn btn-default btn-sm">
                <input type="radio" name="options" id="option3" /> Popular
              </label>
              <label className="btn btn-default btn-sm">
                <input type="radio" name="options" id="option4" /> News
              </label>
              <label className="btn btn-default btn-sm">
                <input type="radio" name="options" id="option5" /> Articles
              </label>
              <label className="btn btn-default btn-sm">
                <input type="radio" name="options" id="option6" /> Reviews
              </label>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FilterBlog;
