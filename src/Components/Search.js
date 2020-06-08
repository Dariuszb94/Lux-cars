import React, {Component} from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';
import {NavLink} from "react-router-dom";
import {CARS_MODELS} from '../Components/Const/carsModels'

const SearchContainer = styled.div`
  background-color: rgba(68, 68, 68, .7);
  color:white;
  padding:16px;
  min-height:30%;
  max-height:60%;
  letter-spacing: 1px;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  width:300px;
  @media (max-width: 880px) {
    width:250px;
  }
  @media (max-width: 750px) {
    width:100%;
    align-items:center;
    padding-left:0;
    padding-right:0;
}
`;

const SearchHeader = styled.h2`
  font-weight:300;
  font-size:1.4rem;
  margin-bottom: 8px;
  @media (max-width: 750px) {
    align-self: flex-start;
    padding-left:5%;
    margin-bottom: 12px;
    font-size:2rem;
  }
`;

const SearchButton = styled.button`
  background-color:#ec6b0c;
  outline:none;
  border:none;
  color:white;
  padding-left:16px;
  padding-right:16px;
  padding-top:12px;
  padding-bottom:12px;
  border-radius:4px;
  align-self: flex-start;
  width:100%;
  -webkit-transition:0.2s linear;
  -moz-transition:0.2s linear;
  transition:0.2s linear;
  cursor: pointer;
  &:hover{
    background-color:black;
  }
  @media (max-width: 750px) {
    margin-left:5%;
    width:90%;
  }
`;
const DropDownContentMaker = styled.div`
  display: none;
  width: 300px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.makerShow ? "block" : "none"};
  @media (max-width: 880px) {
    width:250px;
  }
  @media (max-width: 750px) {
    width:90%;
  }
`;

const StyledLink = styled(NavLink).attrs()`
  margin-top:8px;
  width:100%;
  text-decoration:none;
  color:white;
`;

const DropDownContentModel = styled.div`
  display: none;
  width: 300px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.modelShow ? "block" : "none"};
  @media (max-width: 880px) {
    width:250px;
  }
  @media (max-width: 750px) {
    width:90%;
  }
`;

const MakerChoose = styled.ul`
  color:black;
  display: inline-block;
  @media (max-width: 750px) {
    width: 90%;
    margin-bottom: 4px;
  }
`;

const ModelChoose = styled.ul`
  color:black;
  display: inline-block;
  @media (max-width: 750px) {
    width: 90%;
    margin-bottom: 12px;
  }
`;

const AnyMaker = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction:row;
  color: white;
  text-align: center;
  text-decoration: none;
  color:black;
  width:100%;
  padding:8px;
  align-items: center;
  justify-content: space-between;
`;

const AnyModel = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction:row;
  color: white;
  text-align: center;
  text-decoration: none;
  color:black;
  width:100%;
  padding:8px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 750px) {
    width:100%
}
`;

const SubMaker = styled.div`
  cursor: pointer;
  padding:4px;
  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }
`;

const AnyMakerText = styled.div`
`;

/**
 * "Search" component.
 */
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makerShow:false,
      modelShow:false,
    };
    this.modelChange = this.modelChange.bind(this);
    this.makerChange = this.makerChange.bind(this);
    this.makerShow = this.makerShow.bind(this);
    this.modelShow = this.modelShow.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  modelChange(updatedModel){
    this.props.chooseModel(updatedModel.model)
  }
  makerChange(e){
    this.props.updateMaker(e.maker);
    let updatedModel={model:"Any Model"};
    this.props.chooseModel(updatedModel.model)
  }
  makerShow(){
     this.setState({ makerShow: !this.state.makerShow});
  }
  modelShow(){
     this.setState({ modelShow: !this.state.modelShow});
  }
  scrollToTop(){
    window.scrollTo(0, 0);
  }
  render() {
    return (  
      <SearchContainer>
        <SearchHeader>SEARCH OUR STOCK</SearchHeader>
        <MakerChoose>
          <AnyMaker onClick={() => this.makerShow()} >
            <AnyMakerText>{ (this.props.maker.maker === undefined) ? "Any Maker" : this.props.maker.maker}</AnyMakerText>
            <ArrowDropDownIcon/>
          </AnyMaker>
          <DropDownContentMaker makerShow={this.state.makerShow} onClick={() => this.makerShow()}>
            <SubMaker onClick={() => this.makerChange({maker:"Any Maker"})}>Any Maker</SubMaker>
            {(this.props.makers===undefined) ? null : (this.props.makers.map(maker =><SubMaker key={maker} onClick={() => this.makerChange({maker})}>{maker}</SubMaker> ))}
          </DropDownContentMaker>
        </MakerChoose>
        <ModelChoose>
          <AnyModel onClick={() => this.modelShow()} >
            <AnyMakerText>{ (this.props.choosenModel.choosenModel === undefined) ? "Any Model" : this.props.choosenModel.choosenModel}</AnyMakerText>
            <ArrowDropDownIcon/>
          </AnyModel>
          <DropDownContentModel modelShow={this.state.modelShow} onClick={() => this.modelShow()}>
            <SubMaker onClick={() => this.modelChange({model:"Any Model"})}>Any Model</SubMaker>
          {(CARS_MODELS[this.props.maker.maker]===undefined) ? null : (CARS_MODELS[this.props.maker.maker].map(model => <SubMaker key={model} onClick={() => this.modelChange({model})}>{model}</SubMaker>))}
          </DropDownContentModel>
        </ModelChoose>
        <StyledLink to="/Offers"><SearchButton onClick={() => this.scrollToTop()} >Search</SearchButton></StyledLink>
      </SearchContainer>
    );
  }
}    
const mapStateToProps = state => ({
  maker: state.maker,
  makers: state.makers,
  choosenModel:state.choosenModel
  }); 
  export default connect(mapStateToProps,{chooseModel, updateMaker})(Search);