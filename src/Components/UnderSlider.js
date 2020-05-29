import React, {Component} from 'react';
import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';


const UnderSliderContainer = styled.div`
  display:flex;
  flex-direction:column;
  background-color:black;
  color:white;
  align-items: center;
  min-height:20vh;
  justify-content:space-around;
  padding-left:8%;
  padding-right:8%;
  padding-top:2%;
  padding-bottom:2%;
`;
const UnderSliderContainerUpper = styled.h2`
  color:#ec6108;
  border-bottom:2px solid white;
  padding-bottom:4px;
  font-size:40px;

`;
const UnderSliderContainerLower = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  justify-content:space-around;
  font-size:22px;
`;

const UnderSliderContainerLowerElement = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  width:100%;
  justify-content:center;

`;
const Checked = styled(CheckIcon)`
  color: #ec6b0c;
  font-size: 32px !important;
`;
export class UnderSlider extends Component {
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
      <UnderSliderContainer>
        <UnderSliderContainerUpper>RAC Approved Dealer</UnderSliderContainerUpper>
        <UnderSliderContainerLower>
          <UnderSliderContainerLowerElement><Checked/>&nbsp;6 months free warranty</UnderSliderContainerLowerElement>
          <UnderSliderContainerLowerElement><Checked/>&nbsp;12 months free breakdown cover</UnderSliderContainerLowerElement>
          <UnderSliderContainerLowerElement><Checked/>&nbsp;Extended options available</UnderSliderContainerLowerElement>
        </UnderSliderContainerLower>
      </UnderSliderContainer>
    );
  }
}