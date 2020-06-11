import React from "react";
import CARS from "../../../../../Const/carsDefaultData";
import {
  VehicleInfoDescriptionContainer,
  Header,
  Main,
  MainLeft,
  MainLeftElement,
  MainRight,
  StyledCalendarTodayIcon,
  StyledSpeedIcon,
  StyledBarChartIcon,
  StyledLocalGasStationIcon,
  StyledSettingsIcon,
  StyledDriveEtaIcon,
  FirstParagraph,
  SecondParagraph,
  ThirdParagraph,
} from "./VehicleInfoDescriptionStyle";

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
          &nbsp;Registered:{" "}
          {CARS[window.location.href.slice(21).replace(/\D/g, "")].year}
        </MainLeftElement>
        <MainLeftElement>
          <StyledSpeedIcon />
          &nbsp;Mileage:{" "}
          {CARS[window.location.href.slice(21).replace(/\D/g, "")].mileage} km
        </MainLeftElement>
        <MainLeftElement>
          <StyledBarChartIcon />
          &nbsp;Engine Size:{" "}
          {
            CARS[window.location.href.slice(21).replace(/\D/g, "")].displacement
          }{" "}
          cm3
        </MainLeftElement>
        <MainLeftElement>
          <StyledLocalGasStationIcon />
          &nbsp;Fuel Type:{" "}
          {CARS[window.location.href.slice(21).replace(/\D/g, "")].fuel}
        </MainLeftElement>
        <MainLeftElement>
          <StyledSettingsIcon />
          &nbsp;Gearbox:{" "}
          {CARS[window.location.href.slice(21).replace(/\D/g, "")].gearBox}
        </MainLeftElement>
        <MainLeftElement>
          <StyledDriveEtaIcon />
          &nbsp;Body Style:{" "}
          {CARS[window.location.href.slice(21).replace(/\D/g, "")].body}
        </MainLeftElement>
      </MainLeft>
      <MainRight>
        <FirstParagraph>
          {CARS[window.location.href.slice(21).replace(/\D/g, "")].description1}
        </FirstParagraph>
        <SecondParagraph>
          {CARS[window.location.href.slice(21).replace(/\D/g, "")].description2}
        </SecondParagraph>
        <ThirdParagraph>
          {CARS[window.location.href.slice(21).replace(/\D/g, "")].description3}
        </ThirdParagraph>
      </MainRight>
    </Main>
  </VehicleInfoDescriptionContainer>
);
export default VehicleInfoDescription;
