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
import Search from './Search';

import Touch from './Touch';
import {NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import {choosenSection}from '../Actions/carOfferNaviActions';
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
const Name = styled.input`
margin-bottom:8px;
border-radius:4px;
border:none;
padding:4px;
width:100%;
`;
const Tel = styled.input`
margin-bottom:8px;
border-radius:4px;
border:none;
width:100%;
padding:4px;
`;
const Email = styled.input`
margin-bottom:8px;
border-radius:4px;
border:none;
width:100%;
padding:4px;
`;
const Enquiry = styled.textarea`
margin-bottom:8px;
border-radius:4px;
width:100%;
border:none;
padding:4px;
`;
const Send = styled.button`
padding-top:8px;
padding-bottom:8px;
background-color:#ec6b0c;
color:white;
border-radius:4px;
border:none;
cursor: pointer;
`;
const WarningName= styled.div`
color:red;
font-size:1.2rem;
display:none;
font-weight:900;
`;
const WarningTel= styled.div`
color:red;
font-size:1.2rem;
display:none;
font-weight:900;
`;
const WarningMail= styled.div`
color:red;
font-size:1.2rem;
display:none;
font-weight:900;
`;
const FormElement = styled.div`
display:flex;
margin-bottom:16px;

`;
const Sent =styled.div`
display:none;

`;
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {


      };
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeTel = this.onChangeTel.bind(this);
      this.onChangeMail = this.onChangeMail.bind(this);

      this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate(){

    
  }
  submit(){
    if(this.state.validMail===true && this.state.validNumber===true && this.state.validName===true ){
    this.setState({validSubmit: true});
    document.getElementById("sent").style.display = "block";
  }
    else{
      this.setState({validSubmit: false});
    }

  }
  onChangeTel(e){
    let value = e.target.value;
    let numbers = /^[0-9]+$/;
    if(value!=="" && value.match(numbers)){
      document.getElementById("warningTel").style.display = "none";
    
    this.setState(
      {number: value}
    );
    this.setState(
      {validNumber: true}
    );
    }
    else{
      document.getElementById("warningTel").style.display = "block";
      this.setState(
        {validNumber: false}
      );
    }

  }

  onChangeName(e){
    let value = e.target.value;
    let letters = /^[A-Za-z]+$/;
    if(value.match(letters)){
      document.getElementById("warningName").style.display = "none";
      this.setState(
        {name: value}
      );
      this.setState(
        {validName: true}
      );
    }
    
    else{
      document.getElementById("warningName").style.display = "block";
      this.setState({validName: false});
  }
  }
  onChangeMail(e){
    let value = e.target.value;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(String(value).toLowerCase())){
       document.getElementById("warningMail").style.display = "none";
       this.setState(
        {mail: value}
      );
      this.setState(
        {validMail: true}
      );
    }
    else{
    document.getElementById("warningMail").style.display = "block";
    this.setState({validMail: false});
  }
  }
  render() {
    return (  
      <Container>
          <FormElement><Name placeholder="Your Name" type="text" onChange={this.onChangeName}></Name><WarningName id="warningName">!</WarningName></FormElement>
          <FormElement><Tel placeholder="Your telephone number"  type="number"  onChange={this.onChangeTel}></Tel><WarningTel id="warningTel">!</WarningTel></FormElement>
          <FormElement><Email placeholder="Your email adress" type="text"  onChange={this.onChangeMail}></Email><WarningMail id="warningMail">!</WarningMail></FormElement>
          <FormElement><Enquiry placeholder="Message"></Enquiry></FormElement>
          <Send  onClick={()=>this.submit()}>Send</Send>
          <Sent id="sent">Request sent</Sent>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel,
  power:state.power,
  choosenPower:state.choosenPower,
  years:state.years,
  choosenYear:state.choosenYear,
  price:state.price,
  choosenPrice:state.choosenPrice,
  cars:state.cars,
  priceSort:state.priceSort,
  id:state.id,
  section:state.section
  }); 

  export default connect(mapStateToProps,{choosenSection})(ContactForm);