import * as React from "react";

import Navbar from "../components/Navbar";
import CoverPhoto from "../components/CoverPhoto";

export default class Demo_Page extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <CoverPhoto />
      </>
    );
  }
}
