import styled from "styled-components";
import CallIcon from "@material-ui/icons/Call";
import FacebookIcon from "@material-ui/icons/Facebook";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

export const HeaderContainer = styled.div`
  background: #020202;
  display: flex;
  flex-direction: row;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 750px) {
    background-color: #ec6b0c;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  -webkit-box-shadow: 10px 10px 47px -26px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 10px 10px 47px -26px rgba(0, 0, 0, 0.47);
  box-shadow: 10px 10px 47px -26px rgba(0, 0, 0, 0.47);
`;

export const TopRated = styled.img`
  width: 400px;
  height: 31px;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  text-decoration: none;
  color: black;
  &:hover {
    color: #ec6b0c;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const CallLowerUpperContainer = styled.div`
  padding-right: 16px;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
`;

export const CallUpper = styled.div`
  color: white;
  text-align: right;
`;

export const CallLower = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 32px !important;
  align-items: center;
`;

export const Facebook = styled(FacebookIcon)`
  color: #ec6b0c;
  cursor: pointer;
  font-size: 32px !important;
  padding-left: 16px;
  &:hover {
    color: white;
  }
`;

export const CallNumber = styled.div`
  color: white;
`;

export const Makers = styled.ul`
  display: ${(props) => (props.makerShow ? "grid" : "none")};
  grid-template-columns: 50% 50%;
  padding: 16px;
`;

export const Maker = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
  list-style: none;
  cursor: pointer;
  &:hover {
    color: #ec6b0c;
  }
`;

export const LogoLink = styled.div``;

export const MenuDropDown = styled.ul`
  position: absolute;
  z-index: 1;
  display: ${(props) => (props.showMenu ? "block" : "none")};
  list-style: none;
  width: 100%;
  background-color: white;
  margin-left: -16px;
  margin-top: 34px;
`;

export const MenuDropDownElement = styled.li`
  padding-top: 16px;
  padding-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  font-weight: 600;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  &:hover {
    color: #ec6b0c;
  }
`;

export const MenuDropDownElementUsedCars = styled.li`
  color: black;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  font-weight: 600;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-content: center;
  cursor: pointer;
  &:hover {
    color: #ec6b0c;
  }
`;

export const StyledCallIcon = styled(CallIcon)`
  color: #ec6b0c;
  font-size: 32px !important;
`;

export const StyledMenuIcon = styled(MenuIcon)`
  color: white;
  font-size: 32px !important;
  cursor: pointer;
`;

export const StyledMenuIconContainer = styled.div`
  display: none !important;
  @media (max-width: 750px) {
    display: initial !important;
  }
`;
