import React, { Component } from 'react';
import styled from 'styled-components';
import MainSearch from './OffersComponents/MainSearch';
import Cars from './OffersComponents/Cars';
import SubNavi from './OffersComponents/SubNavi';
import Sort from './OffersComponents/Sort';

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
        <SubNavi />
        <MainSearch />
        <Sort />
        <Cars />
      </OffersContainer>
    );
  }
}

export default Offers;
