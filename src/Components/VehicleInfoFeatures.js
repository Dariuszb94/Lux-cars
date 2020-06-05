import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { CSSTransition } from "react-transition-group";
import SpeedIcon from '@material-ui/icons/Speed';
import HeightIcon from '@material-ui/icons/Height';

const VehicleInfoContainer = styled.div`
  background-color:#474747;
  padding:16px;
  @media (max-width:400px){
    padding-left:8px;
    padding-right:8px;
  }
`;

const VehicleSummaryListHeader = styled.div`
  justify-content:space-between;
  padding:12px;
  display:flex;
  flex-direction:row;
  align-items:center;
  cursor: pointer;
`;

const VehicleSummaryListHeaderText = styled.div`
  display: flex;
  align-items: center;
`;

const StyledListAltOutlinedIcon = styled(ListAltOutlinedIcon)`
  font-size:1.5em !important;
  color:white;  
`;

const StyledArrowDropDownOutlinedIcon = styled(ArrowDropDownOutlinedIcon)`
  font-size:1.5em !important;
  color:white;
`;

const StyledSpeedIcon = styled(SpeedIcon)`
  font-size:1.5em !important;
  color:white;
`;

const StyledHeightIcon = styled(HeightIcon)`
  font-size:1.5em !important;
  color:white;
`;
const VehicleSummaryList = styled.ul`
  background-color:black;
  margin-bottom:16px;
`;

const VehicleSummaryListElement = styled.li`
  list-style:none;
  height:20px;
  display:grid;
  grid-template-columns:30% 30% 40%;
  padding-left:16px;
  padding:4px;
  @media (max-width:750px){
    grid-template-columns:40% 40% 20%;
  }
  @media (max-width:450px){
    grid-template-columns:50% 50%;
  }
  @media (max-width:340px){
    grid-template-columns:55% 45%;
  }
`;

const VehiclePerformanceListElement = styled.li`
  list-style:none;
  height:20px;
  display:grid;
  grid-template-columns:30% 30% 40%;
  padding-left:16px;
  padding:4px;
`;

const VehicleDimensionsListElement = styled.li`
  list-style:none;
  height:20px;
  display:grid;
  grid-template-columns:30% 30% 40%;
  padding-left:16px;
  padding:4px;
`;

const VehicleSummaryListElementLeft = styled.div`
`;

const VehicleSummaryListElementRight = styled.div`
`;

const VehicleSummaryListDropDown = styled.div`
  color:black;
  background-color:#f5f5f5;
  display: ${props => props.vehicleSummaryListShow ? "block" : "none"};
  ${VehicleSummaryListElement}:nth-of-type(odd)  {
    background-color:#ffffff;
  };
  transition: all 1s ease-in-out;

  // enter from
  &.fade-enter {
    opacity:0;
  }

  // enter to
  &.fade-enter-active {
    opacity:1;
  }

  // exit from
  &.fade-exit {
    opacity:1;
  }

  // exit to 
  &.fade-exit-active {
    opacity:0;
  }
`;
const VehiclePerformanceListDropDown = styled.div`
  color:black;
  background-color:#f5f5f5;
  transition: opacity 1s linear;
  display: ${props => props.vehiclePerformanceListShow ? "block" : "none"};
  ${VehiclePerformanceListElement}:nth-of-type(odd)  {
    background-color:#ffffff;
  };

  // enter from
  &.fade-enter {
    opacity:0;
  }

  // enter to
  &.fade-enter-active {
    opacity:1;
  }

  // exit from
  &.fade-exit {
    opacity:1;
  }

  // exit to 
  &.fade-exit-active {
    opacity:0;
  }
`;

const VehicleDimensionsListDropDown = styled.div`
  color:black;
  background-color:#f5f5f5;
  display: ${props => props.vehicleDimensionsListShow ? "block" : "none"};
  transition: opacity 1s ease-in-out;
  ${VehicleDimensionsListElement}:nth-of-type(odd)  {
    background-color:#ffffff;
  };

  // enter from
  &.fade-enter {
    opacity:0;
  }

  // enter to
  &.fade-enter-active {
    opacity:1;
  }

  // exit from
  &.fade-exit {
    opacity:1;
  }

  // exit to 
  &.fade-exit-active {
    opacity:0;
  }
`;

class VehicleInfoFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleSummaryListShow:false,
      active: true,
      vehiclePerformanceListShow:false,
      vehicleDimensionsListShow:false,
    };
    this.vehicleSummaryListShow = this.vehicleSummaryListShow.bind(this);
    this.vehiclePerformanceListShow = this.vehiclePerformanceListShow.bind(this);
    this.vehicleDimensionsListShow = this.vehicleDimensionsListShow.bind(this); 
  }

  vehicleSummaryListShow(){
     this.setState({ vehicleSummaryListShow: !this.state.vehicleSummaryListShow});
  }

  vehiclePerformanceListShow(){
     this.setState({ vehiclePerformanceListShow: !this.state.vehiclePerformanceListShow});
  }

  vehicleDimensionsListShow(){
     this.setState({ vehicleDimensionsListShow: !this.state.vehicleDimensionsListShow});
  }

  render() {
    return (  
      <VehicleInfoContainer> 
        <VehicleSummaryList>
          <VehicleSummaryListHeader onClick={()=>this.vehicleSummaryListShow()}><VehicleSummaryListHeaderText><StyledListAltOutlinedIcon></StyledListAltOutlinedIcon>&nbsp;Vehicle Summary</VehicleSummaryListHeaderText><StyledArrowDropDownOutlinedIcon></StyledArrowDropDownOutlinedIcon></VehicleSummaryListHeader>  
            <CSSTransition
              in={this.state.vehicleSummaryListShow}
              classNames="fade"
              timeout={300}
              unmountOnExit
            >
              <VehicleSummaryListDropDown vehicleSummaryListShow={this.state.vehicleSummaryListShow}>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Body style</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].body}</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Engine size</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].displacement} cm3</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Number of doors</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].doors}</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Number of seats</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].seats}</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Transmission</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].gearBox}</VehicleSummaryListElementRight></VehicleSummaryListElement>
              </VehicleSummaryListDropDown>
            </CSSTransition>
          </VehicleSummaryList>
          <VehicleSummaryList>
          <VehicleSummaryListHeader onClick={()=>this.vehiclePerformanceListShow()}><VehicleSummaryListHeaderText><StyledSpeedIcon></StyledSpeedIcon>&nbsp;Vehicle Performance</VehicleSummaryListHeaderText><StyledArrowDropDownOutlinedIcon></StyledArrowDropDownOutlinedIcon></VehicleSummaryListHeader>
            <CSSTransition
              in={this.state.vehiclePerformanceListShow}
              classNames="fade"
              timeout={300}
              unmountOnExit
            >
              <VehiclePerformanceListDropDown vehiclePerformanceListShow={this.state.vehiclePerformanceListShow}>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>0-100 km/h</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].acceleration} s</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Top speed</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].topSpeed} km/h</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Cylinders</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].cylinders}</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Engine power</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].power} KM</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Engine torque</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].torque} Nm</VehicleSummaryListElementRight></VehicleSummaryListElement>
              </VehiclePerformanceListDropDown>
            </CSSTransition>
          </VehicleSummaryList>
          <VehicleSummaryList>
          <VehicleSummaryListHeader onClick={()=>this.vehicleDimensionsListShow()}><VehicleSummaryListHeaderText><StyledHeightIcon></StyledHeightIcon>&nbsp;Dimensions</VehicleSummaryListHeaderText><StyledArrowDropDownOutlinedIcon></StyledArrowDropDownOutlinedIcon></VehicleSummaryListHeader> 
            <CSSTransition
              in={this.state.vehicleDimensionsListShow}
              classNames="fade"
              timeout={300}
              unmountOnExit
            >
              <VehicleDimensionsListDropDown vehicleDimensionsListShow={this.state.vehicleDimensionsListShow}>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Height</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].height} mm</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Length</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].length} mm</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Wheelbase</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].wheelbase} mm</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>Width</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].width} mm</VehicleSummaryListElementRight></VehicleSummaryListElement>
               </VehicleDimensionsListDropDown>
            </CSSTransition>
          </VehicleSummaryList>
        </VehicleInfoContainer>
    );
  }
}    
const mapStateToProps = state => ({
  cars:state.cars,
  }); 
export default connect(mapStateToProps)(VehicleInfoFeatures);