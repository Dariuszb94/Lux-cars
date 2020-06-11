import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import CARS from "../../../../../Const/carsDefaultData";
import {
  VehicleInfoContainer,
  VehicleSummaryListHeader,
  VehicleSummaryListHeaderText,
  StyledListAltOutlinedIcon,
  StyledArrowDropDownOutlinedIcon,
  StyledSpeedIcon,
  StyledHeightIcon,
  VehicleSummaryList,
  VehicleSummaryListElement,
  VehicleSummaryListElementLeft,
  VehicleSummaryListElementRight,
  VehicleSummaryListDropDown,
  VehiclePerformanceListDropDown,
  VehicleDimensionsListDropDown,
} from "./VehicleInfoFeaturesStyle";

/**
 * "VehicleInfoFeatures" component.
 */
class VehicleInfoFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleSummaryListShow: false,
      vehiclePerformanceListShow: false,
      vehicleDimensionsListShow: false,
    };
    this.vehicleSummaryListShow = this.vehicleSummaryListShow.bind(this);
    this.vehiclePerformanceListShow = this.vehiclePerformanceListShow.bind(
      this
    );
    this.vehicleDimensionsListShow = this.vehicleDimensionsListShow.bind(this);
  }

  vehicleSummaryListShow() {
    this.setState((prevState) => ({
      vehicleSummaryListShow: !prevState.vehicleSummaryListShow,
    }));
  }

  vehiclePerformanceListShow() {
    this.setState((prevState) => ({
      vehiclePerformanceListShow: !prevState.vehiclePerformanceListShow,
    }));
  }

  vehicleDimensionsListShow() {
    this.setState((prevState) => ({
      vehicleDimensionsListShow: !prevState.vehicleDimensionsListShow,
    }));
  }

  render() {
    return (
      <VehicleInfoContainer>
        <VehicleSummaryList>
          <VehicleSummaryListHeader onClick={this.vehicleSummaryListShow}>
            <VehicleSummaryListHeaderText>
              <StyledListAltOutlinedIcon />
              &nbsp;Vehicle Summary
            </VehicleSummaryListHeaderText>
            <StyledArrowDropDownOutlinedIcon />
          </VehicleSummaryListHeader>
          <CSSTransition
            in={this.state.vehicleSummaryListShow}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <VehicleSummaryListDropDown
              vehicleSummaryListShow={this.state.vehicleSummaryListShow}
            >
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Body style
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {CARS[window.location.href.slice(21).replace(/\D/g, "")].body}
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Engine size
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .displacement
                  }{" "}
                  cm3
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Number of doors
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .doors
                  }
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Number of seats
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .seats
                  }
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Transmission
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .gearBox
                  }
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
            </VehicleSummaryListDropDown>
          </CSSTransition>
        </VehicleSummaryList>
        <VehicleSummaryList>
          <VehicleSummaryListHeader onClick={this.vehiclePerformanceListShow}>
            <VehicleSummaryListHeaderText>
              <StyledSpeedIcon />
              &nbsp;Vehicle Performance
            </VehicleSummaryListHeaderText>
            <StyledArrowDropDownOutlinedIcon />
          </VehicleSummaryListHeader>
          <CSSTransition
            in={this.state.vehiclePerformanceListShow}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <VehiclePerformanceListDropDown
              vehiclePerformanceListShow={this.state.vehiclePerformanceListShow}
            >
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  0-100 km/h
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .acceleration
                  }{" "}
                  s
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Top speed
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .topSpeed
                  }{" "}
                  km/h
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Cylinders
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .cylinders
                  }
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Engine power
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .power
                  }{" "}
                  KM
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Engine torque
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .torque
                  }{" "}
                  Nm
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
            </VehiclePerformanceListDropDown>
          </CSSTransition>
        </VehicleSummaryList>
        <VehicleSummaryList>
          <VehicleSummaryListHeader onClick={this.vehicleDimensionsListShow}>
            <VehicleSummaryListHeaderText>
              <StyledHeightIcon />
              &nbsp;Dimensions
            </VehicleSummaryListHeaderText>
            <StyledArrowDropDownOutlinedIcon />
          </VehicleSummaryListHeader>
          <CSSTransition
            in={this.state.vehicleDimensionsListShow}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <VehicleDimensionsListDropDown
              vehicleDimensionsListShow={this.state.vehicleDimensionsListShow}
            >
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Height
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .height
                  }{" "}
                  mm
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Length
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .length
                  }{" "}
                  mm
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Wheelbase
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .wheelbase
                  }{" "}
                  mm
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
              <VehicleSummaryListElement>
                <VehicleSummaryListElementLeft>
                  Width
                </VehicleSummaryListElementLeft>
                <VehicleSummaryListElementRight>
                  {
                    CARS[window.location.href.slice(21).replace(/\D/g, "")]
                      .width
                  }{" "}
                  mm
                </VehicleSummaryListElementRight>
              </VehicleSummaryListElement>
            </VehicleDimensionsListDropDown>
          </CSSTransition>
        </VehicleSummaryList>
      </VehicleInfoContainer>
    );
  }
}

export default VehicleInfoFeatures;
