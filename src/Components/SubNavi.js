import React, {Component} from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';
import {choosenPowerMin }from '../Actions/choosenPowerActions';
import {choosenPowerMax }from '../Actions/choosenPowerActions';
import {choosenYearMin }from '../Actions/choosenYearActions';
import {choosenYearMax }from '../Actions/choosenYearActions';
import {choosenPriceMin }from '../Actions/choosenPriceActions';
import {choosenPriceMax }from '../Actions/choosenPriceActions';

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
    this.props.choosenPowerMin(null);
    this.props.choosenPowerMax(null);
    this.props.choosenYearMin(null);
    this.props.choosenYearMax(null);
    this.props.choosenPriceMin(null);
    this.props.choosenPriceMax(null);
  }

  resetWithoutModel(){
    this.props.choosenPowerMin(null);
    this.props.choosenPowerMax(null);
    this.props.choosenYearMin(null);
    this.props.choosenYearMax(null);
    this.props.choosenPriceMin(null);
    this.props.choosenPriceMax(null);
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
      <SubNaviContainer>
       <StyledLink to="/Lux-cars">Home</StyledLink>
        <RightSymbol>&nbsp;>&nbsp;</RightSymbol>
        <StyledLink to="/Offers" onClick={()=>this.resetFilters()}>Used cars</StyledLink>
        {(this.props.maker.maker === undefined || this.props.maker.maker === "Any Maker") ? "" : <StyledLink to="/Offers" onClick={()=>this.resetWithoutMaker()}><RightSymbol>&nbsp;>&nbsp;</RightSymbol>{this.props.maker.maker}</StyledLink>}
        {(this.props.choosenModel.choosenModel === undefined || this.props.choosenModel.choosenModel === "Any Model") ? "" : <StyledLink to="/Offers" onClick={()=>this.resetWithoutModel()}><RightSymbol>&nbsp;>&nbsp;</RightSymbol>{this.props.choosenModel.choosenModel}</StyledLink>}
      </SubNaviContainer>
    );
  }
}
const mapStateToProps = state => ({
  maker: state.maker,
  choosenModel:state.choosenModel,
  choosenPower:state.choosenPower,
  choosenYear:state.choosenYear,
  choosenPrice:state.choosenPrice,
  cars:state.cars,
  }); 

  export default connect(mapStateToProps,{chooseModel, updateMaker, choosenPowerMax, choosenPowerMin, choosenYearMin , choosenYearMax, choosenPriceMin , choosenPriceMax  })(SubNavi);