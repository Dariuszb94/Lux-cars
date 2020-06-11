import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from './HomeComponents/Slider';
import UnderSlider from './HomeComponents/UnderSlider';

const HomeContainer = styled.div`
  background-color:black;
`;

/**
 * "Home" component
 */
class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeContainer>
        <Slider />
        <UnderSlider />
      </HomeContainer>
    );
  }
}
export default Home;
