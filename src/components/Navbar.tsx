import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavComponent = styled("div")`
  display: flex;
  position: sticky;
  background: white;
  justify-content: space-between;
  align-items: center;
  font-family: "Comfortaa", "sans-serif";
  height: 9vh;
`;

const WebsiteTitle = styled(Link)`
  color: #06d198;
  margin: 15px 5vw;
  margin-right: 20px;
  font-size: 3vw;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-decoration: none;
`;

const SearchDiv = styled("div")`
  display: flex;
  align-items: center;
  position: relative;
  transition: 0.4s;
  border-radius: 50%;
  justify-content: ${props => {
    if (props.focused) {
      return "flex-end"
    }
    else {
      return "center"
    }
  }}
  width: ${props => {
    if (props.focused) {
      return "20vw"
    }
    else {
      return "4em"
    }
  }}
  margin-left: ${props => {
    if (props.focused) {
      return "0px"
    }
    else {
      return "4vw"
    }
  }}
  height: ${props => {
    if (props.focused) {
      return "4em"
    }
    else {
      return "4em"
    }
  }}
  background: ${props => {
    if (props.focused) {
      return "white"
    }
    else {
      return "#06d198"
    }
  }}
  &:hover {
    justify-content: flex-end;
    width: 20vw;
    margin-left: 0px;
    background: white;
    height: 4em;
  }
`;

const Searchbar = styled("input")`
  border: none;
  position: relative;
  height: 40%;
  border-radius: 25px;
  font-size: 1.1vw;
  color: #484848;
  transition: 0.4s;
  width: ${props => {
    if (props.focused) {
      return "100%"
    }
    else {
      return "0%"
    }
  }}
  padding: ${props => {
    if (props.focused) {
      return "6px 12% 6px 20px"
    }
    else {
      return "0px"
    }
  }}
  border: ${props => {
    if (props.focused) {
      return "2px #06d198 solid"
    }
    else {
      return "none"
    }
  }}
  &:focus {
    outline: none;
  }
  ${SearchDiv}:hover & {
    width: 100%;
    padding: 6px 20px;
    padding-right: 12%;
    border: 2px #06d198 solid
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  width: 2em;
  height: 2em;
  transition: 0.4s;
  color: white;
  right: ${props => {
    if (props.focused) {
      return "4%"
    }
    else {
      return "auto"
    }
  }}
  width: ${props => {
    if (props.focused) {
      return "1em"
    }
    else {
      return "2em"
    }
  }}
  height: ${props => {
    if (props.focused) {
      return "1em"
    }
    else {
      return "2em"
    }
  }}
  color: ${props => {
    if (props.focused) {
      return "black"
    }
    else {
      return "white"
    }
  }}
  ${SearchDiv}:hover > & {
    right: 4%;
    width: 1em;
    height: 1em;
    color: black;
  }
`;

const NavLinks = styled('div')`
display: flex;
height: 100%;
margin-right: 3vw;
`

const NavLink = styled(Link)`
text-decoration: none;
color: #06d198;
font-size: 1.1vw;
text-align: center;
position: relative;
line-height: 9vh;
transition: 0.2s
margin-left: 2vw;
&:hover { 
  border-bottom: 0.5vh #06d198 solid
}
`
const LeftNavBar = styled('div')`
display: flex;
align-items: center;
position: relative;
`

export default class Navbar extends React.Component<{}, {isFocused: boolean, characterExists: boolean}> {
  constructor(props) {
    super(props)
    this.focusOff = this.focusOff.bind(this)
    this.focusOn = this.focusOn.bind(this)
    this.isCharacter = this.isCharacter.bind(this)
  }

  componentWillMount() {
    this.setState({
      isFocused: false,
      characterExists: false
    })
  }

  isCharacter(event) {
    if (event.target.value.length > 0) {
      this.setState({
        characterExists: true
      })
    }
    else {
      this.setState({
        characterExists: false
      })
    }
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
          <LeftNavBar>
          <WebsiteTitle to="/">bobarate</WebsiteTitle>
            <SearchDiv focused={this.state.isFocused || this.state.characterExists}>
              <Searchbar placeholder="Search a milk tea shop" onFocus={this.focusOn} onBlur={this.focusOff} onChange={this.isCharacter} focused={this.state.characterExists || this.state.isFocused}/>
              <SearchIcon focused={this.state.isFocused || this.state.characterExists}/>
            </SearchDiv>
          </LeftNavBar>
          <NavLinks>
            <NavLink to="/">profile</NavLink>
            <NavLink to="/">other</NavLink>
            <NavLink to="/">random</NavLink>
          </NavLinks>
        </NavComponent>
      </>
    );
  }
}
