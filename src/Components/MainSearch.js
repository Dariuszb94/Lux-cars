import React, {Component} from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';
import {choosenPowerMin }from '../Actions/choosenPowerActions';
import {choosenPowerMax }from '../Actions/choosenPowerActions';
import {choosenYearMin }from '../Actions/choosenYearActions';
import {choosenYearMax }from '../Actions/choosenYearActions';
import {choosenPriceMin }from '../Actions/choosenPriceActions';
import {choosenPriceMax }from '../Actions/choosenPriceActions';

const MainSearchContainer = styled.div`
background-color:#3a3a3a;
padding-top:2%;
padding-bottom:2%;
padding-left:2%;
padding-right:2%;

`;

const AttrContainer = styled.div`
display:flex;
flex-direction:column;

`;

const Search = styled.div`
display:flex;
flex-direction:row;
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
`;
const DropDownContentMaker = styled.div`
  font-weight: 200;
  display: none;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.makerShow ? "block" : "none"};
  min-width:200px;


`;
const DropDownContentMinYear= styled.div`
    font-weight: 200;
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.minYearsShow ? "block" : "none"};

`;
const DropDownContentMaxYear= styled.div`
    font-weight: 200;
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.maxYearsShow ? "block" : "none"};

`;
const DropDownContentMinPrice= styled.div`
    font-weight: 200;
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.minPricesShow ? "block" : "none"};

`;
const DropDownContentMaxPrice= styled.div`
    font-weight: 200;
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.maxPricesShow ? "block" : "none"};

`;
const SubAttr = styled.div`
  cursor: pointer;
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
color:black;

display: inline-block;
padding-bottom:4px;
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

`;
const DropDownContentMinPower = styled.div`
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.minPowerShow ? "block" : "none"};
  font-weight: 200;

`;
const DropDownContentMaxPower = styled.div`
  display: none;
  min-width:200px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.maxPowerShow ? "block" : "none"};
  font-weight: 200;

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
  
&:hover {
    background-color: black;
  }
`;

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
  componentDidMount() {
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }

  modelChange(updatedModel){
    this.props.chooseModel(updatedModel.model);
    
  }
  makerChange(e){
     this.props.updateMaker(e);
    this.props.chooseModel("Any Model")
  }
  minPowerChange(e){
     this.props.choosenPowerMin(e.value);
  }
  maxPowerChange(e){
     this.props.choosenPowerMax(e.value);
  }
  minYearChange(e){
     this.props.choosenYearMin(e.value);
  }
  maxYearChange(e){
     this.props.choosenYearMax(e.value);
  }
  minPriceChange(e){
     this.props.choosenPriceMin(e.value);
  }
  maxPriceChange(e){
     this.props.choosenPriceMax(e.value);
  }
  makerShow(){
     this.setState({ makerShow: !this.state.makerShow});
  }
  modelShow(){
     this.setState({ modelShow: !this.state.modelShow});
  }
  minPowerShow(){
     this.setState({ minPowerShow: !this.state.minPowerShow});

  }
  maxPowerShow(){
     this.setState({ maxPowerShow: !this.state.maxPowerShow});

  }
  minYearsShow(){
     this.setState({ minYearsShow: !this.state.minYearsShow});

  }
  maxYearsShow(){
     this.setState({ maxYearsShow: !this.state.maxYearsShow});

  }
  minPricesShow(){
     this.setState({ minPricesShow: !this.state.minPricesShow});

  }
  maxPricesShow(){
     this.setState({ maxPricesShow: !this.state.maxPricesShow});

  }
  resetFilters(){
    this.props.updateMaker("Any Maker");
    this.props.chooseModel("Any Model");
    this.props.choosenPowerMin(null);
    this.props.choosenPowerMax(null);
    this.props.choosenYearMin(null);
    this.props.choosenYearMax(null);
    this.props.choosenPriceMin(null);
    this.props.choosenPriceMax(null);
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
                    <AnyAttrText>{ (this.props.maker.maker === undefined) ? "Any Maker" : this.props.maker.maker}</AnyAttrText>
                    <ArrowDropDownIcon/>
                  </AnyAttr>
                  <DropDownContentMaker makerShow={this.state.makerShow} onClick={() => this.makerShow()}>
                    <SubAttr onClick={() => this.makerChange("Any Maker")}>Any Maker</SubAttr>
                    <SubAttr onClick={() => this.makerChange("Citroen")}>Citroen</SubAttr>
                    <SubAttr onClick={() => this.makerChange("Mercedes-Benz")}>Mercedes-Benz</SubAttr>
                    <SubAttr onClick={() => this.makerChange("BMW")}>BMW</SubAttr>
                    <SubAttr onClick={() => this.makerChange("Audi")}>Audi</SubAttr>
                  </DropDownContentMaker>
                </AttrChoose>
                <AttrChoose>
                  <AnyAttr onClick={() => this.modelShow()} >
                    <AnyAttrText>{ (this.props.choosenModel.choosenModel === undefined) ? "Any Model" : this.props.choosenModel.choosenModel}</AnyAttrText> 
                    <ArrowDropDownIcon/>
                  </AnyAttr>
                  <DropDownContentModel modelShow={this.state.modelShow} onClick={() => this.modelShow()}>
                    <SubAttr onClick={() => this.modelChange({model:"Any Model"})}>Any Model</SubAttr>
                    {(this.props.models===undefined || this.props.maker===undefined || this.props.maker.maker===undefined || this.props.models[this.props.maker.maker]===undefined) ?   null : (this.props.models[this.props.maker.maker].map(model =>   <SubAttr key={model} onClick={() => this.modelChange({model})}>{model}</SubAttr> )) }
                  </DropDownContentModel>
                </AttrChoose>
              </AttrContainer>
              <AttrContainer>  
                <SearchHeader>Power</SearchHeader>
                <AttrChoose>
                  <AnyAttr onClick={() => this.minPowerShow()} >
                    <AnyAttrText>{ (this.props.choosenPower.minPower === null) ? "Min Power" : this.props.choosenPower.minPower} KM</AnyAttrText> 
                    <ArrowDropDownIcon/>
                  </AnyAttr>
                  <DropDownContentMinPower minPowerShow={this.state.minPowerShow} onClick={() => this.minPowerShow()}>
                    {(this.props.power.powerMin===undefined ) ?   null : (this.props.power.powerMin.map(value =>   <SubAttr key={value} onClick={() => this.minPowerChange({value})}>{value}&nbsp;KM</SubAttr> )) }
                 </DropDownContentMinPower>
                </AttrChoose>
                <AttrChoose>
                  <AnyAttr onClick={() => this.maxPowerShow()} >
                    <AnyAttrText>{ (this.props.choosenPower.maxPower === null) ? "Max Power" : this.props.choosenPower.maxPower} KM</AnyAttrText> 
                    <ArrowDropDownIcon/>
                  </AnyAttr>
                  <DropDownContentMaxPower maxPowerShow={this.state.maxPowerShow} onClick={() => this.maxPowerShow()}>
                    {(this.props.power.powerMax===undefined ) ?   null : (this.props.power.powerMax.map(value =>   <SubAttr key={value} onClick={() => this.maxPowerChange({value})}>{value}&nbsp;KM</SubAttr> )) }
                 </DropDownContentMaxPower>
                </AttrChoose>
              </AttrContainer>
              <AttrContainer>  
                <SearchHeader>Years</SearchHeader>
                <AttrChoose>
                  <AnyAttr onClick={() => this.minYearsShow()} >
                    <AnyAttrText>From { (this.props.choosenYear.minYear === null) ? null : this.props.choosenYear.minYear}</AnyAttrText> 
                    <ArrowDropDownIcon/>
                  </AnyAttr>
                  <DropDownContentMinYear minYearsShow={this.state.minYearsShow} onClick={() => this.minYearsShow()}>
                    {(this.props.years===undefined ) ?   null : (this.props.years.yearMin.map(value =>   <SubAttr key={value} onClick={() => this.minYearChange({value})}>{value}</SubAttr> )) }
                 </DropDownContentMinYear>
                </AttrChoose>
                <AttrChoose>
                  <AnyAttr onClick={() => this.maxYearsShow()} >
                    <AnyAttrText>To { (this.props.choosenYear.maxYear === null) ? null: this.props.choosenYear.maxYear}</AnyAttrText> 
                    <ArrowDropDownIcon/>
                  </AnyAttr>
                  <DropDownContentMaxYear maxYearsShow={this.state.maxYearsShow} onClick={() => this.maxYearsShow()}>
                    {(this.props.years===undefined ) ?   null : (this.props.years.yearMax.map(value =>   <SubAttr key={value} onClick={() => this.maxYearChange({value})}>{value}</SubAttr> )) }
                 </DropDownContentMaxYear>
                </AttrChoose>
              </AttrContainer>
              <AttrContainer>  
                <SearchHeader>Price</SearchHeader>
                <AttrChoose>
                  <AnyAttr onClick={() => this.minPricesShow()} >
                    <AnyAttrText>From { (this.props.choosenPrice.minPrice === null) ? null : this.props.choosenPrice.minPrice} PLN</AnyAttrText> 
                    <ArrowDropDownIcon/>
                  </AnyAttr>
                  <DropDownContentMinPrice minPricesShow={this.state.minPricesShow} onClick={() => this.minPricesShow()}>
                    {(this.props.price===undefined ) ?   null : (this.props.price.priceMin.map(value =>   <SubAttr key={value} onClick={() => this.minPriceChange({value})}>{value}</SubAttr> )) }
                 </DropDownContentMinPrice>
                </AttrChoose>
                <AttrChoose>
                  <AnyAttr onClick={() => this.maxPricesShow()} >
                    <AnyAttrText>To { (this.props.choosenPrice.maxPrice === null) ? null : this.props.choosenPrice.maxPrice} PLN</AnyAttrText> 
                    <ArrowDropDownIcon/>
                  </AnyAttr>
                  <DropDownContentMaxPrice maxPricesShow={this.state.maxPricesShow} onClick={() => this.maxPricesShow()}>
                    {(this.props.price===undefined ) ?   null : (this.props.price.priceMax.map(value =>   <SubAttr key={value} onClick={() => this.maxPriceChange({value})}>{value}</SubAttr> )) }
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
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel,
  power:state.power,
  choosenPower:state.choosenPower,
  years:state.years,
  choosenYear:state.choosenYear,
  price:state.price,
  choosenPrice:state.choosenPrice,
  cars:state.cars,
  }); 

  export default connect(mapStateToProps,{chooseModel, updateMaker, choosenPowerMax, choosenPowerMin, choosenYearMin , choosenYearMax, choosenPriceMin , choosenPriceMax  })(MainSearch);