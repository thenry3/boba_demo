import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryWrapper = styled("div")`
  position: relative;
  width: 25%;
  height: 30vh;
  margin-right: 2%;
  &:nth-child(4n) {
    margin-right: 0px;
  }
`;

const LinkWrapper = styled(Link)`
  width: 100%;
  height: 100%;
  position: relative;
  text-decoration: none;
  color: #737373;
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
`;

const PhotoDiv = styled("div")`
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    url(${props => props.image});
  background-position: center;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 85%;
  ${CategoryWrapper}:hover & {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      ),
      url(${props => props.image});
  }
`;

const CategoryName = styled("p")`
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1em;
  font-weight: bold;
  position: relative;
`;

interface CategoryProps {
  ItemProps: {
    Picture: any;
    Name: string;
  };
}

export default class PictureCategory extends React.Component<CategoryProps> {
  render() {
    return (
      <>
        <CategoryWrapper>
          <LinkWrapper to="/">
            <Wrapper>
              <PhotoDiv image={this.props.ItemProps.Picture} />
              <CategoryName>{this.props.ItemProps.Name}</CategoryName>
            </Wrapper>
          </LinkWrapper>
        </CategoryWrapper>
      </>
    );
  }
}
