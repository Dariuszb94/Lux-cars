import styled from "styled-components";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SpeedIcon from "@material-ui/icons/Speed";
import HeightIcon from "@material-ui/icons/Height";

export const VehicleInfoContainer = styled.div`
  background-color: #474747;
  padding: 16px;
  @media (max-width: 400px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const VehicleSummaryListHeader = styled.div`
  justify-content: space-between;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const VehicleSummaryListHeaderText = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledListAltOutlinedIcon = styled(ListAltOutlinedIcon)`
  font-size: 1.5em !important;
  color: white;
`;

export const StyledArrowDropDownOutlinedIcon = styled(
  ArrowDropDownOutlinedIcon
)`
  font-size: 1.5em !important;
  color: white;
`;

export const StyledSpeedIcon = styled(SpeedIcon)`
  font-size: 1.5em !important;
  color: white;
`;

export const StyledHeightIcon = styled(HeightIcon)`
  font-size: 1.5em !important;
  color: white;
`;
export const VehicleSummaryList = styled.ul`
  background-color: black;
  margin-bottom: 16px;
`;

export const VehicleSummaryListElement = styled.li`
  list-style: none;
  height: 20px;
  display: grid;
  grid-template-columns: 30% 30% 40%;
  padding-left: 16px;
  padding: 4px;
  @media (max-width: 750px) {
    grid-template-columns: 40% 40% 20%;
  }
  @media (max-width: 450px) {
    grid-template-columns: 50% 50%;
  }
  @media (max-width: 340px) {
    grid-template-columns: 55% 45%;
  }
`;

export const VehiclePerformanceListElement = styled.li`
  list-style: none;
  height: 20px;
  display: grid;
  grid-template-columns: 30% 30% 40%;
  padding-left: 16px;
  padding: 4px;
`;

export const VehicleDimensionsListElement = styled.li`
  list-style: none;
  height: 20px;
  display: grid;
  grid-template-columns: 30% 30% 40%;
  padding-left: 16px;
  padding: 4px;
`;

export const VehicleSummaryListElementLeft = styled.div``;

export const VehicleSummaryListElementRight = styled.div``;

export const VehicleSummaryListDropDown = styled.div`
  color: black;
  background-color: #f5f5f5;
  display: ${(props) => (props.vehicleSummaryListShow ? "block" : "none")};
  ${VehicleSummaryListElement}:nth-of-type(odd) {
    background-color: #ffffff;
  }
  transition: all 1s ease-in-out;

  // enter from
  &.fade-enter {
    opacity: 0;
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
  }
`;
export const VehiclePerformanceListDropDown = styled.div`
  color: black;
  background-color: #f5f5f5;
  transition: opacity 1s linear;
  display: ${(props) => (props.vehiclePerformanceListShow ? "block" : "none")};
  ${VehiclePerformanceListElement}:nth-of-type(odd) {
    background-color: #ffffff;
  }

  // enter from
  &.fade-enter {
    opacity: 0;
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
  }
`;

export const VehicleDimensionsListDropDown = styled.div`
  color: black;
  background-color: #f5f5f5;
  display: ${(props) => (props.vehicleDimensionsListShow ? "block" : "none")};
  transition: opacity 1s ease-in-out;
  ${VehicleDimensionsListElement}:nth-of-type(odd) {
    background-color: #ffffff;
  }

  // enter from
  &.fade-enter {
    opacity: 0;
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
  }
`;
