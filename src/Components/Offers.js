import React, {Component} from 'react';
import styled from 'styled-components';
import MainSearch from './MainSearch';
import Cars from './Cars';
import SubNavi from './SubNavi';
import Sort from './Sort';

/**
 * "OffersContainer" component.
 */
const OffersContainer = styled.div`
`;

class Offers extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (  
      <OffersContainer>
        <SubNavi/>
        <MainSearch/>
        <Sort/>
        <Cars/>
      </OffersContainer>
    );
  }
}    

  export default Offers;