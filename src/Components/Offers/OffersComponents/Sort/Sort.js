import React, { Component } from "react";
import { connect } from "react-redux";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import chooseSortPrice from "../../../../Actions/choosePriceSortActions";
import {
  SortContainer,
  SortChoosDropDownContentSort,
  SortChoose,
  PriceSortButton,
  Sort,
  PriceSortText,
} from "./SortStyle";

/**
 * "Sorter" component.
 */
class Sorter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "Price (High to Low)",
      sortShow: false,
    };
    this.sortShow = this.sortShow.bind(this);
    this.sortPriceAscending = this.sortPriceAscending.bind(this);
    this.sortPriceDescending = this.sortPriceDescending.bind(this);
  }

  /**
   * Display dropdown list.
   */
  sortShow() {
    this.setState((prevState) => ({ sortShow: !prevState.sortShow }));
  }

  sortPriceDescending() {
    this.setState({ sort: "Price (High to Low)" });
    this.props.chooseSortPrice("Descending");
  }

  sortPriceAscending() {
    this.setState({ sort: "Price (Low to High)" });
    this.props.chooseSortPrice("Ascending");
  }

  render() {
    return (
      <SortContainer>
        <SortChoose>
          <PriceSortButton onClick={this.sortShow}>
            <PriceSortText>
              {this.state.sort === undefined
                ? "Price (High to Low)"
                : this.state.sort}
            </PriceSortText>
            <ArrowDropDownIcon />
          </PriceSortButton>
          <SortChoosDropDownContentSort
            sortShow={this.state.sortShow}
            onClick={this.sortShow}
          >
            <Sort onClick={this.sortPriceDescending}>Price (High to Low)</Sort>
            <Sort onClick={this.sortPriceAscending}>Price (Low to High)</Sort>
          </SortChoosDropDownContentSort>
        </SortChoose>
      </SortContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  chosenPrice: state.chosenPrice,
});

export default connect(mapStateToProps, { chooseSortPrice })(Sorter);
