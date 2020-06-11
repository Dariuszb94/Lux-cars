import styled from "styled-components";
import SpeedOutlinedIcon from "@material-ui/icons/SpeedOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import BatteryFullIcon from "@material-ui/icons/Opacity";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { HashLink as Link } from "react-router-hash-link";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

export const CarsContainer = styled.div`
  background-color: black;
  color: white;
  font-weight: 600;
  padding-left: 2%;
  padding-right: 2%;
  @media (max-width: 620px) {
    padding-left: 1%;
    padding-right: 1%;
  }
`;

export const Car = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  padding-top: 16px;
`;

export const CarList = styled.article``;

export const CarHeader = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 450px) {
    flex-direction: row-reverse;
  }
`;

export const CarLogo = styled.img`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 112px;
  @media (max-width: 640px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 600px) {
    width: 64px;
    height: 64px;
  }
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
  }
  @media (max-width: 450px) {
    width: 56px;
    height: 56px;
  }
`;

export const CarDetails = styled.section``;

export const CarHeaderText = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: black;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 530px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (max-width: 500px) {
    padding-left: 4px;
    padding-right: 4px;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 450px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (max-width: 380px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const CarHeaderMainText = styled.div`
  font-size: 1.5rem;
  @media (max-width: 590px) {
    font-size: 1.3rem;
  }
  @media (max-width: 350px) {
    font-size: 1.1rem;
  }
`;

export const CarHeaderSubText = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  @media (max-width: 590px) {
    font-size: 1rem;
  }
`;

export const CarHeaderMainTextRight = styled.div`
  font-size: 2.3rem;
  text-align: right;
  font-weight: 800;
  @media (max-width: 590px) {
    font-size: 2.1rem;
  }
  @media (max-width: 530px) {
    font-size: 1.8rem;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
  @media (max-width: 470px) {
    font-size: 1.5rem;
  }
  @media (max-width: 450px) {
    text-align: left;
  }
`;

export const CarHeaderTextRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CarHeaderTextLeft = styled.div``;

export const ContactHeader = styled.h1`
  border-bottom: 2px solid #ec6b0c;
  margin-bottom: 16px;
  font-size: 1.4rem;
`;

export const CarMain = styled.div`
  padding-top: 16px;
  display: grid;
  grid-template-columns: 60% 40%;
  @media (max-width: 1000px) {
    grid-template-columns: 70% 30%;
  }
  @media (max-width: 900px) {
    grid-template-columns: 72% 28%;
  }
  @media (max-width: 710px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CarPhotoNaviRight = styled.div`
  background-color: black;
  width: 8%;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    color: ${(props) => (props.swipeRightPossible ? "#ec6b0c" : "white")};
  }
  @media (max-width: 700px) {
    width: 15%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const CarPhotoNaviLeft = styled.div`
  background-color: black;
  width: 8%;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    color: ${(props) => (props.swipeLeftPossible ? "#ec6b0c" : "white")};
  }
  @media (max-width: 700px) {
    width: 15%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const CarPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarPhotoChoose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const CarPhotoChooseSmall = styled.img`
  width: 28%;
  height: 100%;
  -webkit-transition: 0.5s linear;
  -moz-transition: 0.5s linear;
  transition: 0.5s linear;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`;

export const CarDetail = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #3a3a3a;
  margin-bottom: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  width: 80%;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  transition: 0.3s linear;
  &:hover {
    background-color: #ec6b0c;
  }
  @media (max-width: 900px) {
    padding-left: 8px;
    padding-right: 8px;
    width: 88%;
  }
  @media (max-width: 710px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const CarDetailText = styled.div`
  color: white;
`;

export const CarDetailOrangeContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  align-items: center;
`;

export const CarMainDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 710px) {
    margin-top: 16px;
  }
`;

export const StyledSpeedOutlinedIcon = styled(SpeedOutlinedIcon)`
  font-size: 1.5em !important;
  padding: 8px;
  color: #3a3a3a;
  background-color: white;
  border-radius: 50%;
`;

export const StyledColorLensOutlinedIcon = styled(ColorLensOutlinedIcon)`
  font-size: 1.5em !important;
  padding: 8px;
  color: #3a3a3a;
  background-color: white;
  border-radius: 50%;
`;

export const StyledBatteryFullIcon = styled(BatteryFullIcon)`
  font-size: 1.5em !important;
  padding: 8px;
  color: #3a3a3a;
  background-color: white;
  border-radius: 50%;
`;

export const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
  font-size: 5rem !important;
  width: 100% !important;
  cursor: pointer;
  -webkit-transition: 0.3s linear !important;
  -moz-transition: 0.3s linear !important;
  transition: 0.3s linear !important;
`;

export const CarHeaderSubTextRight = styled(Link).attrs()`
  font-size: 1.2rem;
  font-weight: 300;
  color: #e46b0c;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  transition: 0.3s linear;
  text-decoration: none;
  &:hover {
    color: white;
  }
  @media (max-width: 590px) {
    font-size: 1rem;
  }
  @media (max-width: 470px) {
    font-size: 0.9rem;
  }
`;

export const CarDetailLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #3a3a3a;
  margin-bottom: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  width: 80%;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  transition: 0.3s linear;
  text-decoration: none;
  &:hover {
    background-color: #ec6b0c;
  }
  @media (max-width: 900px) {
    padding-left: 8px;
    padding-right: 8px;
    width: 88%;
  }
  @media (max-width: 710px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const StyledArrowRightIcon = styled(ArrowRightIcon)`
  font-size: 5rem !important;
  width: 100% !important;
  cursor: pointer;
  -webkit-transition: 0.3s linear !important;
  -moz-transition: 0.3s linear !important;
  transition: 0.3s linear !important;
`;

export const VehicleInfoSection = styled.section``;

export const SimilarVehiclesSection = styled.section`
  padding-bottom: 16px;
`;

export const ContactFormSection = styled.section`
  margin-top: 32px;
`;

export const ContactFormContainer = styled.div`
  padding-bottom: 8px;
  padding-right: 16%;
  padding-left: 16%;
  @media (max-width: 550px) {
    padding-right: 8%;
    padding-left: 8%;
  }
  @media (max-width: 450px) {
    padding-right: 4%;
    padding-left: 4%;
  }
`;

export const GoUp = styled.button`
  position: fixed;
  right: 20px;
  bottom: 10px;
  color: white;
  background-color: #ec6b0c;
  display: flex;
  flex-direction: column;
  border: none;
  opacity: 0.5;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  -webkit-transition: opacity 0.2s linear;
  -moz-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
  border-radius: 50%;
  &:hover {
    opacity: 1;
  }
`;

export const StyledKeyboardArrowUpIcon = styled(KeyboardArrowUpIcon)``;

export const GoUpText = styled.div``;
