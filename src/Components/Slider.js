import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import imgBg1 from '../Assets/Images/slide1bg.jpg';
import imgBg2 from '../Assets/Images/slide2bg.jpg';
import Search from './Search';

const SliderContainer = styled.div`

`;
const changeSlide = keyframes`
  from {opacity: 0.8;}
  to {opacity: 1;}
`;
const FirstSlide = styled.div`
  background-image: url(${imgBg1});
  padding-bottom:4%;
  padding-top:8%;
  min-height:70vh;
  background-size: cover;
  padding-left:16px;
  padding-right:16px;
  display:grid;
  grid-template-columns: 60% 40%;
  display: ${props => props.background1 ? "grid" : "none"};
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 600ms, visibility 600ms;
  animation: ${changeSlide} 1s ease-in-out;
`;
const SecondSlide = styled.div`
  background-image: url(${imgBg2});
  padding-bottom:4%;
  padding-top:8%;
  min-height:70vh;
  background-size: cover;
  padding-left:16px;
  padding-right:16px;
  display:grid;
  grid-template-columns: 60% 40%;
  display: ${props => props.background1 ? "none" : "grid"};
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 600ms, visibility 600ms;
  animation: ${changeSlide} 1s ease-in-out;
`;
const SlideText = styled.div`


`;

const SlideUpperText = styled.h2`
  background-color: rgba(0, 0, 0, .8);
  width:60%;
  margin-bottom:16px;
  padding-bottom:4px;
  padding-top:4px;
  font-size:40px;
  padding-left:4px;
  padding-right:4px;
  color:white;

`;


const SlideMiddleText = styled.h2`
  background-color: rgba(255, 255,255, .6);
  color:black;
  width:80%;
  padding-bottom:4px;
  padding-top:4px;
  font-size:36px;
  padding-left:4px;
  padding-right:4px;
`;
const SlideLowerText = styled.button`
  margin-top:16px;
  background-color: #ec6b0c;
  color:white;
  outline: none;
  border: none;
  cursor:pointer;
  font-size:24px;
  padding-bottom:8px;
  padding-top:8px;
  padding-left:12px;
  padding-right:12px;
`;

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background1:true,
      };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ background1: !this.state.background1}), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidUpdate(){
    
  }
  render() {
    return (  
      <SliderContainer>
        <FirstSlide background1={this.state.background1}>
          <SlideText>
            <SlideUpperText>RAC Approved Dealer</SlideUpperText>
            <SlideMiddleText>Up to 3 years extended RAC Warranty available</SlideMiddleText>
            <SlideLowerText>More Info</SlideLowerText>
          </SlideText>
          <Search/>
        </FirstSlide>
        <SecondSlide background1={this.state.background1}>
          <SlideText>
            <SlideUpperText>RAC Approved Dealer</SlideUpperText>
            <SlideMiddleText>Up to 3 years extended RAC Warranty available</SlideMiddleText>
            <SlideLowerText>More Info</SlideLowerText>
          </SlideText>
          <Search/>
        </SecondSlide>
      </SliderContainer>
    );
  }
}