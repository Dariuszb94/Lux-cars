import React, { Component } from "react";
import { connect } from "react-redux";
import chooseModel from "../../Actions/chooseModelActions";
import chooseMaker from "../../Actions/chooseMakerActions";
import CARS_MAKERS from "../Const/carsMakers";
import {
  MenuContainer,
  MenuList,
  DropDownContent,
  MenuListElement,
  MakerChoose,
  SubMaker,
  StyledLink,
  AnyMaker,
} from "./MenuStyle";

/**
 * "Menu" component.
 */
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makerShow: false,
    };
    this.makerChange = this.makerChange.bind(this);
    this.makerShow = this.makerShow.bind(this);
    this.makerHide = this.makerHide.bind(this);
  }

  /**
   * Choosing maker to show (e.g. "Mercedes-Benz")
   * @param {string} e.maker
   */
  makerChange(e) {
    this.props.chooseMaker(e.maker);
    const updatedModel = { model: "Any Model" };
    this.props.chooseModel(updatedModel.model);
    this.setState((prevState) => ({ makerShow: !prevState.makerShow }));
  }

  makerShow() {
    this.setState({ makerShow: true });
  }

  makerHide() {
    this.setState({ makerShow: false });
  }

  render() {
    return (
      <MenuContainer>
        <MenuList>
          <StyledLink to="/Lux-cars">
            <MenuListElement>HOME</MenuListElement>
          </StyledLink>
          <MakerChoose
            onMouseEnter={() => this.makerShow()}
            onMouseLeave={() => this.makerHide()}
          >
            <StyledLink to="/Offers">
              <AnyMaker
                onClick={() => this.makerChange({ maker: "Any Maker" })}
              >
                USED CARS
              </AnyMaker>
            </StyledLink>
            <DropDownContent makerShow={this.state.makerShow}>
              {CARS_MAKERS.map((maker) => (
                <StyledLink to="/Offers" key={maker}>
                  <SubMaker onClick={() => this.makerChange({ maker })}>
                    {maker}
                  </SubMaker>
                </StyledLink>
              ))}
            </DropDownContent>
          </MakerChoose>
          <StyledLink to="/Finance">
            <MenuListElement>FINANCE</MenuListElement>
          </StyledLink>
          <StyledLink to="/About">
            <MenuListElement>ABOUT</MenuListElement>
          </StyledLink>
          <StyledLink to="/Contact">
            <MenuListElement>CONTACT</MenuListElement>
          </StyledLink>
        </MenuList>
      </MenuContainer>
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
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
