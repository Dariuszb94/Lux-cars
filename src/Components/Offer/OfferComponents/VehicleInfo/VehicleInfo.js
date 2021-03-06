import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch, NavLink } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import VehicleInfoFeatures from "./VehicleInfoComponents/VehicleInfoFeatures/VehicleInfoFeatures";
import VehicleInfoDescription from "./VehicleInfoComponents/VehicleInfoDescription/VehicleInfoDescription";
import VehicleInfoFinances from "./VehicleInfoComponents/VehicleInfoFinances/VehicleInfoFinances";

const VehicleInfoContainer = styled.div`
  margin-top: 16px;
`;

const VehicleInfoHeader = styled.h1`
  border-bottom: 2px solid #ec6b0c;
  margin-bottom: 16px;
  font-size: 1.4rem;
`;

const StyledListIcon = styled(ListIcon)`
  color: #ec6b0c;
  font-size: 32px !important;
  @media (max-width: 420px) {
    font-size: 24px !important;
  }
  @media (max-width: 390px) {
    font-size: 20px !important;
  }
  @media (max-width: 320px) {
    font-size: 16px !important;
  }
`;

const StyledLinkDescription = styled(NavLink).attrs()`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 33%;
  background-color: #2d2d2d;
  text-decoration: none;
  color: white;
  -webkit-transition: 0.3s ease-in;
  -moz-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
`;

const StyledLinkFeatures = styled(NavLink).attrs()`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 33%;
  background-color: #2d2d2d;
  text-decoration: none;
  color: white;
  -webkit-transition: 0.3s ease-in;
  -moz-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
`;

const StyledLinkFinances = styled(NavLink).attrs()`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 33%;
  background-color: #2d2d2d;
  text-decoration: none;
  color: white;
  -webkit-transition: 0.3s ease-in;
  -moz-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
`;

const StyledCheckBoxOutlinedIcon = styled(CheckBoxOutlinedIcon)`
  color: #ec6b0c;
  font-size: 32px !important;
  @media (max-width: 420px) {
    font-size: 24px !important;
  }
  @media (max-width: 390px) {
    font-size: 20px !important;
  }
  @media (max-width: 320px) {
    font-size: 16px !important;
  }
`;
const StyledCreditCardOutlinedIcon = styled(CreditCardOutlinedIcon)`
  color: #ec6b0c;
  font-size: 32px !important;
  @media (max-width: 420px) {
    font-size: 24px !important;
  }
  @media (max-width: 390px) {
    font-size: 20px !important;
  }
  @media (max-width: 320px) {
    font-size: 16px !important;
  }
`;
const VehicleInfoMenu = styled.div`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const VehicleInfoMenuElementDescription = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  padding-top: 8px;
  width: 100%;
  background-color: ${(props) =>
    props.highlightInfoTypeDescription ? "#474747" : "#2d2d2d"};
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

const VehicleInfoMenuElementFeatures = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  padding-top: 8px;
  width: 100%;
  background-color: ${(props) =>
    props.highlightInfoTypeFeatures ? "#474747" : "#2d2d2d"};
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

const VehicleInfoMenuElementFinances = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  padding-top: 8px;
  width: 100%;
  background-color: ${(props) =>
    props.highlightInfoTypeFinances ? "#474747" : "#2d2d2d"};
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

/**
 * "VehicleInfo" component
 */
class VehicleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightInfoTypeFeatures: true,
      highlightInfoTypeDescription: false,
      highlightInfoTypeFinances: false,
    };
    this.highlightInfoType = this.highlightInfoType.bind(this);
  }

  /**
   * Highlights chosen info type (feature, description, finances)
   */
  componentDidMount() {
    this.highlightInfoType();
  }

  componentDidUpdate() {
    this.highlightInfoType();
  }

  highlightInfoType() {
    if (
      window.location.href.includes("Features") &&
      this.state.highlightInfoTypeFeatures !== true
    ) {
      this.setState({ highlightInfoTypeFeatures: true });
      this.setState({ highlightInfoTypeDescription: false });
      this.setState({ highlightInfoTypeFinances: false });
    }
    if (
      window.location.href.includes("Description") &&
      this.state.highlightInfoTypeDescription !== true
    ) {
      this.setState({ highlightInfoTypeDescription: true });
      this.setState({ highlightInfoTypeFeatures: false });
      this.setState({ highlightInfoTypeFinances: false });
    }
    if (
      window.location.href.includes("Finances") &&
      this.state.highlightInfoTypeFinances !== true
    ) {
      this.setState({ highlightInfoTypeFinances: true });
      this.setState({ highlightInfoTypeFeatures: false });
      this.setState({ highlightInfoTypeDescription: false });
    }
  }

  render() {
    return (
      <VehicleInfoContainer>
        <VehicleInfoHeader>Vehicle Information</VehicleInfoHeader>
        <VehicleInfoMenu>
          <StyledLinkFeatures
            to={{
              pathname: `/Offer/Vehicle-Features/${window.location.href
                .slice(21)
                .replace(/\D/g, "")}`,
            }}
            onClick={() => setTimeout(() => this.highlightInfoType(), 200)}
          >
            <VehicleInfoMenuElementFeatures
              highlightInfoTypeFeatures={this.state.highlightInfoTypeFeatures}
            >
              <StyledListIcon />
              &nbsp;Features
            </VehicleInfoMenuElementFeatures>
          </StyledLinkFeatures>
          <StyledLinkDescription
            to={{
              pathname: `/Offer/Vehicle-Description/${window.location.href
                .slice(21)
                .replace(/\D/g, "")}`,
            }}
            onClick={() => setTimeout(() => this.highlightInfoType(), 200)}
          >
            <VehicleInfoMenuElementDescription
              highlightInfoTypeDescription={
                this.state.highlightInfoTypeDescription
              }
            >
              <StyledCheckBoxOutlinedIcon />
              &nbsp;Description
            </VehicleInfoMenuElementDescription>
          </StyledLinkDescription>
          <StyledLinkFinances
            to={{
              pathname: `/Offer/Vehicle-Finances/${window.location.href
                .slice(21)
                .replace(/\D/g, "")}`,
            }}
            onClick={() => setTimeout(() => this.highlightInfoType(), 200)}
          >
            <VehicleInfoMenuElementFinances
              highlightInfoTypeFinances={this.state.highlightInfoTypeFinances}
            >
              <StyledCreditCardOutlinedIcon />
              &nbsp;Finance
            </VehicleInfoMenuElementFinances>
          </StyledLinkFinances>
        </VehicleInfoMenu>
        <Switch>
          <Route
            path="/Offer/Vehicle-Features"
            component={VehicleInfoFeatures}
          />
          <Route
            path="/Offer/Vehicle-Description"
            component={VehicleInfoDescription}
          />
          <Route
            path="/Offer/Vehicle-Finances"
            component={VehicleInfoFinances}
          />
          <Route component={VehicleInfoFinances} />
        </Switch>
      </VehicleInfoContainer>
    );
  }
}

export default VehicleInfo;
