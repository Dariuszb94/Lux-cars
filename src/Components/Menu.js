import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';

const MenuContainer = styled.div`
  background-color:#ec6b0c;
  color:white;
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
margin-top:16px;
  background-color:white;
  z-index: 1;
  display: ${props => props.makerShow ? "block" : "none"};

`;
const MenuListElement = styled.li`
  cursor: pointer;
  padding-top:24px;
  padding-bottom:24px;
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
const AnyMakerText = styled.div`

`;
const ModelChoose = styled.li`
color:black;
cursor: pointer;
  padding-top:16px;
  padding-bottom:16px;
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
const AnyMaker = styled.div`
  cursor: pointer;
  color: white;
  text-align: center;
  text-decoration: none;
 width:100%;
  padding:8px;
  height:100%;
`;

const SubMaker = styled.div`
  cursor: pointer;
  padding:4px;
  
  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }
`;
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makerShow:false,
      };
      this.makerChange = this.makerChange.bind(this);
      this.makerShow = this.makerShow.bind(this);
  }
  componentDidMount() {
  }

  componentWillUnmount() {
  }
  makerChange(e){
     this.props.updateMaker(e);
    let updatedModel={"model":"Any Model"};
    this.props.chooseModel(updatedModel)
  }
  makerShow(){
     this.setState({ makerShow: !this.state.makerShow});
  }


  render() {
    return (  
      <MenuContainer>
        <MenuList>
          <MenuListElement>HOME</MenuListElement>
          <ModelChoose>
          <AnyMaker  onClick={() => this.makerShow()} >
            <AnyMakerText>USED CARS</AnyMakerText>
          </AnyMaker>
          <DropDownContent makerShow={this.state.makerShow} >

            <SubMaker onClick={() => this.makerChange("Citroen")}>Citroen</SubMaker>
            <SubMaker onClick={() => this.makerChange("Mercedes-Benz")}>Mercedes-Benz</SubMaker>
            <SubMaker onClick={() => this.makerChange("BMW")}>BMW</SubMaker>
            <SubMaker onClick={() => this.makerChange("Honda")}>Honda</SubMaker>
          </DropDownContent>
        </ModelChoose>
          <MenuListElement>FINANCE</MenuListElement>
          <MenuListElement>ABOUT</MenuListElement>
          <MenuListElement>CONTACT</MenuListElement>
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