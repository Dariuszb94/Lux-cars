import React, { Component } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
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
import CARS_MODELS from "../../../Const/carsModels";
import CARS_MAKERS from "../../../Const/carsMakers";
import YEARS from "../../../Const/years";
import PRICES from "../../../Const/prices";
import POWERS from "../../../Const/powers";
import {
  MainSearchContainer,
  AttrContainer,
  Search,
  SearchHeader,
  FilterContainer,
  DropDownContentMaker,
  DropDownContentMinYear,
  DropDownContentMaxYear,
  DropDownContentMinPrice,
  DropDownContentMaxPrice,
  SubAttr,
  AnyAttrText,
  AttrChoose,
  AnyAttr,
  DropDownContentModel,
  DropDownContentMinPower,
  DropDownContentMaxPower,
  ResetButton,
} from "./MainSearchStyle";

const initialState = {
  makerShow: false,
  modelShow: false,
  minPowerShow: false,
  maxPowerShow: false,
  minYearsShow: false,
  maxYearsShow: false,
  minPricesShow: false,
  maxPricesShow: false,
};
/**
 * "MainSearch" component, element of "Offers"
 */
class MainSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makerShow: false,
      modelShow: false,
      minPowerShow: false,
      maxPowerShow: false,
      minYearsShow: false,
      maxYearsShow: false,
      minPricesShow: false,
      maxPricesShow: false,
    };
    this.state = initialState;
    this.modelChange = this.modelChange.bind(this);
    this.makerChange = this.makerChange.bind(this);
    this.makerShow = this.makerShow.bind(this);
    this.modelShow = this.modelShow.bind(this);
    this.minPowerShow = this.minPowerShow.bind(this);
    this.maxPowerShow = this.maxPowerShow.bind(this);
    this.minPowerChange = this.minPowerChange.bind(this);
    this.maxPowerChange = this.maxPowerChange.bind(this);
    this.maxYearChange = this.maxYearChange.bind(this);
    this.minYearChange = this.minYearChange.bind(this);
    this.maxYearsShow = this.maxYearsShow.bind(this);
    this.minYearsShow = this.minYearsShow.bind(this);
    this.maxPriceChange = this.maxPriceChange.bind(this);
    this.minPriceChange = this.minPriceChange.bind(this);
    this.maxPricesShow = this.maxPricesShow.bind(this);
    this.minPricesShow = this.minPricesShow.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  modelChange(updatedModel) {
    this.props.chooseModel(updatedModel.model);
  }

  makerChange(e) {
    this.props.chooseMaker(e.maker);
    this.props.chooseModel("Any Model");
  }

  minPowerChange(e) {
    this.props.choosePowerMin(e.value);
  }

  maxPowerChange(e) {
    this.props.choosePowerMax(e.value);
  }

  minYearChange(e) {
    this.props.chooseYearMin(e.value);
  }

  maxYearChange(e) {
    this.props.chooseYearMax(e.value);
  }

  minPriceChange(e) {
    this.props.choosePriceMin(e.value);
  }

  maxPriceChange(e) {
    this.props.choosePriceMax(e.value);
  }

  /**
   * Displays hidden dropdown menu.
   */
  makerShow() {
    this.setState((prevState) => ({
      ...initialState,
      makerShow: !prevState.makerShow,
    }));
  }

  /**
   * Displays hidden dropdown menu.
   */
  modelShow() {
    this.setState((prevState) => ({
      ...initialState,
      modelShow: !prevState.modelShow,
    }));
  }

  /**
   * Displays hidden dropdown menu.
   */
  minPowerShow() {
    this.setState((prevState) => ({
      ...initialState,
      minPowerShow: !prevState.minPowerShow,
    }));
  }

  /**
   * Displays hidden dropdown menu.
   */
  maxPowerShow() {
    this.setState((prevState) => ({
      ...initialState,
      maxPowerShow: !prevState.maxPowerShow,
    }));
  }

  /**
   * Displays hidden dropdown menu.
   */
  minYearsShow() {
    this.setState((prevState) => ({
      ...initialState,
      minYearsShow: !prevState.minYearsShow,
    }));
  }

  /**
   * Displays hidden dropdown menu.
   */
  maxYearsShow() {
    this.setState((prevState) => ({
      ...initialState,
      maxYearsShow: !prevState.maxYearsShow,
    }));
  }

  /**
   * Displays hidden dropdown menu.
   */
  minPricesShow() {
    this.setState((prevState) => ({
      ...initialState,
      minPricesShow: !prevState.minPricesShow,
    }));
  }

  /**
   * Displays hidden dropdown menu.
   */
  maxPricesShow() {
    this.setState((prevState) => ({
      ...initialState,
      maxPricesShow: !prevState.maxPricesShow,
    }));
  }

  /**
   * Displays hidden dropdown menu.
   */
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
      <MainSearchContainer>
        <Search>
          <FilterContainer>
            <AttrContainer>
              <SearchHeader>Search</SearchHeader>
              <AttrChoose>
                <AnyAttr onClick={this.makerShow}>
                  <AnyAttrText>{this.props.chosenMaker.maker}</AnyAttrText>
                  <ArrowDropDownIcon />
                </AnyAttr>
                <DropDownContentMaker
                  makerShow={this.state.makerShow}
                  onClick={this.makerShow}
                >
                  <SubAttr
                    onClick={() => this.makerChange({ maker: "Any Maker" })}
                  >
                    Any Maker
                  </SubAttr>
                  {CARS_MAKERS.map((maker) => (
                    <SubAttr
                      key={maker}
                      onClick={() => this.makerChange({ maker })}
                    >
                      {maker}
                    </SubAttr>
                  ))}
                </DropDownContentMaker>
              </AttrChoose>
              <AttrChoose>
                <AnyAttr onClick={this.modelShow}>
                  <AnyAttrText>
                    {this.props.chosenModel.chosenModel}
                  </AnyAttrText>
                  <ArrowDropDownIcon />
                </AnyAttr>
                <DropDownContentModel
                  modelShow={this.state.modelShow}
                  onClick={this.modelShow}
                >
                  <SubAttr
                    onClick={() => this.modelChange({ model: "Any Model" })}
                  >
                    Any Model
                  </SubAttr>
                  {CARS_MODELS[this.props.chosenMaker.maker] &&
                    CARS_MODELS[this.props.chosenMaker.maker].map((model) => (
                      <SubAttr
                        key={model}
                        onClick={() => this.modelChange({ model })}
                      >
                        {model}
                      </SubAttr>
                    ))}
                </DropDownContentModel>
              </AttrChoose>
            </AttrContainer>
            <AttrContainer>
              <SearchHeader>Power</SearchHeader>
              <AttrChoose>
                <AnyAttr onClick={this.minPowerShow}>
                  <AnyAttrText>
                    {this.props.chosenPower.minPower === null
                      ? "Min Power"
                      : this.props.chosenPower.minPower}{" "}
                    KM
                  </AnyAttrText>
                  <ArrowDropDownIcon />
                </AnyAttr>
                <DropDownContentMinPower
                  minPowerShow={this.state.minPowerShow}
                  onClick={this.minPowerShow}
                >
                  {POWERS.powerMin &&
                    POWERS.powerMin.map((value) => (
                      <SubAttr
                        key={value}
                        onClick={() => this.minPowerChange({ value })}
                      >
                        {value}
                        &nbsp;KM
                      </SubAttr>
                    ))}
                </DropDownContentMinPower>
              </AttrChoose>
              <AttrChoose>
                <AnyAttr onClick={this.maxPowerShow}>
                  <AnyAttrText>
                    {this.props.chosenPower.maxPower === null
                      ? "Max Power"
                      : this.props.chosenPower.maxPower}{" "}
                    KM
                  </AnyAttrText>
                  <ArrowDropDownIcon />
                </AnyAttr>
                <DropDownContentMaxPower
                  maxPowerShow={this.state.maxPowerShow}
                  onClick={this.maxPowerShow}
                >
                  {POWERS.powerMax &&
                    POWERS.powerMax.map((value) => (
                      <SubAttr
                        key={value}
                        onClick={() => this.maxPowerChange({ value })}
                      >
                        {value}
                        &nbsp;KM
                      </SubAttr>
                    ))}
                </DropDownContentMaxPower>
              </AttrChoose>
            </AttrContainer>
            <AttrContainer>
              <SearchHeader>Years</SearchHeader>
              <AttrChoose>
                <AnyAttr onClick={this.minYearsShow}>
                  <AnyAttrText>
                    From{" "}
                    {this.props.chosenYear.minYear === null
                      ? null
                      : this.props.chosenYear.minYear}
                  </AnyAttrText>
                  <ArrowDropDownIcon />
                </AnyAttr>
                <DropDownContentMinYear
                  minYearsShow={this.state.minYearsShow}
                  onClick={this.minYearsShow}
                >
                  {YEARS &&
                    YEARS.yearMin.map((value) => (
                      <SubAttr
                        key={value}
                        onClick={() => this.minYearChange({ value })}
                      >
                        {value}
                      </SubAttr>
                    ))}
                </DropDownContentMinYear>
              </AttrChoose>
              <AttrChoose>
                <AnyAttr onClick={this.maxYearsShow}>
                  <AnyAttrText>
                    To{" "}
                    {this.props.chosenYear.maxYear === null
                      ? null
                      : this.props.chosenYear.maxYear}
                  </AnyAttrText>
                  <ArrowDropDownIcon />
                </AnyAttr>
                <DropDownContentMaxYear
                  maxYearsShow={this.state.maxYearsShow}
                  onClick={this.maxYearsShow}
                >
                  {YEARS.yearMax &&
                    YEARS.yearMax.map((value) => (
                      <SubAttr
                        key={value}
                        onClick={() => this.maxYearChange({ value })}
                      >
                        {value}
                      </SubAttr>
                    ))}
                </DropDownContentMaxYear>
              </AttrChoose>
            </AttrContainer>
            <AttrContainer>
              <SearchHeader>Price</SearchHeader>
              <AttrChoose>
                <AnyAttr onClick={this.minPricesShow}>
                  <AnyAttrText>
                    From{" "}
                    {this.props.chosenPrice.minPrice === null
                      ? null
                      : this.props.chosenPrice.minPrice}{" "}
                    PLN
                  </AnyAttrText>
                  <ArrowDropDownIcon />
                </AnyAttr>
                <DropDownContentMinPrice
                  minPricesShow={this.state.minPricesShow}
                  onClick={this.minPricesShow}
                >
                  {PRICES &&
                    PRICES.priceMin.map((value) => (
                      <SubAttr
                        key={value}
                        onClick={() => this.minPriceChange({ value })}
                      >
                        {value}
                      </SubAttr>
                    ))}
                </DropDownContentMinPrice>
              </AttrChoose>
              <AttrChoose>
                <AnyAttr onClick={this.maxPricesShow}>
                  <AnyAttrText>
                    To{" "}
                    {this.props.chosenPrice.maxPrice === null
                      ? null
                      : this.props.chosenPrice.maxPrice}{" "}
                    PLN
                  </AnyAttrText>
                  <ArrowDropDownIcon />
                </AnyAttr>
                <DropDownContentMaxPrice
                  maxPricesShow={this.state.maxPricesShow}
                  onClick={this.maxPricesShow}
                >
                  {PRICES &&
                    PRICES.priceMax.map((value) => (
                      <SubAttr
                        key={value}
                        onClick={() => this.maxPriceChange({ value })}
                      >
                        {value}
                      </SubAttr>
                    ))}
                </DropDownContentMaxPrice>
              </AttrChoose>
            </AttrContainer>
          </FilterContainer>
          <ResetButton onClick={this.resetFilters}>RESET FILTERS</ResetButton>
        </Search>
      </MainSearchContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);
