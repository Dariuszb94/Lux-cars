import React, {Component} from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {chooseMaker}from '../Actions/chooseMakerActions';
import {choosePowerMin }from '../Actions/choosePowerActions';
import {choosePowerMax }from '../Actions/choosePowerActions';
import {chooseYearMin }from '../Actions/chooseYearActions';
import {chooseYearMax }from '../Actions/chooseYearActions';
import {choosePriceMin }from '../Actions/choosePriceActions';
import {choosePriceMax }from '../Actions/choosePriceActions';

const SubNaviContainer = styled.div`
  background-color:black;
  padding-top:1.5%;
  padding-bottom:1.5%;
  padding-left:1%;
  padding-right:1%;
  color:white;
  display:flex;
  flex-direction:row;
  font-size:0.85em; 
`;

const RightSymbol = styled.div`
  color: #3a3a3a;
  font-weight:600;
`;

const StyledLink = styled(NavLink).attrs()`
  text-decoration:none;
  display:flex;
  flex-direction:row;
  color:white;
  font-family: 'Roboto', sans-serif;
  font-weight:100;
  -webkit-transition:0.3s ease-in-out;
  -moz-transition:0.3s ease-in-out;
  transition:0.3s ease-in-out;
  &:hover {
    color:#ec6b0c;
  }
`;

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

  resetWithoutMaker(){
    this.props.chooseModel("Any Model");
    this.props.choosePowerMin(null);
    this.props.choosePowerMax(null);
    this.props.chooseYearMin(null);
    this.props.chooseYearMax(null);
    this.props.choosePriceMin(null);
    this.props.choosePriceMax(null);
  }

  resetWithoutModel(){
    this.props.choosePowerMin(null);
    this.props.choosePowerMax(null);
    this.props.chooseYearMin(null);
    this.props.chooseYearMax(null);
    this.props.choosePriceMin(null);
    this.props.choosePriceMax(null);
  }

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
      <SubNaviContainer>
       <StyledLink to="/Lux-cars">Home</StyledLink>
        <RightSymbol>&nbsp;>&nbsp;</RightSymbol>
        <StyledLink to="/Offers" onClick={()=>this.resetFilters()}>Used cars</StyledLink>
        {(this.props.chosenMaker.maker === undefined || this.props.chosenMaker.maker === "Any Maker") ? "" : <StyledLink to="/Offers" onClick={()=>this.resetWithoutMaker()}><RightSymbol>&nbsp;>&nbsp;</RightSymbol>{this.props.chosenMaker.maker}</StyledLink>}
        {(this.props.chosenModel.chosenModel === undefined || this.props.chosenModel.chosenModel === "Any Model") ? "" : <StyledLink to="/Offers" onClick={()=>this.resetWithoutModel()}><RightSymbol>&nbsp;>&nbsp;</RightSymbol>{this.props.chosenModel.chosenModel}</StyledLink>}
      </SubNaviContainer>
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
  export default connect(mapStateToProps, mapDispatchToProps)(SubNavi);