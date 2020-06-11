import styled from "styled-components";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SpeedIcon from "@material-ui/icons/Speed";
import BarChartIcon from "@material-ui/icons/BarChart";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import SettingsIcon from "@material-ui/icons/Settings";
import DriveEtaIcon from "@material-ui/icons/DriveEta";

export const VehicleInfoDescriptionContainer = styled.div`
  background-color: #474747;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  @media (max-width: 450px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const Header = styled.h2`
  border-bottom: 2px solid #ec6b0c;
  width: 30%;
  margin-bottom: 32px;
  font-size: 1.2rem;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  @media (max-width: 1280px) {
    grid-template-columns: 30% 70%;
  }
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 780px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MainLeftElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #5a5a5a;
  margin-bottom: 4px;
  font-weight: 400;
`;

export const MainRight = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  @media (max-width: 920px) {
    padding-right: 0px;
    padding-left: 12px;
  }
  @media (max-width: 780px) {
    padding-right: 0px;
    padding-left: 0px;
    margin-top: 16px;
  }
`;

export const StyledCalendarTodayIcon = styled(CalendarTodayIcon)`
  font-size: 1.5em !important;
  color: white;
  background-color: #ec6b0c;
  color: black;
  padding: 8px;
`;

export const StyledSpeedIcon = styled(SpeedIcon)`
  font-size: 1.5em !important;
  color: white;
  background-color: #ec6b0c;
  color: black;
  padding: 8px;
`;

export const StyledBarChartIcon = styled(BarChartIcon)`
  font-size: 1.5em !important;
  color: white;
  background-color: #ec6b0c;
  color: black;
  padding: 8px;
`;

export const StyledLocalGasStationIcon = styled(LocalGasStationIcon)`
  font-size: 1.5em !important;
  color: white;
  background-color: #ec6b0c;
  color: black;
  padding: 8px;
`;

export const StyledSettingsIcon = styled(SettingsIcon)`
  font-size: 1.5em !important;
  color: white;
  background-color: #ec6b0c;
  color: black;
  padding: 8px;
`;

export const StyledDriveEtaIcon = styled(DriveEtaIcon)`
  font-size: 1.5em !important;
  color: white;
  background-color: #ec6b0c;
  color: black;
  padding: 8px;
`;

export const FirstParagraph = styled.p`
  text-align: justify;
  margin-bottom: 16px;
`;

export const SecondParagraph = styled.p`
  font-weight: 300;
  text-align: justify;
  margin-bottom: 16px;
`;

export const ThirdParagraph = styled.p`
  font-weight: 300;
  text-align: justify;
`;
