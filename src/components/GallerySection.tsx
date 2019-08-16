import * as React from "react";
import styled from "styled-components";

const SectionWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 80%;
  margin: auto;
  margin-bottom: 10vh;
  margin-top: 8vh;
`;

const SectionTitle = styled("div")`
  color: #737373;
  font-family: "Comfortaa", sans-serif;
  font-weight: bold;
  font-size: 2vw;
  margin-bottom: 20px;
`;

const SectionPictures = styled("div")`
  display: flex;
  justify-content: flex-start;
  position: relative;
  flex-wrap: wrap;
`;

const GalleryPicture = styled("div")`
  height: 28vh;
  width: 24%;
  background: url(${props => props.imageURL}) center no-repeat;
  background-size: cover;
  position: relative;
  margin-right: 10px;
  margin-bottom: 10px;
  &:nth-child(4n) {
    margin-right: 0px;
  }
`;

interface GalleryProps {
  galleryName: string;
  pictures: any;
}

export default class GallerySection extends React.Component<GalleryProps> {
  render() {
    return (
      <>
        <SectionWrapper id={this.props.galleryName}>
          <SectionTitle>{this.props.galleryName}</SectionTitle>
          <SectionPictures>
            {this.props.pictures.map(image => (
              <GalleryPicture imageURL={image} />
            ))}
          </SectionPictures>
        </SectionWrapper>
      </>
    );
  }
}
