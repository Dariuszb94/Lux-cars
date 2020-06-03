import React, {Component} from 'react';
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import {NavLink} from "react-router-dom";
import {GetInTouch} from './GetInTouch';
import {OpeningHours} from './OpeningHours';
import {QuickLinks} from './QuickLinks';
import {FinanceApp} from './FinanceApp';

const Container = styled.div`
display:flex;
flex-direction:column;
background-color:black;
color:white;


`;

export class FavouriteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {

  }
  componentDidUpdate(){
    
  }
  render() {
    return (  
      <Container>
 sssssssssss
      </Container>
    );
  }
}