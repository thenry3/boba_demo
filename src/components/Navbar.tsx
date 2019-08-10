import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavComponent = styled("div")`
  display: flex;
  position: sticky;
  background: #06d198;
  justify-content: flex-start;
  align-items: center;
  font-family: "Comfortaa", sans-serif;
`;

const WebsiteTitle = styled(Link)`
  color: white;
  margin: 15px 5vw;
  margin-right: 20px;
  font-size: 3.5vw;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-decoration: none;
`;

const SearchDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const Searchbar = styled("input")`
  border: none;
  position: relative;
  height: 100%;
  border-radius: 25px;
  padding: 6px 20px;
  padding-right: 12%;
  font-size: 1.3vw;
  color: #484848;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 4%;
`;

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <NavComponent>
          <WebsiteTitle to="/">bobarate</WebsiteTitle>
          <SearchDiv>
            <Searchbar placeholder="Search a milk tea shop" />
            <SearchIcon />
          </SearchDiv>
        </NavComponent>
      </>
    );
  }
}
