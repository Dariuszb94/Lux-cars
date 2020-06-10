import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {chooseMaker}from '../Actions/chooseMakerActions';
import {NavLink} from "react-router-dom";
import {CARS_MAKERS} from '../Components/Const/carsMakers';

const MenuContainer = styled.div`
  background-color:#ec6b0c;
  color:white;
  font-weight:600;
  @media (max-width: 750px) {
    display:none;
  }
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
  font-size:1.2rem;
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
  display: inline-block;
  &:hover {
    background-color: rgba(0, 0, 0, .1);
    backdrop-filter: grayscale(0.1) opacity(0.9);
    -webkit-backdrop-filter: grayscale(0.1) opacity(0.9);
  }  
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

const StyledLink = styled(NavLink).attrs()`
  width:100%;
  text-decoration:none;
  color:white;
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
  font-size:1.2rem;
`;

/**
 * "Menu" component.
 */
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
/**
 * Choosing maker to show (e.g. "Mercedes-Benz")
 * @param {string} e.maker 
 */
  makerChange(e){
    this.props.chooseMaker(e.maker);
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
              <AnyMaker onClick={() => this.makerChange({maker:"Any Maker"})}>USED CARS</AnyMaker>
            </StyledLink>
            <DropDownContent makerShow={this.state.makerShow} >
              {(CARS_MAKERS===undefined) ?   null : (CARS_MAKERS.map(maker =>   <StyledLink to="/Offers" key={maker} ><SubMaker onClick={() => this.makerChange({maker})}>{maker}</SubMaker></StyledLink> )) }
            </DropDownContent>
          </MakerChoose>
          <StyledLink to="/Finance" >
            <MenuListElement>FINANCE</MenuListElement>
          </StyledLink>
          <StyledLink to="/About" >
            <MenuListElement>ABOUT</MenuListElement>
          </StyledLink>
          <StyledLink to="/Contact">
            <MenuListElement>CONTACT</MenuListElement>
          </StyledLink>
        </MenuList>
      </MenuContainer>
    );
  }
}
const mapStateToProps = state => ({
  maker: state.maker,
  });
const mapDispatchToProps = {
  chooseModel,
  chooseMaker,
}; 
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);