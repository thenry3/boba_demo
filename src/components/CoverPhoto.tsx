import * as React from "react";
import styled from "styled-components";

import BobaCover from "../assets/BobaCover.jpg";

const Header = styled("div")`
  display: flex;
  position: relative;
  width: 95%;
  height: 67vh;
  margin: auto;
  justify-content: space-between;
`;

const Photo = styled("div")`
  background: url(${BobaCover}) no-repeat center;
  background-size: cover;
  height: 100%;
  width: 63%;
  position: relative;
  margin: auto;
`;

const CoverText = styled("div")`
  background: #f3f3f3;
  width: 33%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const BobaTitle = styled("p")`
  color: #06d198;
  font-size: 3vw;
  font-family: "Comfortaa", sans-serif;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-align: center;
  width: auto;
  margin-bottom: 5px;
  text-transform: lowercase;
`;

const BobaRating = styled("p")`
  font-family: "Comfortaa", sans-serif;
  color: #737373;
  text-align: center;
  font-size: 2vw;
  margin-top: 0px;
`;

const BobaHours = styled("table")`
  width: 60%;
`;

const HourRow = styled("tr")`
  font-family: "Montserrat", sans-serif;
  font-size: 1vw;
  color: #737373;
`;

const HourTitle = styled("p")`
  font-family: "Montserrat", sans-serif;
  color: #737373;
  font-weight: bold;
  letter-spacing: 0.1em;
  font-size: 1.2vw;
`;

const Day = styled("td")`
  text-align: left;
  width: 50%;
  font-weight: bold;
`;

const Hour = styled("td")`
  text-align: right;
  width: 50%;
  text-transform: lowercase;
`;

export default class CoverPhoto extends React.Component {
  render() {
    return (
      <>
        <Header>
          <Photo />
          <CoverText>
            <BobaTitle>Asha Tea House</BobaTitle>
            <BobaRating>4.5 / 5</BobaRating>
            <HourTitle>Hours of Operation</HourTitle>
            <BobaHours>
              <HourRow>
                <Day>Sunday</Day>
                <Hour>9:30AM - 8:30PM</Hour>
              </HourRow>
              <HourRow>
                <Day>Monday</Day>
                <Hour>9:00AM - 8:00PM</Hour>
              </HourRow>
              <HourRow>
                <Day>Tuesday</Day>
                <Hour>9:00AM - 8:00PM</Hour>
              </HourRow>
              <HourRow>
                <Day>Wednesday</Day>
                <Hour>9:00AM - 8:00PM</Hour>
              </HourRow>
              <HourRow>
                <Day>Thursday</Day>
                <Hour>9:00AM - 8:00PM</Hour>
              </HourRow>
              <HourRow>
                <Day>Friday</Day>
                <Hour>9:00AM - 8:00PM</Hour>
              </HourRow>
              <HourRow>
                <Day>Saturday</Day>
                <Hour>9:30AM - 8:30PM</Hour>
              </HourRow>
            </BobaHours>
          </CoverText>
        </Header>
      </>
    );
  }
}
