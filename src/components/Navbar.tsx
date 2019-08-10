import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavComponent = styled("div")`
  display: flex;
  position: sticky;
  background: #30e3a7;
  justify-content: flex-start;
  align-items: center;
  font-family: "Lato", sans-serif;
`;

const WebsiteTitle = styled(Link)`
  color: white;
  margin: 10px 8vw;
  margin-right: 0px;
  font-size: 3.5vw;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-decoration: none;
`;

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <NavComponent>
          <WebsiteTitle to="/">BobaRate</WebsiteTitle>
        </NavComponent>
      </>
    );
  }
}
