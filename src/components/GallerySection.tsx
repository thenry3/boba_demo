import * as React from "react";
import styled from "styled-components";

const SectionWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 80%;
`;

const SectionTitle = styled("div")`
  color: #737373;
  font-family: "Comfortaa", sans-serif;
  font-weight: bold;
`;

const SectionPictures = styled("div")`
  display: flex;
  justify-content: flex-start;
`;

const GalleryPicture = styled("div")`
  height: 28vh;
  width: 25%;
  background: url(${props => props.imageURL}) center no-repeat;
  background-size: cover;
`;

interface GalleryProps {
  section: {
    name: string;
    pictures: any;
  };
}

export default class GallerySection extends React.Component<GalleryProps> {
  render() {
    return (
      <>
        <SectionWrapper>
          <SectionTitle>{this.props.section.name}</SectionTitle>
          <SectionPictures>
            {this.props.section.pictures.map(image => (
              <GalleryPicture imageURL={image} />
            ))}
          </SectionPictures>
        </SectionWrapper>
      </>
    );
  }
}
