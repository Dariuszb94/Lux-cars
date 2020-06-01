import React, {Component} from 'react';
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import {NavLink} from "react-router-dom";
import {GetInTouch} from './GetInTouch';
import {OpeningHours} from './OpeningHours';
import {QuickLinks} from './QuickLinks';

const FooterContainer = styled.div`
display:flex;
flex-direction:row;
background-color:#212121;
padding-bottom:24px;
padding-top:24px;
color:white;
justify-content: space-around;
@media (max-width:660px){
  display:grid;
  grid-template-rows:50% 50%;
  grid-template-columns:50% 50%;
  justify-items: center;
  row-gap:2rem;
}
@media (max-width:420px){
  display:flex;
flex-direction:column;
padding-left:8px;
padding-right:8px;
}
`;



export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      };
  }
  componentDidMount() {
 
  }

  componentWillUnmount() {

  }
  componentDidUpdate(){
    
  }
  render() {
    return (  
      <FooterContainer>
        <GetInTouch></GetInTouch>
        <OpeningHours></OpeningHours>
        <QuickLinks></QuickLinks>
      </FooterContainer>
    );
  }
}