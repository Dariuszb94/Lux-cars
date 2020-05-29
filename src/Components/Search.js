import React, {Component} from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';
import {NavLink} from "react-router-dom";

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
`;
const SearchHeader = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight:300;
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
  cursor: pointer;

`;
const DropDownContentMaker = styled.div`
  display: none;
  width: 300px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.makerShow ? "block" : "none"};

`;
const activeClassName = 'nav-item-active'
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  width:100%;
    text-decoration:none;
    color:white;
  &.${activeClassName} {
  
  }
  
`;
const DropDownContentModel = styled.div`
  display: none;
  width: 300px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.modelShow ? "block" : "none"};

`;
const MakerChoose = styled.ul`
color:black;

display: inline-block;
`;
const ModelChoose = styled.ul`
color:black;

display: inline-block;
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
  }
  componentDidMount() {
  }
  componentDidUpdate() {
    console.log(this.props.maker.maker);
  }
  componentWillUnmount() {
  }
  modelChange(updatedModel){
    this.props.chooseModel(updatedModel.model)
    
  }
  makerChange(e){
    console.log(e);
     this.props.updateMaker(e);
    let updatedModel={model:"Any Model"};
    this.props.chooseModel(updatedModel.model)
  }
  makerShow(){
     this.setState({ makerShow: !this.state.makerShow});
  }
  modelShow(){
     this.setState({ modelShow: !this.state.modelShow});
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
            <SubMaker onClick={() => this.makerChange("Any Maker")}>Any Maker</SubMaker>
            <SubMaker onClick={() => this.makerChange("Citroen")}>Citroen</SubMaker>
            <SubMaker onClick={() => this.makerChange("Mercedes-Benz")}>Mercedes-Benz</SubMaker>
            <SubMaker onClick={() => this.makerChange("BMW")}>BMW</SubMaker>
            <SubMaker onClick={() => this.makerChange("Audi")}>Audi</SubMaker>
          </DropDownContentMaker>
        </MakerChoose>
        <ModelChoose>
          <AnyModel onClick={() => this.modelShow()} >
            <AnyMakerText>{ (this.props.choosenModel.choosenModel === undefined) ? "Any Model" : this.props.choosenModel.choosenModel}</AnyMakerText>
            <ArrowDropDownIcon/>
          </AnyModel>
          <DropDownContentModel modelShow={this.state.modelShow} onClick={() => this.modelShow()}>
            <SubMaker onClick={() => this.modelChange({model:"Any Model"})}>Any Model</SubMaker>
          {(this.props.models[this.props.maker.maker]===undefined) ?   null : (this.props.models[this.props.maker.maker].map(model =>   <SubMaker key={model} onClick={() => this.modelChange({model})}>{model}</SubMaker> )) }
          </DropDownContentModel>
        </ModelChoose>
        <StyledLink to="/Offers"><SearchButton>Search</SearchButton></StyledLink>
      </SearchContainer>
    );
  }
}    
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel
  }); 
  export default connect(mapStateToProps,{chooseModel, updateMaker})(Search);