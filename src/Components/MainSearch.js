import React, {Component} from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {chooseMaker}from '../Actions/chooseMakerActions';
import {choosePowerMin }from '../Actions/choosePowerActions';
import {choosePowerMax }from '../Actions/choosePowerActions';
import {chooseYearMin }from '../Actions/chooseYearActions';
import {chooseYearMax }from '../Actions/chooseYearActions';
import {choosePriceMin }from '../Actions/choosePriceActions';
import {choosePriceMax }from '../Actions/choosePriceActions';
import {CARS_MODELS} from '../Components/Const/carsModels';
import {CARS_MAKERS} from '../Components/Const/carsMakers';
import {YEARS} from '../Components/Const/years';
import {PRICES} from '../Components/Const/prices';
import {POWERS} from '../Components/Const/powers';

const MainSearchContainer = styled.div`
  background-color:#3a3a3a;
  padding:2%;
  @media (max-width: 450px) {
    padding-left:0;
    padding-right:0;
  }
`;

const AttrContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 24%;
  @media (max-width: 860px) {
    width: 100%;
  }
`;

const Search = styled.div`
  display:flex;
  flex-direction:row;
  @media (max-width: 1040px) {
    flex-direction:column;
  }
`;
const SearchHeader = styled.h2`
  color:white;
  font-family: 'Roboto', sans-serif;
  font-weight:100;
  padding-bottom:4px;
  letter-spacing:1px;
`;

const FilterContainer = styled.div`
  color:white;
  font-family: 'Roboto', sans-serif;
  font-weight:200;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  width: 100%;
  @media (max-width: 860px) {
    display:grid;
    grid-template-columns: 50% 50%;
    grid-gap:1rem;
  }
  @media (max-width: 450px) {
    display:flex;
    flex-direction:column;
    grid-gap:0;
  }
`;
const DropDownContentMaker = styled.div`
  font-weight: 200;
  display: none;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.makerShow ? "block" : "none"};
  min-width:200px;
  @media (max-width:450px){
    width:100%;
  }
`;

const DropDownContentMinYear= styled.div`
  font-weight: 200;
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.minYearsShow ? "block" : "none"};
  @media (max-width:450px){
    width:100%;
  }
`;

const DropDownContentMaxYear= styled.div`
  font-weight: 200;
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.maxYearsShow ? "block" : "none"};
  @media (max-width:450px){
    width:100%;
  }
`;

const DropDownContentMinPrice= styled.div`
  font-weight: 200;
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.minPricesShow ? "block" : "none"};
  @media (max-width:450px){
    width:100%;
  }
`;

const DropDownContentMaxPrice= styled.div`
  font-weight: 200;
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.maxPricesShow ? "block" : "none"};
  @media (max-width:450px){
    width:100%;
  }
`;

const SubAttr = styled.div`
  cursor: pointer;
  color:black;
  padding:4px;
  font-weight: 300;
  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }
`;

const AnyAttrText = styled.div`
  color:black;
`;

const AttrChoose = styled.ul`
  display: inline-block;
  padding-bottom:4px;
  margin-bottom:8px;
`;

const AnyAttr = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction:row;
  color: white;
  text-align: center;
  text-decoration: none;
  color:black;
  width:100%;
  padding:8px;
  margin-bottom:4px;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
  border:none;
  border-radius:4px;
  -webkit-transition:0.4s ease-in-out;
  -moz-transition:0.4s ease-in-out;
  transition:0.4s ease-in-out;
  &:hover {
    color: #ec6b0c;
  }
`;
const DropDownContentModel = styled.div`
  display: none;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.modelShow ? "block" : "none"};
  font-weight: 200;
  min-width:200px;
  @media (max-width:450px){
    width:100%;
  }
`;

const DropDownContentMinPower = styled.div`
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.minPowerShow ? "block" : "none"};
  font-weight: 200;
  @media (max-width:450px){
    width:100%;
  }
`;

const DropDownContentMaxPower = styled.div`
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.maxPowerShow ? "block" : "none"};
  font-weight: 200;
  @media (max-width:450px){
    width:100%;
  }
`;

const ResetButton = styled.button`
  white-space: nowrap;
  cursor: pointer;
  background-color:#ec6b0c;
  color:white;
  justify-self:center;
  align-self:center;
  outline:none;
  border:none;
  border-radius:4px;
  height:100%;
  padding-top:16px;
  padding-bottom:16px;
  padding-left:16px;
  padding-right:16px;
  -webkit-transition:0.4s ease-in-out;
  -moz-transition:0.4s ease-in-out;
  transition:0.4s ease-in-out;
  margin-left:8px;
  &:hover {
    background-color: black;
  }
  @media (max-width: 1040px) {
    margin-left:0px;
  }
`;

/**
 * "MainSearch" component, element of "Offers"
 */
 class MainSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makerShow:false,
      modelShow:false,
      minPowerShow:false,
      maxPowerShow:false,
      minYearsShow:false,
      maxYearsShow:false,
      minPricesShow:false,
      maxPricesShow:false,
      };
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

  modelChange(updatedModel){
    this.props.chooseModel(updatedModel.model);
  }
  makerChange(e){
    this.props.chooseMaker(e.maker);
    this.props.chooseModel("Any Model")
  }
  minPowerChange(e){
     this.props.choosePowerMin(e.value);
  }
  maxPowerChange(e){
     this.props.choosePowerMax(e.value);
  }
  minYearChange(e){
     this.props.chooseYearMin(e.value);
  }
  maxYearChange(e){
     this.props.chooseYearMax(e.value);
  }
  minPriceChange(e){
     this.props.choosePriceMin(e.value);
  }
  maxPriceChange(e){
     this.props.choosePriceMax(e.value);
  }
  /**
   * Displays hidden dropdown menu.
   */
  makerShow(){
    this.setState({ makerShow: !this.state.makerShow});
    this.setState({ modelShow: false});
    this.setState({ minPowerShow: false});
    this.setState({ maxPowerShow: false});
    this.setState({ minYearsShow: false});
    this.setState({ maxYearsShow: false});
    this.setState({ maxPricesShow: false});
    this.setState({ minPricesShow: false});
  }
  /**
   * Displays hidden dropdown menu.
   */
  modelShow(){
    this.setState({ modelShow: !this.state.modelShow});
    this.setState({ makerShow: false});
    this.setState({ minPowerShow: false});
    this.setState({ maxPowerShow: false});
    this.setState({ minYearsShow: false});
    this.setState({ maxYearsShow: false});
    this.setState({ maxPricesShow: false});
    this.setState({ minPricesShow: false});
  }
  /**
   * Displays hidden dropdown menu.
   */
  minPowerShow(){
    this.setState({ minPowerShow: !this.state.minPowerShow});
    this.setState({ makerShow: false});
    this.setState({ modelShow: false});
    this.setState({ maxPowerShow: false});
    this.setState({ minYearsShow: false});
    this.setState({ maxYearsShow: false});
    this.setState({ maxPricesShow: false});
    this.setState({ minPricesShow: false});
  }
  /**
   * Displays hidden dropdown menu.
   */
  maxPowerShow(){
    this.setState({ maxPowerShow: !this.state.maxPowerShow});
    this.setState({ makerShow: false});
    this.setState({ modelShow: false});
    this.setState({ minPowerShow: false});
    this.setState({ minYearsShow: false});
    this.setState({ maxYearsShow: false});
    this.setState({ maxPricesShow: false});
    this.setState({ minPricesShow: false});
  }
  /**
   * Displays hidden dropdown menu.
   */
  minYearsShow(){
    this.setState({ minYearsShow: !this.state.minYearsShow});
    this.setState({ makerShow: false});
    this.setState({ modelShow: false});
    this.setState({ minPowerShow: false});
    this.setState({ maxPowerShow: false});
    this.setState({ maxYearsShow: false});
    this.setState({ maxPricesShow: false});
    this.setState({ minPricesShow: false});
  }
/**
  * Displays hidden dropdown menu.
  */
  maxYearsShow(){
    this.setState({ maxYearsShow: !this.state.maxYearsShow});
    this.setState({ makerShow: false});
    this.setState({ modelShow: false});
    this.setState({ minPowerShow: false});
    this.setState({ minYearsShow: false});
    this.setState({ maxPowerShow: false});
    this.setState({ maxPricesShow: false});
    this.setState({ minPricesShow: false});
  }
  /**
   * Displays hidden dropdown menu.
   */
  minPricesShow(){
    this.setState({ minPricesShow: !this.state.minPricesShow});
    this.setState({ makerShow: false});
    this.setState({ modelShow: false});
    this.setState({ minPowerShow: false});
    this.setState({ minYearsShow: false});
    this.setState({ maxYearsShow: false});
    this.setState({ maxPricesShow: false});
    this.setState({ maxYearsShow: false});
  }
  /**
   * Displays hidden dropdown menu.
   */
  maxPricesShow(){
    this.setState({ maxPricesShow: !this.state.maxPricesShow});
    this.setState({ makerShow: false});
    this.setState({ modelShow: false});
    this.setState({ minPowerShow: false});
    this.setState({ minYearsShow: false});
    this.setState({ maxYearsShow: false});
    this.setState({ minPricesShow: false});
    this.setState({ maxPowerShow: false});
  }
  /**
   * Displays hidden dropdown menu.
   */
  resetFilters(){
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
                <AnyAttr onClick={() => this.makerShow()}>
                  <AnyAttrText>{ (this.props.chosenMaker.maker === undefined) ? "Any Maker" : this.props.chosenMaker.maker}</AnyAttrText>
                  <ArrowDropDownIcon/>
                </AnyAttr>
                <DropDownContentMaker makerShow={this.state.makerShow} onClick={() => this.makerShow()}>
                  <SubAttr onClick={() => this.makerChange({maker:"Any Maker"})}>Any Maker</SubAttr>
                  {(CARS_MAKERS===undefined) ? null : (CARS_MAKERS.map(maker => <SubAttr key={maker} onClick={() => this.makerChange({maker})}>{maker}</SubAttr> )) }
                </DropDownContentMaker>
              </AttrChoose>
              <AttrChoose>
                <AnyAttr onClick={() => this.modelShow()} >
                  <AnyAttrText>{ (this.props.chosenModel.chosenModel === undefined) ? "Any Model" : this.props.chosenModel.chosenModel}</AnyAttrText> 
                  <ArrowDropDownIcon/>
                </AnyAttr>
                <DropDownContentModel modelShow={this.state.modelShow} onClick={() => this.modelShow()}>
                  <SubAttr onClick={() => this.modelChange({model:"Any Model"})}>Any Model</SubAttr>
                  {(CARS_MODELS===undefined || this.props.chosenMaker===undefined || this.props.chosenMaker.maker===undefined || CARS_MODELS[this.props.chosenMaker.maker]===undefined) ?   null : (CARS_MODELS[this.props.chosenMaker.maker].map(model =>   <SubAttr key={model} onClick={() => this.modelChange({model})}>{model}</SubAttr> )) }
                </DropDownContentModel>
              </AttrChoose>
            </AttrContainer>
            <AttrContainer>  
              <SearchHeader>Power</SearchHeader>
              <AttrChoose>
                <AnyAttr onClick={() => this.minPowerShow()} >
                  <AnyAttrText>{ (this.props.chosenPower.minPower === null) ? "Min Power" : this.props.chosenPower.minPower} KM</AnyAttrText> 
                  <ArrowDropDownIcon/>
                </AnyAttr>
                <DropDownContentMinPower minPowerShow={this.state.minPowerShow} onClick={() => this.minPowerShow()}>
                  {(POWERS.powerMin===undefined ) ?   null : (POWERS.powerMin.map(value =>   <SubAttr key={value} onClick={() => this.minPowerChange({value})}>{value}&nbsp;KM</SubAttr> )) }
               </DropDownContentMinPower>
              </AttrChoose>
              <AttrChoose>
                <AnyAttr onClick={() => this.maxPowerShow()} >
                  <AnyAttrText>{ (this.props.chosenPower.maxPower === null) ? "Max Power" : this.props.chosenPower.maxPower} KM</AnyAttrText> 
                  <ArrowDropDownIcon/>
                </AnyAttr>
                <DropDownContentMaxPower maxPowerShow={this.state.maxPowerShow} onClick={() => this.maxPowerShow()}>
                  {(POWERS.powerMax===undefined ) ?   null : (POWERS.powerMax.map(value =>   <SubAttr key={value} onClick={() => this.maxPowerChange({value})}>{value}&nbsp;KM</SubAttr> )) }
               </DropDownContentMaxPower>
              </AttrChoose>
            </AttrContainer>
            <AttrContainer>  
              <SearchHeader>Years</SearchHeader>
              <AttrChoose>
                <AnyAttr onClick={() => this.minYearsShow()} >
                  <AnyAttrText>From { (this.props.chosenYear.minYear === null) ? null : this.props.chosenYear.minYear}</AnyAttrText> 
                  <ArrowDropDownIcon/>
                </AnyAttr>
                <DropDownContentMinYear minYearsShow={this.state.minYearsShow} onClick={() => this.minYearsShow()}>
                  {(YEARS===undefined ) ?   null : (YEARS.yearMin.map(value =>   <SubAttr key={value} onClick={() => this.minYearChange({value})}>{value}</SubAttr> )) }
               </DropDownContentMinYear>
              </AttrChoose>
              <AttrChoose>
                <AnyAttr onClick={() => this.maxYearsShow()} >
                  <AnyAttrText>To { (this.props.chosenYear.maxYear === null) ? null: this.props.chosenYear.maxYear}</AnyAttrText> 
                  <ArrowDropDownIcon/>
                </AnyAttr>
                <DropDownContentMaxYear maxYearsShow={this.state.maxYearsShow} onClick={() => this.maxYearsShow()}>
                  {(YEARS===undefined ) ?   null : (YEARS.yearMax.map(value =>   <SubAttr key={value} onClick={() => this.maxYearChange({value})}>{value}</SubAttr> )) }
               </DropDownContentMaxYear>
              </AttrChoose>
            </AttrContainer>
            <AttrContainer>  
              <SearchHeader>Price</SearchHeader>
              <AttrChoose>
                <AnyAttr onClick={() => this.minPricesShow()} >
                  <AnyAttrText>From { (this.props.chosenPrice.minPrice === null) ? null : this.props.chosenPrice.minPrice} PLN</AnyAttrText> 
                  <ArrowDropDownIcon/>
                </AnyAttr>
                <DropDownContentMinPrice minPricesShow={this.state.minPricesShow} onClick={() => this.minPricesShow()}>
                  {(PRICES===undefined ) ?   null : (PRICES.priceMin.map(value =>   <SubAttr key={value} onClick={() => this.minPriceChange({value})}>{value}</SubAttr> )) }
               </DropDownContentMinPrice>
              </AttrChoose>
              <AttrChoose>
                <AnyAttr onClick={() => this.maxPricesShow()} >
                  <AnyAttrText>To { (this.props.chosenPrice.maxPrice === null) ? null : this.props.chosenPrice.maxPrice} PLN</AnyAttrText> 
                  <ArrowDropDownIcon/>
                </AnyAttr>
                <DropDownContentMaxPrice maxPricesShow={this.state.maxPricesShow} onClick={() => this.maxPricesShow()}>
                  {(PRICES===undefined ) ?   null : (PRICES.priceMax.map(value =>   <SubAttr key={value} onClick={() => this.maxPriceChange({value})}>{value}</SubAttr> )) }
               </DropDownContentMaxPrice>
              </AttrChoose>
            </AttrContainer>     
          </FilterContainer>
          <ResetButton onClick={()=>this.resetFilters()}>RESET FILTERS</ResetButton>
        </Search>
      </MainSearchContainer>
    );
  }
}    
const mapStateToProps = state => ({
  chosenMaker: state.chosenMaker,
  chosenModel:state.chosenModel,
  chosenPower:state.chosenPower,
  chosenYear:state.chosenYear,
  chosenPrice:state.chosenPrice,
  }); 
const mapDispatchToProps = {
  chooseModel,
  chooseMaker,
  choosePowerMax,
  choosePowerMin,
  chooseYearMin ,
  chooseYearMax,
  choosePriceMin,
  choosePriceMax,
};

  export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);