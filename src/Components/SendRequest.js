import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';
import {connect} from 'react-redux';
import SpeedOutlinedIcon from '@material-ui/icons/SpeedOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import LocalGasStationOutlinedIcon from '@material-ui/icons/LocalGasStationOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import BatteryFullIcon from '@material-ui/icons/Opacity';
import CheckIcon from '@material-ui/icons/Check';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ContactForm from './ContactForm';
import Touch from './Touch';
import {NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";


const Container = styled.div`
display:flex;
flex-direction:column;
padding-top:16px;
padding-bottom:16px;
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {


      };

  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate(){

    
  }
  
  render() {
    return (  
      <Container>
<ContactForm/>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  chosenModel:state.chosenModel,
  power:state.power,
  chosenPower:state.chosenPower,
  years:state.years,
  chosenYear:state.chosenYear,
  price:state.price,
  chosenPrice:state.chosenPrice,
  cars:state.cars,
  priceSort:state.priceSort,
  chosenId:state.chosenId,
  }); 

  export default connect(mapStateToProps)(ContactForm);