import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: black;
  padding: 8%;
  padding-top: 4%;
  padding-bottom: 4%;
  @media (max-width: 1000px) {
    padding: 4%;
  }
  @media (max-width: 910px) {
    padding: 2%;
  }
  @media (max-width: 450px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Header = styled.h1`
  color: #ec6007;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const CarHeader = styled.div`
  color: white;
  display: flex;
  padding-bottom: 8px;
  justify-content: center;
  @media (max-width: 330px) {
    font-size: 0.9rem;
  }
`;

export const Car = styled.div`
  width: 24%;
  max-width: 300px;
  margin-right: 4px;
  margin-left: 4px;
  margin-bottom: 16px;
  min-width: 160px;
  @media (max-width: 370px) {
    margin-right: 2px;
    margin-left: 2px;
  }
`;

export const CarMainElement = styled.li`
  text-align: center;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const Message = styled.p`
  color: white;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CarMain = styled.ul`
  list-style: none;
  background-color: #f5f5f5;
  ${CarMainElement}:nth-of-type(odd) {
    background-color: #ffffff;
  }
`;

export const CarHeaderMaker = styled.h2`
  font-weight: 400;
  @media (max-width: 300px) {
    font-size: 0.9rem;
  }
`;
export const CarHeaderModel = styled.h2`
  font-weight: 400;
  @media (max-width: 300px) {
    font-size: 0.9rem;
  }
`;

export const Cars = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #3a3a3a;
  padding: 16px;
  flex-wrap: wrap;
  @media (max-width: 370px) {
    padding: 4px;
  }
  @media (max-width: 900px) {
    justify-content: center;
  }
`;
export const CarDetailOrange = styled.div`
  cursor: pointer;
  background-color: #ec6b0c;
  width: 100%;
  padding-top: 8px;
  margin-top: 8px;
  padding-bottom: 8px;
  color: white;
  text-align: center;
  border-radius: 8px;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  transition: 0.3s linear;
  &:hover {
    background-color: black;
  }
`;
export const StyledLink = styled(NavLink).attrs()`
  cursor: pointer;
  background-color: #ec6b0c;
  width: 100%;
  padding-top: 8px;
  margin-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  border-radius: 8px;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  transition: 0.3s linear;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: black;
  }
`;
export const CarImage = styled.img`
  height: auto;
  max-width: 100%;
`;
export const Error = styled.div``;
