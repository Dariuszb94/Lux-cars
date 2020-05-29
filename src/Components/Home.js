import React, {Component} from 'react';
import styled from 'styled-components';
import {Slider} from './Slider';
import {UnderSlider} from './UnderSlider';
import {Footer} from './Footer';
const HomeContainer = styled.div`
  background-color:black;
`;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

      };

  }
  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    return (  
      <HomeContainer>
        <Slider/>
        <UnderSlider/>
        <Footer/>
      </HomeContainer>
    );
  }
}
