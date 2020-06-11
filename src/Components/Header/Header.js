import React, { Component } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { connect } from "react-redux";
import chooseMaker from "../../Actions/chooseMakerActions";
import TopRatedSrc from "../../Assets/Images/Top-rated.png";
import chooseModel from "../../Actions/chooseModelActions";
import LogoSrc from "../../Assets/Images/Logo.png";
import CARS_MAKERS from "../Const/carsMakers";
import {
  HeaderContainer,
  Logo,
  TopRated,
  StyledLink,
  Contact,
  CallLowerUpperContainer,
  CallUpper,
  CallLower,
  Facebook,
  CallNumber,
  Makers,
  Maker,
  LogoLink,
  MenuDropDown,
  MenuDropDownElement,
  MenuDropDownElementUsedCars,
  StyledCallIcon,
  StyledMenuIcon,
  StyledMenuIconContainer,
} from "./HeaderStyle";

/**
 * "Header"component.
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      makerShow: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.makerShow = this.makerShow.bind(this);
    this.makerChange = this.makerChange.bind(this);
  }

  /**
   * Displays dropdown menu
   */
  showMenu() {
    this.setState((prevState) => ({ showMenu: !prevState.showMenu }));
  }

  /**
   * Displays dropdown menu
   */
  makerShow() {
    this.setState((prevState) => ({ makerShow: !prevState.makerShow }));
  }

  /**
   * Updates chosen maker, also resets models filter.
   * @param {string} e.maker
   */
  makerChange(e) {
    this.showMenu();
    this.props.chooseMaker(e.maker);
    const updatedModel = { model: "Any Model" };
    this.props.chooseModel(updatedModel.model);
  }

  render() {
    return (
      <HeaderContainer>
        <StyledMenuIconContainer>
          <StyledMenuIcon onClick={this.showMenu} />
          <MenuDropDown showMenu={this.state.showMenu}>
            <StyledLink to="/Lux-cars">
              <MenuDropDownElement onClick={this.showMenu}>
                HOME
              </MenuDropDownElement>
            </StyledLink>
            <MenuDropDownElementUsedCars>
              <StyledLink to="/Offers" onClick={this.showMenu}>
                USED CARS
              </StyledLink>
              <ArrowDropDownIcon onClick={this.makerShow} />
            </MenuDropDownElementUsedCars>
            <Makers makerShow={this.state.makerShow}>
              {CARS_MAKERS.map((maker) => (
                <StyledLink
                  to="/Offers"
                  key={maker}
                  onClick={() => this.makerChange({ maker })}
                >
                  <Maker>{maker}</Maker>
                </StyledLink>
              ))}
            </Makers>
            <StyledLink to="/Finance">
              <MenuDropDownElement onClick={this.showMenu}>
                FINANCE
              </MenuDropDownElement>
            </StyledLink>
            <StyledLink to="/About">
              {" "}
              <MenuDropDownElement onClick={this.showMenu}>
                ABOUT
              </MenuDropDownElement>
            </StyledLink>
            <StyledLink to="/Contact">
              <MenuDropDownElement onClick={this.showMenu}>
                CONTACT
              </MenuDropDownElement>
            </StyledLink>
          </MenuDropDown>
        </StyledMenuIconContainer>
        <LogoLink>
          <StyledLink to="/Lux-cars">
            <Logo src={LogoSrc} />
          </StyledLink>
        </LogoLink>
        <TopRated src={TopRatedSrc} />
        <Contact>
          <CallLowerUpperContainer>
            <CallUpper>Sales Hotline</CallUpper>
            <CallLower>
              <StyledCallIcon />
              <CallNumber>111 222 333</CallNumber>
            </CallLower>
          </CallLowerUpperContainer>
          <Facebook />
        </Contact>
      </HeaderContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  maker: state.maker,
});
const mapDispatchToProps = {
  chooseModel,
  chooseMaker,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
