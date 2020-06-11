import React, { Component } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { connect } from "react-redux";
import chooseModel from "../../../../Actions/chooseModelActions";
import chooseMaker from "../../../../Actions/chooseMakerActions";
import CARS_MODELS from "../../../Const/carsModels";
import CARS_MAKERS from "../../../Const/carsMakers";
import {
  SearchContainer,
  SearchHeader,
  SearchButton,
  DropDownContentMaker,
  StyledLink,
  DropDownContentModel,
  MakerChoose,
  ModelChoose,
  AnyMaker,
  AnyModel,
  SubMaker,
  AnyMakerText,
} from "./SearchStyle";

/**
 * "Search" component.
 */
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makerShow: false,
      modelShow: false,
    };
    this.modelChange = this.modelChange.bind(this);
    this.makerChange = this.makerChange.bind(this);
    this.makerShow = this.makerShow.bind(this);
    this.modelShow = this.modelShow.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  modelChange(updatedModel) {
    this.props.chooseModel(updatedModel.model);
  }

  makerChange(e) {
    this.props.chooseMaker(e.maker);
    const updatedModel = { model: "Any Model" };
    this.props.chooseModel(updatedModel.model);
  }

  makerShow() {
    this.setState((prevState) => ({ makerShow: !prevState.makerShow }));
  }

  modelShow() {
    this.setState((prevState) => ({ modelShow: !prevState.modelShow }));
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <SearchContainer>
        <SearchHeader>SEARCH OUR STOCK</SearchHeader>
        <MakerChoose>
          <AnyMaker onClick={this.makerShow}>
            <AnyMakerText>{this.props.chosenMaker.maker}</AnyMakerText>
            <ArrowDropDownIcon />
          </AnyMaker>
          <DropDownContentMaker
            makerShow={this.state.makerShow}
            onClick={this.makerShow}
          >
            <SubMaker onClick={() => this.makerChange({ maker: "Any Maker" })}>
              Any Maker
            </SubMaker>
            {CARS_MAKERS.map((maker) => (
              <SubMaker key={maker} onClick={() => this.makerChange({ maker })}>
                {maker}
              </SubMaker>
            ))}
          </DropDownContentMaker>
        </MakerChoose>
        <ModelChoose>
          <AnyModel onClick={this.modelShow}>
            <AnyMakerText>{this.props.chosenModel.chosenModel}</AnyMakerText>
            <ArrowDropDownIcon />
          </AnyModel>
          <DropDownContentModel
            modelShow={this.state.modelShow}
            onClick={this.modelShow}
          >
            <SubMaker onClick={() => this.modelChange({ model: "Any Model" })}>
              Any Model
            </SubMaker>
            {CARS_MODELS[this.props.chosenMaker.maker] &&
              CARS_MODELS[this.props.chosenMaker.maker].map((model) => (
                <SubMaker
                  key={model}
                  onClick={() => this.modelChange({ model })}
                >
                  {model}
                </SubMaker>
              ))}
          </DropDownContentModel>
        </ModelChoose>
        <StyledLink to="/Offers">
          <SearchButton onClick={this.scrollToTop}>Search</SearchButton>
        </StyledLink>
      </SearchContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  chosenMaker: state.chosenMaker,
  chosenModel: state.chosenModel,
});
const mapDispatchToProps = {
  chooseModel,
  chooseMaker,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
