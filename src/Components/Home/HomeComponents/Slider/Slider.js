import React, { Component } from "react";
import Search from "../../../About/AboutComponents/Search/Search";
import {
  SliderContainer,
  FirstSlide,
  SecondSlide,
  SlideText,
  SlideUpperText,
  SlideMiddleText,
  SlideLowerText,
  StyledLink,
} from "./SliderStyle";

/**
 * "Slider" component
 */
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background1: true,
      showSearch: true,
    };
    this.showSearch = this.showSearch.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth < 750) {
      this.setState({ showSearch: false });
    }
    this.interval = setInterval(
      () =>
        this.setState((prevState) => ({ background1: !prevState.background1 })),
      10000
    );
    window.addEventListener("resize", this.showSearch);
  }

  /**
   * Clear listener for resize.
   */
  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener("resize", this.showSearch);
  }

  /**
   * Change display of size on smaller devices.
   */
  showSearch() {
    if (window.innerWidth < 750) {
      if (this.state.showSearch === true) {
        this.setState({ showSearch: false });
      }
    }
    if (window.innerWidth >= 750) {
      if (this.state.showSearch === false) {
        this.setState({ showSearch: true });
      }
    }
  }

  render() {
    return (
      <SliderContainer>
        <FirstSlide background1={this.state.background1}>
          <SlideText>
            <SlideUpperText>RAC Approved Dealer</SlideUpperText>
            <SlideMiddleText>
              Up to 3 years extended RAC Warranty available
            </SlideMiddleText>
            <StyledLink to="/Offers">
              <SlideLowerText>More Info</SlideLowerText>
            </StyledLink>
          </SlideText>
          {this.state.showSearch && <Search />}
        </FirstSlide>
        <SecondSlide background1={this.state.background1}>
          <SlideText>
            <SlideUpperText>Welcome to Lux Cars</SlideUpperText>
            <SlideMiddleText>
              All credit applications considered
            </SlideMiddleText>
            <StyledLink to="/Offers">
              <SlideLowerText>More Info</SlideLowerText>
            </StyledLink>
          </SlideText>
          {this.state.showSearch && <Search />}
        </SecondSlide>
        {!this.state.showSearch && <Search />}
      </SliderContainer>
    );
  }
}
export default Slider;
