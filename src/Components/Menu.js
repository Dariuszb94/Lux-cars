import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';
import {NavLink} from "react-router-dom";

const MenuContainer = styled.div`
  background-color:#ec6b0c;
  color:white;
  font-weight:600;
`;
const MenuList = styled.ul`
  display:flex;
  flex-direction:row; 
  list-style:none;
  justify-content:space-around;
  align-items: center;
`;
const DropDownContent = styled.div`
  display: none;
  width: 300px;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${props => props.makerShow ? "block" : "none"};

`;
const MenuListElement = styled.li`
  cursor: pointer;
  padding-bottom:16px;
  padding-top:16px;
  
  width:100%;
  text-align:center;
  -webkit-transition:0.2s linear;
  -moz-transition:0.2s linear;
  transition:0.2s linear;
  &:hover {
    background-color: rgba(0, 0, 0, .1);
    backdrop-filter: grayscale(0.1) opacity(0.9);
    -webkit-backdrop-filter: grayscale(0.1) opacity(0.9);
  }  
`;
const MakerChoose = styled.li`
color:black;
cursor: pointer;

  width:100%;
  text-align:center;
  -webkit-transition:0.2s linear;
  -moz-transition:0.2s linear;
  transition:0.2s linear;
  &:hover {
    background-color: rgba(0, 0, 0, .1);
    backdrop-filter: grayscale(0.1) opacity(0.9);
    -webkit-backdrop-filter: grayscale(0.1) opacity(0.9);
  }  

width:100%;
display: inline-block;

`;


const SubMaker = styled.div`
  cursor: pointer;
  padding-top:4px;
  padding-bottom:4px;
  color:black !important;
  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }
`;
const activeClassName = 'nav-item-active'
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  width:100%;
    text-decoration:none;
    color:white;
  &.${activeClassName} {
  
  }
  
`;
const AnyMaker = styled.div`
  padding-bottom:16px;
  padding-top:16px;
  cursor: pointer;
  color: white;
  text-align: center;
  text-decoration: none;
 width:100%;
text-decoration:none;
  height:100%;

`;
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makerShow:false,
      };
      this.makerChange = this.makerChange.bind(this);
      this.makerShow = this.makerShow.bind(this);
      this.makerHide = this.makerHide.bind(this);
  }
  componentDidMount() {
  }

  componentWillUnmount() {
  }
  makerChange(e){
    this.props.updateMaker(e);
    let updatedModel={"model":"Any Model"};
    this.props.chooseModel(updatedModel.model)
    this.setState({ makerShow: !this.state.makerShow});
  }
  makerShow(){
     this.setState({ makerShow: true});
  }
  makerHide(){
     this.setState({ makerShow: false});
  }

  render() {
    return (  
      <MenuContainer>
        <MenuList>
          <StyledLink to="/Lux-cars" >
            <MenuListElement>HOME</MenuListElement>
          </StyledLink>
          <MakerChoose onMouseEnter={() => this.makerShow()} onMouseLeave={() => this.makerHide()}>
            <StyledLink to="/Offers">
              <AnyMaker >USED CARS</AnyMaker>
            </StyledLink>
            <DropDownContent makerShow={this.state.makerShow} >
              <StyledLink to="/Offers"><SubMaker onClick={() => this.makerChange("Citroen")}>Citroen</SubMaker></StyledLink>
              <StyledLink to="/Offers"><SubMaker onClick={() => this.makerChange("Mercedes-Benz")}>Mercedes-Benz</SubMaker></StyledLink>
              <StyledLink to="/Offers"><SubMaker onClick={() => this.makerChange("BMW")}>BMW</SubMaker></StyledLink>
              <StyledLink to="/Offers"><SubMaker onClick={() => this.makerChange("Honda")}>Honda</SubMaker></StyledLink>
            </DropDownContent>
          </MakerChoose>
          <StyledLink to="/Lux-cars" >
            <MenuListElement>FINANCE</MenuListElement>
          </StyledLink>
          <StyledLink to="/Lux-cars" >
            <MenuListElement>ABOUT</MenuListElement>
          </StyledLink>
          <StyledLink to="/Lux-cars">
            <MenuListElement>CONTACT</MenuListElement>
          </StyledLink>
        </MenuList>
      </MenuContainer>
    );
  }
}
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel
  }); 
  export default connect(mapStateToProps,{chooseModel, updateMaker})(Menu);