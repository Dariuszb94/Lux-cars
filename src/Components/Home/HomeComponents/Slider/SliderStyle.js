import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import imgBg1 from "../../../../Assets/Images/slide1bg.jpg";
import imgBg2 from "../../../../Assets/Images/slide2bg.jpg";

export const SliderContainer = styled.div``;

export const changeSlide = keyframes`
  from {opacity: 0.8;}
  to {opacity: 1;}
`;

export const FirstSlide = styled.div`
  background-image: url(${imgBg1});
  padding-bottom: 4%;
  padding-top: 8%;
  min-height: 70vh;
  background-size: cover;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  grid-template-columns: 60% 40%;
  display: ${(props) => (props.background1 ? "grid" : "none")};
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 600ms, visibility 600ms;
  animation: ${changeSlide} 1s ease-in-out;
  @media (max-width: 970px) {
    min-height: 60vh;
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (max-width: 850px) {
    min-height: 55vh;
  }
  @media (max-width: 750px) {
    grid-template-columns: 70% 30%;
    min-height: 40vh;
  }
  @media (max-width: 680px) {
    grid-template-columns: 80% 20%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 90% 10%;
    min-height: 35vh;
  }
  @media (max-width: 480px) {
    grid-template-columns: 95% 5%;
    min-height: 30vh;
  }
`;

export const SecondSlide = styled.div`
  background-image: url(${imgBg2});
  padding-bottom: 4%;
  padding-top: 8%;
  min-height: 70vh;
  background-size: cover;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  grid-template-columns: 60% 40%;
  display: ${(props) => (props.background1 ? "none" : "grid")};
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 600ms, visibility 600ms;
  animation: ${changeSlide} 1s ease-in-out;
  @media (max-width: 970px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (max-width: 970px) {
    min-height: 60vh;
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (max-width: 850px) {
    min-height: 55vh;
  }
  @media (max-width: 750px) {
    grid-template-columns: 70% 30%;
    min-height: 40vh;
  }
  @media (max-width: 680px) {
    grid-template-columns: 80% 20%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 90% 10%;
    min-height: 35vh;
  }
  @media (max-width: 480px) {
    grid-template-columns: 95% 5%;
    min-height: 30vh;
  }
`;

export const SlideText = styled.div``;

export const SlideUpperText = styled.h2`
  background-color: rgba(0, 0, 0, 0.8);
  width: 60%;
  margin-bottom: 16px;
  padding-bottom: 4px;
  padding-top: 4px;
  font-size: 2.4rem;
  padding-left: 4px;
  padding-right: 4px;
  color: white;
  @media (max-width: 1400px) {
    width: 70%;
  }
  @media (max-width: 1140px) {
    width: 75%;
  }
  @media (max-width: 970px) {
    font-size: 2.3rem;
  }
  @media (max-width: 890px) {
    font-size: 2.1rem;
  }
  @media (max-width: 770px) {
    font-size: 2rem;
  }
  @media (max-width: 750px) {
    width: 85%;
    font-size: 2.1rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
    width: 90%;
  }
  @media (max-width: 360px) {
    font-size: 1.7rem;
  }
`;

export const SlideMiddleText = styled.h2`
  background-color: rgba(255, 255, 255, 0.6);
  color: black;
  width: 80%;
  padding-bottom: 4px;
  padding-top: 4px;
  font-size: 2.2rem;
  padding-left: 4px;
  padding-right: 4px;
  @media (max-width: 1400px) {
    width: 85%;
  }
  @media (max-width: 970px) {
    font-size: 2.1rem;
  }
  @media (max-width: 890px) {
    font-size: 2rem;
  }
  @media (max-width: 770px) {
    font-size: 1.8rem;
  }
  @media (max-width: 750px) {
    width: 95%;
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
    width: 100%;
  }
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

export const SlideLowerText = styled.button`
  margin-top: 16px;
  background-color: #ec6b0c;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.6em;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 16px;
  padding-right: 16px;
  -webkit-transition: 0.2s linear;
  -moz-transition: 0.2s linear;
  transition: 0.2s linear;
  border-radius: 5%;
  @media (max-width: 970px) {
    font-size: 1.5rem;
  }
  @media (max-width: 890px) {
    font-size: 1.4rem;
  }
  @media (max-width: 770px) {
    font-size: 1.2rem;
  }
  @media (max-width: 770px) {
    font-size: 1.4rem;
  }
  &:hover {
    background-color: black;
  }
`;

export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  text-decoration: none;
  color: white;
`;
