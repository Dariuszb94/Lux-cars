import React from 'react';
import styled from 'styled-components';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SpeedIcon from '@material-ui/icons/Speed';
import BarChartIcon from '@material-ui/icons/BarChart';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import SettingsIcon from '@material-ui/icons/Settings';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import CARS from '../../../../Const/carsDefaultData';

const VehicleInfoDescriptionContainer = styled.div`
  background-color:#474747;
  padding-left:16px;
  padding-right:16px;
  padding-top:16px;
  padding-bottom:16px;
  @media (max-width:450px) {
    padding-left:8px;
    padding-right:8px;
  }
`;

const Header = styled.h2`
  border-bottom:2px solid #ec6b0c;
  width:30%;
  margin-bottom:32px;
  font-size:1.2rem;
`;

const Main = styled.div`
  display:grid;
  grid-template-columns:40% 60%;
  @media (max-width:1280px) {
    grid-template-columns:30% 70%;
  }
  @media (max-width:780px) {
    display:flex;
    flex-direction:column;
  }
`;

const MainLeft = styled.div`
  display:flex;
  flex-direction:column;
@media (max-width:780px) {
  display:grid;
  grid-template-columns: 50% 50%;
}
@media (max-width:460px) {
  display:flex;
flex-direction:column;
}
`;

const MainLeftElement = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  background-color: #5a5a5a;
  margin-bottom:4px;
  font-weight:400;
`;

const MainRight = styled.div`
  padding-left:24px;
  padding-right:24px;
  @media (max-width:920px) {
    padding-right:0px;
    padding-left:12px;
  }
  @media (max-width:780px) {
    padding-right:0px;
    padding-left:0px;
    margin-top:16px;
  }
`;

const StyledCalendarTodayIcon = styled(CalendarTodayIcon)`
  font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;

const StyledSpeedIcon = styled(SpeedIcon)`
  font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;

const StyledBarChartIcon = styled(BarChartIcon)`
  font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;

const StyledLocalGasStationIcon = styled(LocalGasStationIcon)`
  font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;

const StyledDriveEtaIcon = styled(DriveEtaIcon)`
  font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;

const FirstParagraph = styled.p`
  text-align: justify;
  margin-bottom:16px;
`;

const SecondParagraph = styled.p`
  font-weight:300;
  text-align: justify;
  margin-bottom:16px;
`;

const ThirdParagraph = styled.p`
  font-weight:300;
  text-align: justify;
`;

/**
 * "VehicleInfoDescription" component.
 */
const VehicleInfoDescription = () => (
  <VehicleInfoDescriptionContainer>
    <Header>Description</Header>
    <Main>
      <MainLeft>
        <MainLeftElement>
          <StyledCalendarTodayIcon />
&nbsp;Registered:
          {' '}
          {CARS[window.location.href.slice(21).replace(/\D/g, '')].year}
        </MainLeftElement>
        <MainLeftElement>
          <StyledSpeedIcon />
&nbsp;Mileage:
          {' '}
          {CARS[window.location.href.slice(21).replace(/\D/g, '')].mileage}
          {' '}
          km
        </MainLeftElement>
        <MainLeftElement>
          <StyledBarChartIcon />
&nbsp;Engine Size:
          {' '}
          {CARS[window.location.href.slice(21).replace(/\D/g, '')].displacement}
          {' '}
          cm3
        </MainLeftElement>
        <MainLeftElement>
          <StyledLocalGasStationIcon />
&nbsp;Fuel Type:
          {' '}
          {CARS[window.location.href.slice(21).replace(/\D/g, '')].fuel}
        </MainLeftElement>
        <MainLeftElement>
          <StyledSettingsIcon />
&nbsp;Gearbox:
          {' '}
          {CARS[window.location.href.slice(21).replace(/\D/g, '')].gearBox}
        </MainLeftElement>
        <MainLeftElement>
          <StyledDriveEtaIcon />
&nbsp;Body Style:
          {' '}
          {CARS[window.location.href.slice(21).replace(/\D/g, '')].body}
        </MainLeftElement>
      </MainLeft>
      <MainRight>
        <FirstParagraph>{CARS[window.location.href.slice(21).replace(/\D/g, '')].description1}</FirstParagraph>
        <SecondParagraph>{CARS[window.location.href.slice(21).replace(/\D/g, '')].description2}</SecondParagraph>
        <ThirdParagraph>{CARS[window.location.href.slice(21).replace(/\D/g, '')].description3}</ThirdParagraph>
      </MainRight>
    </Main>
  </VehicleInfoDescriptionContainer>
);
export default VehicleInfoDescription;
