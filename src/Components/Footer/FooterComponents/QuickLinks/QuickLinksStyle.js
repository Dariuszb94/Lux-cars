import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export const Container = styled.div`
  width: 28%;
  font-size: 0.9rem;
  @media (max-width: 660px) {
    width: 90%;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const Header = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  padding-bottom: 12px;
  border-bottom: 2px solid #3f3f3f;
  margin-bottom: 16px;
`;

export const Weekday = styled.div`
  border-bottom: 1px solid #3f3f3f;
  padding-bottom: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

export const StyledChevronRightIcon = styled(ChevronRightIcon)`
  font-size: 0.9rem;
  cursor: pointer;
  color: white;
`;

export const StyledLink = styled(NavLink).attrs()`
  font-size: 0.9rem;
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  -webkit-transition: color 0.2s linear;
  -moz-transition: color 0.2s linear;
  transition: color 0.2s linear;
  color: #919191;
  &:hover {
    color: white;
  }
`;
