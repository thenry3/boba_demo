import * as React from "react";
import GallerySection from "../components/GallerySection";
import Gallery from "../assets/Gallery";

export default class DemoGalleryPage extends React.Component {
  constructor(props) {
    super(props);
  }
  renderGalleries() {
    let gallArray = [];
    for (var section in Gallery) {
      gallArray.push(
        <GallerySection galleryName={section} pictures={Gallery[section]} />
      );
    }
    return gallArray;
  }

  render() {
    return <>{this.renderGalleries()}</>;
  }
}
