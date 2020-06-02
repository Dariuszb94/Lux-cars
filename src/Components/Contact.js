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
import ContactForm from './ContactForm';
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

`;
const HeaderText = styled.h1`
font-size:2rem;
color:white;
position: relative;

`;
const HeaderTextContainer = styled.div`


`;
const Header = styled.div`
display:flex;
justify-content:center;
align-items:center;

background-image: url('https://i.ibb.co/K59yjZC/photography-of-a-classic-car-gauge-1006511.jpg');
background-size: cover;
min-height:40vh;
width:100%;
    position: relative;
&:before {
  content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);

  }
  @media (max-width:1080px){
    min-height:35vh;
  }
  @media (max-width:980px){
    min-height:30vh;
  }
  @media (max-width:900px){
    min-height:25vh;
  }
  @media (max-width:760px){
    min-height:20vh;
  }


`;
const Main = styled.div`
display:grid;
grid-template-columns:40% 60%;
background-color:black;
color:white;
padding:40px;
grid-gap:2rem;
@media (max-width:1080px){
  grid-gap:1rem;
  padding:24px;

  }
  @media (max-width:800px){
display:block;
padding-left:80px;
padding-right:80px;
  }
  @media (max-width:700px){

    padding-left:56px;
padding-right:56px;

  }
  @media (max-width:550px){

padding-left:32px;
padding-right:32px;

}
@media (max-width:500px){

padding-left:12px;
padding-right:12px;

}
@media (max-width:360px){

padding-left:4px;
padding-right:4px;

}
  grid-gap: 2rem;
justify-content: center;
`;
const Mail=styled.div`
`;
const Map=styled.div`
  @media (max-width:800px){
margin-top:16px;
  }
`;
const MailHeader=styled.h1`
color:#ec6b08;
font-size:1.4rem;
font-weight:500;
`;
const MapContent=styled.div`
background-image: url('https://i.ibb.co/vcgnTMp/map.png');
background-size: cover;
min-height:40vh;
margin-top:16px;
@media (max-width:1600px){
  min-height:35vh;
}
@media (max-width:550px){

  min-height:30vh;

}
@media (max-width:430px){

min-height:25vh;

}
`;

class Contact extends Component {
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
        <Header>
          <HeaderTextContainer>
            <HeaderText>Contact Lux Cars</HeaderText>
          </HeaderTextContainer>
        </Header>
        <Main>
          <Mail>
            <MailHeader>Email Us</MailHeader>
            <ContactForm></ContactForm>
          </Mail>
          <Map>
            <MailHeader>Map</MailHeader>
            <MapContent></MapContent>
          </Map>
        </Main>
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

  export default connect(mapStateToProps,{choosenSection})(Contact);