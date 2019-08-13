import * as React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import CoverPhoto from "../components/CoverPhoto";
import PhotoSection from "../components/PhotoSection";

const Divider = styled("hr")`
  border: #737373 1px solid;
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
`;

export default class Demo_Page extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <CoverPhoto />
        <PhotoSection />
        <Divider />
      </>
    );
  }
}
