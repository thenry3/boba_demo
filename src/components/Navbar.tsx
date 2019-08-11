import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavComponent = styled("div")`
  display: flex;
  position: sticky;
  background: #06d198;
  justify-content: flex-start;
  align-items: center;
  font-family: "Comfortaa", "sans-serif";
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
  position: relative;
  transition: 0.4s;
  height: 100%;
  justify-content: ${props => {
    if (props.focused) {
      return "flex-end"
    }
    else {
      return "flex-start"
    }
  }}
  width: ${props => {
    if (props.focused) {
      return "25vw"
    }
    else {
      return "2em"
    }
  }}
  margin-left:${props => {
    if (props.focused) {
      return "0px"
    }
    else {
      return "4vw"
    }
  }}
  &:hover {
    justify-content: flex-end;
    width: 25vw;
    margin-left: 0px;
  }
`;

const Searchbar = styled("input")`
  border: none;
  position: relative;
  height: 100%;
  border-radius: 25px;
  padding: 0px;
  font-size: 1.3vw;
  color: #484848;
  width: 0%;
  transition: 0.4s;
  &:focus {
    outline: none;
    width: 100%;
    padding: 6px 20px;
    padding-right: 12%;
  }
  &:focus  ${SearchDiv} {
    justify-content: flex-end;
    width: 25vw;
    margin: 0px;
  }
  ${SearchDiv}:hover & {
    width: 100%;
    padding: 6px 20px;
    padding-right: 12%;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 0%;
  width: 2em;
  height: 2em;
  transition: 0.4s;
  color: white;
  ${Searchbar}:focus + & {
    right: 4%;
    width: 1em;
    height: 1em;
    color: black;
  }
  ${SearchDiv}:hover > & {
    right: 4%;
    width: 1em;
    height: 1em;
    color: black;
  }
`;

export default class Navbar extends React.Component<{}, {isFocused: boolean}> {
  constructor(props) {
    super(props)
    this.focusOff = this.focusOff.bind(this)
    this.focusOn = this.focusOn.bind(this)
  }

  componentWillMount() {
    this.setState({
      isFocused: false
    })
  }

  focusOn() {
    this.setState({
      isFocused: true
    })
  }

  focusOff() {
    this.setState({
      isFocused: false
    })
  }

  render() {
    return (
      <>
        <NavComponent>
          <WebsiteTitle to="/">bobarate</WebsiteTitle>
          <SearchDiv focused={this.state.isFocused}>
            <Searchbar placeholder="Search a milk tea shop" onFocus={this.focusOn} onBlur={this.focusOff}/>
            <SearchIcon />
          </SearchDiv>
        </NavComponent>
      </>
    );
  }
}
