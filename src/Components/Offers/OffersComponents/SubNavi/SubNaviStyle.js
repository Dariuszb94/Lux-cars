import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SubNaviContainer = styled.div`
  background-color: black;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  padding-left: 1%;
  padding-right: 1%;
  color: white;
  display: flex;
  flex-direction: row;
  font-size: 0.85em;
`;

export const RightSymbol = styled.div`
  color: #3a3a3a;
  font-weight: 600;
`;

export const StyledLink = styled(NavLink).attrs()`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #ec6b0c;
  }
`;
