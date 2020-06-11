import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.div`
  background-color: #ec6b0c;
  color: white;
  font-weight: 600;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  align-items: center;
`;

export const DropDownContent = styled.div`
  display: none;
  width: 300px;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.makerShow ? "block" : "none")};
`;

export const MenuListElement = styled.li`
  cursor: pointer;
  padding-bottom: 16px;
  padding-top: 16px;
  width: 100%;
  text-align: center;
  -webkit-transition: 0.2s linear;
  -moz-transition: 0.2s linear;
  transition: 0.2s linear;
  font-size: 1.2rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: grayscale(0.1) opacity(0.9);
    -webkit-backdrop-filter: grayscale(0.1) opacity(0.9);
  }
`;

export const MakerChoose = styled.li`
  color: black;
  cursor: pointer;
  width: 100%;
  text-align: center;
  -webkit-transition: 0.2s linear;
  -moz-transition: 0.2s linear;
  transition: 0.2s linear;
  display: inline-block;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: grayscale(0.1) opacity(0.9);
    -webkit-backdrop-filter: grayscale(0.1) opacity(0.9);
  }
`;

export const SubMaker = styled.div`
  cursor: pointer;
  padding-top: 4px;
  padding-bottom: 4px;
  color: black !important;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  text-decoration: none;
  color: white;
`;

export const AnyMaker = styled.div`
  padding-bottom: 16px;
  padding-top: 16px;
  cursor: pointer;
  color: white;
  text-align: center;
  text-decoration: none;
  width: 100%;
  text-decoration: none;
  height: 100%;
  font-size: 1.2rem;
`;
