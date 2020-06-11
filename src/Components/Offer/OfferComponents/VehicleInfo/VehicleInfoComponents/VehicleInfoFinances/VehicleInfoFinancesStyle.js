import React from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: #474747;
  padding: 16px;
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  @media (max-width: 600px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const Sliders = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Monthly = styled.div`
  margin-top: 24px;
  align-self: center;
  border-radius: 8px;
  padding: 16px;
`;

export const Header = styled.h2`
  border-bottom: 2px solid #ec6b0c;
  width: 30%;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (max-width: 700px) {
    width: 48%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const MonthsText = styled.h3`
  padding-bottom: 4px;
  text-align: center;
`;

export const StyledMonthSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
  @media (max-width: 450px) {
    margin-bottom: 24px;
  }
`;

export const StyledDepositSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;

export const StyledThumbMonths = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  color: white;
  background-color: #ec6b0c;
  border-radius: 50%;
  cursor: grab;
`;

export const StyledThumbDeposit = styled.div`
  height: 25px;
  line-height: 25px;
  width: 100px;
  text-align: center;
  color: white;
  background-color: #ec6b0c;
  border-radius: 8%;
  cursor: grab;
  @media (max-width: 900px) {
    width: 60px;
  }
  @media (max-width: 600px) {
    width: 55px;
  }
`;

export const ThumbMonths = (props, state) => (
  <StyledThumbMonths {...props}>{state.valueNow}</StyledThumbMonths>
);

export const ThumbDeposit = (props, state) => (
  <StyledThumbDeposit {...props}>{state.valueNow}</StyledThumbDeposit>
);

export const StyledTrackMonths = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 1 ? "#000" : "#2d2d2d")};
  border-radius: 999px;
`;
export const StyledTrackDeposit = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 1 ? "#000" : "#2d2d2d")};
  border-radius: 999px;
`;

export const TrackMonths = (props, state) => (
  <StyledTrackMonths {...props} index={state.index} />
);

export const TrackDeposit = (props, state) => (
  <StyledTrackDeposit {...props} index={state.index} />
);

export const StyledLink = styled(NavLink).attrs()`
  font-size: 0.9rem;
  color: white;
  background-color: #ec6b0c;
  width: 30%;
  text-decoration: none;
  -webkit-transition: background-color 0.4s linear;
  -moz-transition: background-color 0.4s linear;
  transition: background-color 0.4s linear;
  padding: 8px;
  border-radius: 4px;
  align-self: center;
  display: block;
  text-align: center;
  &:hover {
    background-color: black;
  }
`;
