import React, {Component} from 'react';
import styled from 'styled-components';
import {Slider} from './Slider';
import {UnderSlider} from './UnderSlider';

const HomeContainer = styled.div`
  background-color:black;
`;

/**
 * "Home" component
 */
export class Home extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (  
      <HomeContainer>
        <Slider/>
        <UnderSlider/>
      </HomeContainer>
    );
  }
}
