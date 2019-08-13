import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PictureCategory from "./PictureCategory";

import BobaOutside from "../assets/BobaOutside.jpg";
import BobaInside from "../assets/BobaInside.jpg";
import BobaDrink from "../assets/BobaDrink.jpg";
import BobaMenu from "../assets/BobaMenu.jpg";

const PhotoComponent = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: auto;
  position: relative;
  margin-bottom: 50px;
`;

const Title = styled("p")`
  font-family: "Montserrat", sans-serif;
  color: #06d198;
  font-weight: bold;
  font-size: 2vw;
`;

const Section = styled("div")`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

const ViewAllLink = styled(Link)`
  text-decoration: none;
  color: #06d198;
  font-family: "Montserrat", sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

let categories = [
  {
    Picture: BobaOutside,
    Name: "Outside"
  },
  {
    Picture: BobaInside,
    Name: "Inside"
  },
  {
    Picture: BobaDrink,
    Name: "Drinks"
  },
  {
    Picture: BobaMenu,
    Name: "Menu"
  }
];

export default class PhotoSection extends React.Component {
  render() {
    return (
      <>
        <PhotoComponent>
          <Title>Check this place out</Title>
          <Section>
            {categories.map(categoryprop => (
              <PictureCategory ItemProps={categoryprop} />
            ))}
          </Section>
          <ViewAllLink to="/">View all 34 photos</ViewAllLink>
        </PhotoComponent>
      </>
    );
  }
}
