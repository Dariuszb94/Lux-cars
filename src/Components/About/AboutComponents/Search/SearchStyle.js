import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const SearchContainer = styled.div`
  background-color: rgba(68, 68, 68, 0.7);
  color: white;
  padding: 16px;
  min-height: 30%;
  max-height: 60%;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  @media (max-width: 880px) {
    width: 250px;
  }
  @media (max-width: 750px) {
    width: 100%;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const SearchHeader = styled.h2`
  font-weight: 300;
  font-size: 1.4rem;
  margin-bottom: 8px;
  @media (max-width: 750px) {
    align-self: flex-start;
    padding-left: 5%;
    margin-bottom: 12px;
    font-size: 2rem;
  }
`;

export const SearchButton = styled.button`
  background-color: #ec6b0c;
  outline: none;
  border: none;
  color: white;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 4px;
  align-self: flex-start;
  width: 100%;
  -webkit-transition: 0.2s linear;
  -moz-transition: 0.2s linear;
  transition: 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
  @media (max-width: 750px) {
    margin-left: 5%;
    width: 90%;
  }
`;
export const DropDownContentMaker = styled.div`
  display: none;
  width: 300px;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.makerShow ? "block" : "none")};
  @media (max-width: 880px) {
    width: 250px;
  }
  @media (max-width: 750px) {
    width: 90%;
  }
`;

export const StyledLink = styled(NavLink).attrs()`
  margin-top: 8px;
  width: 100%;
  text-decoration: none;
  color: white;
`;

export const DropDownContentModel = styled.div`
  display: none;
  width: 300px;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.modelShow ? "block" : "none")};
  @media (max-width: 880px) {
    width: 250px;
  }
  @media (max-width: 750px) {
    width: 90%;
  }
`;

export const MakerChoose = styled.ul`
  color: black;
  display: inline-block;
  @media (max-width: 750px) {
    width: 90%;
    margin-bottom: 4px;
  }
`;

export const ModelChoose = styled.ul`
  color: black;
  display: inline-block;
  @media (max-width: 750px) {
    width: 90%;
    margin-bottom: 12px;
  }
`;

export const AnyMaker = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: white;
  text-align: center;
  text-decoration: none;
  color: black;
  width: 100%;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const AnyModel = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: white;
  text-align: center;
  text-decoration: none;
  color: black;
  width: 100%;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const SubMaker = styled.div`
  cursor: pointer;
  padding: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const AnyMakerText = styled.div``;
