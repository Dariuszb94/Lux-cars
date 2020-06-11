import styled from "styled-components";
import SpeedOutlinedIcon from "@material-ui/icons/SpeedOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import LocalGasStationOutlinedIcon from "@material-ui/icons/LocalGasStationOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import BatteryFullIcon from "@material-ui/icons/Opacity";
import CheckIcon from "@material-ui/icons/Check";
import { NavLink } from "react-router-dom";

export const CarsContainer = styled.div`
  background-color: black;
  color: white;
  font-weight: 600;
`;

export const Car = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  padding-top: 16px;
  padding-left: 2%;
  padding-right: 2%;
  @media (max-width: 500px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const CarList = styled.ul``;

export const CarHeader = styled.section`
  display: flex;
  flex-direction: row;
`;

export const CarLogo = styled.img`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 112px;
  height: 112px;
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 430px) {
    width: 64px;
    height: 64px;
  }
  @media (max-width: 390px) {
    width: 112px;
    height: 112px;
  }
`;

export const CarDetails = styled.section``;

export const CarHeaderText = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #3a3a3a;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 550px) {
    padding-left: 4px;
    padding-right: 4px;
  }
  @media (max-width: 390px) {
    align-items: flex-start;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const CarHeaderMainText = styled.div`
  background-color: #3a3a3a;
  font-size: 1.5em;
  @media (max-width: 520px) {
    font-size: 1.3em;
  }
  @media (max-width: 420px) {
    font-size: 1.2em;
  }
  @media (max-width: 390px) {
    font-size: 1.3em;
    margin-bottom: 4px;
  }
`;

export const CarHeaderSubText = styled.div`
  font-size: 1.2em;
  font-weight: 300;
  @media (max-width: 390px) {
    margin-bottom: 4px;
  }
`;

export const CarHeaderTextRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CarHeaderTextLeft = styled.div``;

export const CarMain = styled.div`
  padding-top: 16px;
  display: grid;
  grid-template-columns: 40% 60%;
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    padding-top: 0;
  }
`;

export const CarPhoto = styled.img`
  width: 100%;
  margin-bottom: 8px;
`;

export const CarMainDetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 32px;
  padding-right: 32px;
  @media (max-width: 950px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (max-width: 700px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const CarMainDetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 32px;
  padding-right: 32px;
  @media (max-width: 950px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (max-width: 700px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const CarDetailOrangeContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  @media (max-width: 870px) {
    margin-top: 8px;
  }
  @media (max-width: 680px) {
    justify-content: space-between;
  }
  @media (max-width: 320px) {
  }
`;

export const CarFeatures = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80%;
  @media (max-width: 350px) {
    grid-template-columns: 45% 55%;
  }
  @media (max-width: 320px) {
    grid-template-columns: 42% 58%;
  }
`;

export const CarDetail = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 680px) {
    margin-bottom: 4px;
  }
`;

export const CarDetailText = styled.div``;

export const CarMainDetails = styled.div``;

export const StyledSpeedOutlinedIcon = styled(SpeedOutlinedIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;

export const StyledColorLensOutlinedIcon = styled(ColorLensOutlinedIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;

export const StyledLocalGasStationOutlinedIcon = styled(
  LocalGasStationOutlinedIcon
)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;

export const StyledSettingsOutlinedIcon = styled(SettingsOutlinedIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;

export const StyledBatteryFullIcon = styled(BatteryFullIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;
export const StyledCheckIcon = styled(CheckIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;

export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

export const CarWithButtons = styled.li`
  border-bottom: 2px solid #3a3a3a;
`;
