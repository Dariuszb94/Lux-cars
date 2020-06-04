import React, {Component} from 'react';
import styled from 'styled-components';
import LogoSrc from '../Assets/Images/Logo.png';
import TopRatedSrc from '../Assets/Images/Top-rated.png';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import {NavLink} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';
import {connect} from 'react-redux';
const HeaderContainer = styled.div`
  background: #020202;
  display:flex;
  flex-direction:row;
  padding-left:12px;
  padding-right:12px;
  padding-top:16px;
  padding-bottom:16px;
  justify-content:space-between;
  align-items: center;
  @media (max-width: 750px) {
background-color:#ec6b0c; 
padding-top:0px;
  padding-bottom:0px;
  padding-left:16px;
  padding-right:16px;
  }
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
  -webkit-box-shadow: 10px 10px 47px -26px rgba(0,0,0,0.47);
-moz-box-shadow: 10px 10px 47px -26px rgba(0,0,0,0.47);
box-shadow: 10px 10px 47px -26px rgba(0,0,0,0.47);

`;
const TopRated = styled.img`
  width: 400px;
  height: 31px;
  @media (max-width: 750px) {
display:none; 

  }

`;
const activeClassName = 'nav-item-active'
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  width:100%;
    text-decoration:none;
    color:black;
    &:hover {
    color: #ec6b0c;
  }
  
`;
const Contact= styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  @media (max-width: 750px) {
    display:none;
    
  }
`;
const CallLowerUpperContainer= styled.div`
  padding-right:16px;
  border-right:1px solid white;
  display:flex;
  flex-direction:column;
`;
const CallUpper= styled.div`
  color:white;
  text-align:right;
`;
const CallLower= styled.div`
  display:flex;
  flex-direction:row;
  font-size: 32px !important;
  align-items:center;
`;
const Facebook = styled(FacebookIcon)`
  color: #ec6b0c;
  cursor: pointer;
  font-size: 32px !important;
  padding-left:16px;
  &:hover {
    color: white;
    
  }
`;

const CallNumber = styled.div`
  color: white;
`;
const Makers = styled.ul`
display: ${props => props.makerShow ? "grid" : "none"};
grid-template-columns:50% 50%;
padding:16px;
`;
const Maker = styled.li`
padding-top:8px;
padding-bottom:8px;
list-style: none;
cursor: pointer;
&:hover {
    color: #ec6b0c;
  }
`;
const LogoLink = styled.div`

@media (max-width: 750px) {

}
`;
const MenuDropDown = styled.ul`
position:absolute;
z-index:1;
display: ${props => props.showMenu ? "block" : "none"};
list-style:none;
width:100%;
background-color:white;
margin-left: -16px;

margin-top:34px;

`;
const MenuDropDownElement = styled.li`
color:black;
padding-top:16px;
padding-bottom:16px;
margin-left: 16px;
margin-right: 16px;
font-weight:600;
border-bottom: 2px solid rgba(0,0,0,.1);
&:hover {
    color: #ec6b0c;
  }
`;
const MenuDropDownElementUsedCars = styled.li`
color:black;
padding-top:16px;
padding-bottom:16px;
margin-left: 16px;
margin-right: 16px;
font-weight:600;
border-bottom: 2px solid rgba(0,0,0,.1);
display:flex;
align-content:center;
cursor: pointer;
&:hover {
    color: #ec6b0c;
  }
`;

const StyledCallIcon = styled(CallIcon)`
  color: #ec6b0c;
  font-size: 32px !important;
`;
const StyledMenuIcon = styled(MenuIcon)`
  color: white;
  font-size: 32px !important;
cursor:pointer;

`;
const StyledMenuIconContainer = styled.div`

  display:none !important;
  @media (max-width: 750px) {
display:initial !important; 

  }

`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu:false,
      makerShow:false,
      };
          this.showMenu = this.showMenu.bind(this);
      this.makerShow = this.makerShow.bind(this);
      this.makerChange = this.makerChange.bind(this);
    }
    showMenu(){
      this.setState({ showMenu: !this.state.showMenu});
    }
    makerShow(){
      this.setState({ makerShow: !this.state.makerShow});
    }
    makerChange(e){
      this.showMenu()
       this.props.updateMaker(e);
      let updatedModel={model:"Any Model"};
      this.props.chooseModel(updatedModel.model)
    }
  render() {
    return (  
      <HeaderContainer>
        <StyledMenuIconContainer>
          <StyledMenuIcon onClick={()=>this.showMenu()}></StyledMenuIcon>
          <MenuDropDown showMenu={this.state.showMenu}>
          <StyledLink to="/Lux-cars" > <MenuDropDownElement  onClick={()=>this.showMenu()}>HOME</MenuDropDownElement></StyledLink>
          <MenuDropDownElementUsedCars ><StyledLink to="/Offers" onClick={()=>this.showMenu()} >USED CARS</StyledLink><ArrowDropDownIcon onClick={()=>this.makerShow()}/></MenuDropDownElementUsedCars>
          <Makers makerShow={this.state.makerShow}>
          <StyledLink to="/Offers"><Maker onClick={() => this.makerChange("Citroen")}>Citroen</Maker></StyledLink>
          <StyledLink to="/Offers"><Maker onClick={() => this.makerChange("Mercedes-Benz")}>Mercedes-Benz</Maker></StyledLink>
          <StyledLink to="/Offers"><Maker onClick={() => this.makerChange("BMW")}>BMW</Maker></StyledLink>
          <StyledLink to="/Offers"><Maker onClick={() => this.makerChange("Audi")}>Audi</Maker></StyledLink>
          </Makers>
          <StyledLink to="/Finance" ><MenuDropDownElement onClick={()=>this.showMenu()}>FINANCE</MenuDropDownElement></StyledLink>
          <StyledLink to="/About" > <MenuDropDownElement onClick={()=>this.showMenu()}>ABOUT</MenuDropDownElement></StyledLink>
          <StyledLink to="/Contact" ><MenuDropDownElement onClick={()=>this.showMenu()}>CONTACT</MenuDropDownElement></StyledLink>

          </MenuDropDown>

        </StyledMenuIconContainer>
         <LogoLink><StyledLink to="/Lux-cars" ><Logo src={LogoSrc}></Logo></StyledLink></LogoLink>
         <TopRated src={TopRatedSrc}></TopRated>
         <Contact>
                <CallLowerUpperContainer>
                    <CallUpper>Sales Hotline</CallUpper>
                    <CallLower>
                        <StyledCallIcon/>
                        <CallNumber>111 222 333</CallNumber>
                    </CallLower>
                </CallLowerUpperContainer>
                <Facebook/>
         </Contact>
      </HeaderContainer>
    );
  }
}
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel
  }); 
  export default connect(mapStateToProps,{chooseModel, updateMaker})(Header);