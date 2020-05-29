import React, {Component} from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';
import {NavLink} from "react-router-dom";
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import {
    Route,
    Switch
  } from "react-router-dom";
  import ArrowDropDownOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
  import { CSSTransition } from "react-transition-group";
  import SpeedIcon from '@material-ui/icons/Speed';
  import HeightIcon from '@material-ui/icons/Height';
const VehicleInfoContainer = styled.div`
  background-color:#474747;
  padding:16px;

`;
const VehicleInfoHeader = styled.div`
  border-bottom:2px solid #ec6b0c;
  margin-bottom:16px;
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
  grid-template-columns:20% 20% 60%;
  padding-left:16px;
`;
const VehiclePerformanceListElement = styled.li`
  list-style:none;
  height:20px;
  display:grid;
  grid-template-columns:20% 20% 60%;
  padding-left:16px;
`;
const VehicleDimensionsListElement = styled.li`
  list-style:none;
  height:20px;
  display:grid;
  grid-template-columns:20% 20% 60%;
  padding-left:16px;
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
  display: ${props => props.vehiclePerformanceListShow ? "block" : "none"};
  ${VehiclePerformanceListElement}:nth-of-type(odd)  {
    
    background-color:#ffffff;
    
  };

  transition: all 1s linear;

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
  ${VehicleDimensionsListElement}:nth-of-type(odd)  {
    
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
  componentDidMount() {
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {
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
                <VehicleSummaryListElement><VehicleSummaryListElementLeft>aaaa</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>bb</VehicleSummaryListElementRight></VehicleSummaryListElement>
                <VehicleSummaryListElement >aaaa</VehicleSummaryListElement>
                <VehicleSummaryListElement >aaaa</VehicleSummaryListElement>
                <VehicleSummaryListElement>aaaa</VehicleSummaryListElement>
                <VehicleSummaryListElement >aaaa</VehicleSummaryListElement>
                <VehicleSummaryListElement >aaaa</VehicleSummaryListElement>
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
                <VehiclePerformanceListElement><VehicleSummaryListElementLeft>aaaa</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>bb</VehicleSummaryListElementRight></VehiclePerformanceListElement>
                <VehiclePerformanceListElement >aaaa</VehiclePerformanceListElement>
                <VehiclePerformanceListElement >aaaa</VehiclePerformanceListElement>
                <VehiclePerformanceListElement>aaaa</VehiclePerformanceListElement>
                <VehiclePerformanceListElement >aaaa</VehiclePerformanceListElement>
                <VehiclePerformanceListElement >aaaa</VehiclePerformanceListElement>
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
                <VehicleDimensionsListElement><VehicleSummaryListElementLeft>aaaa</VehicleSummaryListElementLeft><VehicleSummaryListElementRight>bb</VehicleSummaryListElementRight></VehicleDimensionsListElement>
                <VehicleDimensionsListElement >aaaa</VehicleDimensionsListElement>
                <VehicleDimensionsListElement >aaaa</VehicleDimensionsListElement>
                <VehicleDimensionsListElement>aaaa</VehicleDimensionsListElement>
                <VehicleDimensionsListElement >aaaa</VehicleDimensionsListElement>
                <VehicleDimensionsListElement >aaaa</VehicleDimensionsListElement>
              </VehicleDimensionsListDropDown>
            </CSSTransition>
          </VehicleSummaryList>
        </VehicleInfoContainer>
    );
  }
}    
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel
  }); 
  export default connect(mapStateToProps,{chooseModel, updateMaker})(VehicleInfoFeatures);