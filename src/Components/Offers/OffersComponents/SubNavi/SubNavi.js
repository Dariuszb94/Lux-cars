import React, { Component } from "react";
import { connect } from "react-redux";
import chooseModel from "../../../../Actions/chooseModelActions";
import chooseMaker from "../../../../Actions/chooseMakerActions";
import {
  choosePowerMin,
  choosePowerMax,
} from "../../../../Actions/choosePowerActions";
import {
  chooseYearMin,
  chooseYearMax,
} from "../../../../Actions/chooseYearActions";
import {
  choosePriceMin,
  choosePriceMax,
} from "../../../../Actions/choosePriceActions";
import { SubNaviContainer, RightSymbol, StyledLink } from "./SubNaviStyle";

/**
 * "SubNavi" component
 */
class SubNavi extends Component {
  constructor(props) {
    super(props);
    this.resetWithoutModel = this.resetWithoutModel.bind(this);
    this.resetWithoutMaker = this.resetWithoutMaker.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  resetWithoutMaker() {
    this.props.chooseModel("Any Model");
    this.props.choosePowerMin(null);
    this.props.choosePowerMax(null);
    this.props.chooseYearMin(null);
    this.props.chooseYearMax(null);
    this.props.choosePriceMin(null);
    this.props.choosePriceMax(null);
  }

  resetWithoutModel() {
    this.props.choosePowerMin(null);
    this.props.choosePowerMax(null);
    this.props.chooseYearMin(null);
    this.props.chooseYearMax(null);
    this.props.choosePriceMin(null);
    this.props.choosePriceMax(null);
  }

  resetFilters() {
    this.props.chooseMaker("Any Maker");
    this.props.chooseModel("Any Model");
    this.props.choosePowerMin(null);
    this.props.choosePowerMax(null);
    this.props.chooseYearMin(null);
    this.props.chooseYearMax(null);
    this.props.choosePriceMin(null);
    this.props.choosePriceMax(null);
  }

  render() {
    return (
      <SubNaviContainer>
        <StyledLink to="/Lux-cars">Home</StyledLink>
        <RightSymbol>&nbsp;&gt;&nbsp;</RightSymbol>
        <StyledLink to="/Offers" onClick={this.resetFilters}>
          Used cars
        </StyledLink>
        {this.props.chosenMaker.maker === undefined ||
        this.props.chosenMaker.maker === "Any Maker" ? (
          ""
        ) : (
          <StyledLink to="/Offers" onClick={this.resetWithoutMaker}>
            <RightSymbol>&nbsp;&gt;&nbsp;</RightSymbol>
            {this.props.chosenMaker.maker}
          </StyledLink>
        )}
        {this.props.chosenModel.chosenModel === undefined ||
        this.props.chosenModel.chosenModel === "Any Model" ? (
          ""
        ) : (
          <StyledLink to="/Offers" onClick={this.resetWithoutModel}>
            <RightSymbol>&nbsp;&gt;&nbsp;</RightSymbol>
            {this.props.chosenModel.chosenModel}
          </StyledLink>
        )}
      </SubNaviContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  chosenMaker: state.chosenMaker,
  chosenModel: state.chosenModel,
  chosenPower: state.chosenPower,
  chosenYear: state.chosenYear,
  chosenPrice: state.chosenPrice,
});
const mapDispatchToProps = {
  chooseModel,
  chooseMaker,
  choosePowerMax,
  choosePowerMin,
  chooseYearMin,
  chooseYearMax,
  choosePriceMin,
  choosePriceMax,
};
export default connect(mapStateToProps, mapDispatchToProps)(SubNavi);
