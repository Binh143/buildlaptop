import React, { Component } from "react";
import TitleGallery from "../../components/gallery/TitleGallery";
import ContentGallary from "../../components/gallery/ContentGallary";
class Gallery extends Component {
  render() {
    return (
      <div>
        <TitleGallery />
        <ContentGallary />
      </div>
    );
  }
}

export default Gallery;
