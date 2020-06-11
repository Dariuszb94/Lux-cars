import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CarDetailOrange = styled.div`
  cursor: pointer;
  background-color: #ec6b0c;
  width: 80%;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
  border-radius: 8px;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  transition: 0.3s linear;
  &:hover {
    background-color: black;
  }
  @media (max-width: 360px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (max-width: 320px) {
    width: 84%;
  }
  @media (max-width: 305px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const StyledLink = styled(NavLink).attrs()`
  background-color: #ec6b0c;
  width: 80%;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  transition: 0.3s linear;
  color: white;
  &:hover {
    background-color: black;
    text-decoration: none;
  }
  @media (max-width: 360px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (max-width: 320px) {
    width: 84%;
  }
  @media (max-width: 305px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;
export const Error = styled.div``;
