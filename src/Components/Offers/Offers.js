import React, { Component } from "react";
import MainSearch from "./OffersComponents/MainSearch/MainSearch";
import Cars from "./OffersComponents/Cars/Cars";
import SubNavi from "./OffersComponents/SubNavi/SubNavi";
import Sort from "./OffersComponents/Sort/Sort";
import OffersContainer from "./OffersStyle";

/**
 * "OffersContainer" component.
 */
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
