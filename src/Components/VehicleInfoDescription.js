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
              <MainLeftElement><StyledCalendarTodayIcon></StyledCalendarTodayIcon>&nbsp;Registered: {this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].year}</MainLeftElement>
              <MainLeftElement><StyledSpeedIcon></StyledSpeedIcon>&nbsp;Mileage: {this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].mileage} km</MainLeftElement>
              <MainLeftElement><StyledBarChartIcon></StyledBarChartIcon>&nbsp;Engine Size: {this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].displacement} cm3</MainLeftElement>
              <MainLeftElement><StyledLocalGasStationIcon></StyledLocalGasStationIcon>&nbsp;Fuel Type: {this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].fuel}</MainLeftElement>
              <MainLeftElement><StyledSettingsIcon></StyledSettingsIcon>&nbsp;Gearbox: {this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].gearBox}</MainLeftElement>
              <MainLeftElement><StyledDriveEtaIcon></StyledDriveEtaIcon>&nbsp;Body Style: {this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].body}</MainLeftElement>
            </MainLeft>
            <MainRight>
              <FirstParagraph>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].description1}</FirstParagraph>
              <SecondParagraph>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].description2}</SecondParagraph>
              <ThirdParagraph>{this.props.cars[window.location.href.slice(21).replace(/\D/g, "")].description3}</ThirdParagraph>
            </MainRight>
          </Main>
      </VehicleInfoDescriptionContainer>
    );
  }
}    
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel,
  id:state.id,
  cars:state.cars,
  }); 
  export default connect(mapStateToProps,{chooseModel, updateMaker})(VehicleInfoDescription);