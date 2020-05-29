import React, {Component} from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';
import {NavLink} from "react-router-dom";
import {
    Route,
    Switch
  } from "react-router-dom";
  import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
  import SpeedIcon from '@material-ui/icons/Speed';
  import BarChartIcon from '@material-ui/icons/BarChart';
  import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
  import SettingsIcon from '@material-ui/icons/Settings';
  import DriveEtaIcon from '@material-ui/icons/DriveEta';

const VehicleInfoDescriptionContainer = styled.div`
background-color:#474747;
padding-left:16px;
padding-right:16px;
padding-top:16px;
padding-bottom:16px;
`;
const Header = styled.h2`
border-bottom:2px solid #ec6b0c;
width:30%;
margin-bottom:32px;
`;
const Main = styled.div`
display:grid;
grid-template-columns:40% 60%;
`;
const MainLeft = styled.div`
display:flex;
flex-direction:column;
`;
const MainLeftElement = styled.div`
display:flex;
flex-direction:row;
align-items: center;
background-color: #5a5a5a;
margin-bottom:4px;
font-weight:300;
`;
const MainRight = styled.div`
padding-left:24px;
padding-right:24px;
`;

const StyledCalendarTodayIcon= styled(CalendarTodayIcon)`
font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;
const StyledSpeedIcon= styled(SpeedIcon)`
font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;
const StyledBarChartIcon= styled(BarChartIcon)`
font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;
const StyledLocalGasStationIcon= styled(LocalGasStationIcon)`
font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;
const StyledSettingsIcon= styled(SettingsIcon)`
font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;
const StyledDriveEtaIcon= styled(DriveEtaIcon)`
font-size:1.5em !important;
  color:white;
  background-color:#ec6b0c;
  color:black;
  padding:8px;
`;
const FirstParagraph= styled.p`
text-align: justify;
margin-bottom:16px;
`;
const SecondParagraph= styled.p`
font-weight:300;
text-align: justify;
margin-bottom:16px;
`;

const ThirdParagraph= styled.p`
font-weight:300;
text-align: justify;
`;

class VehicleInfoDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {

      };

  }
  componentDidMount() {
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {
  }

  render() {
    return (  
      <VehicleInfoDescriptionContainer> 
          <Header>Description</Header>
          <Main>
            <MainLeft>
              <MainLeftElement><StyledCalendarTodayIcon></StyledCalendarTodayIcon>&nbsp;aaaaa</MainLeftElement>
              <MainLeftElement><StyledSpeedIcon></StyledSpeedIcon>&nbsp;aaaaa</MainLeftElement>
              <MainLeftElement><StyledBarChartIcon></StyledBarChartIcon>&nbsp;aaaaa</MainLeftElement>
              <MainLeftElement><StyledLocalGasStationIcon></StyledLocalGasStationIcon>&nbsp;aaaaa</MainLeftElement>
              <MainLeftElement><StyledSettingsIcon></StyledSettingsIcon>&nbsp;aaaaa</MainLeftElement>
              <MainLeftElement><StyledDriveEtaIcon></StyledDriveEtaIcon>&nbsp;aaaaa</MainLeftElement>
            </MainLeft>
            <MainRight>
              <FirstParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</FirstParagraph>
              <SecondParagraph> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur dapibus, mauris posuere volutpat suscipit, magna massa blandit dui, et facilisis orci odio quis sapien. Nam varius metus eu nisi interdum, vitae varius lorem viverra. Cras luctus laoreet libero, sed gravida mauris tincidunt id. Aliquam finibus, dui vitae imperdiet cursus, leo eros varius est, eget rhoncus mauris ante sit amet velit. Sed elementum suscipit eros ac molestie.</SecondParagraph>
              <ThirdParagraph>Sed ligula velit, venenatis sed lectus nec, sollicitudin egestas libero. Ut finibus auctor justo non lobortis. Aenean eget nulla eu sem interdum aliquam.</ThirdParagraph>
            </MainRight>
          </Main>
      </VehicleInfoDescriptionContainer>
    );
  }
}    
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel
  }); 
  export default connect(mapStateToProps,{chooseModel, updateMaker})(VehicleInfoDescription);