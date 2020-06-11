import React, { Component } from "react";
import Slider from "./HomeComponents/Slider/Slider";
import UnderSlider from "./HomeComponents/UnderSlider/UnderSlider";
import HomeContainer from "./HomeStyle";

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
