import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import chooseSortPrice from '../../../Actions/choosePriceSortActions';

const SortContainer = styled.div`
  background-color:black;
  display:flex;
  justify-content: flex-end;
  padding-top:1.5%;
  padding-bottom:1.5%;
  padding-left:2%;
  padding-right:2%;
  font-size:0.85em;
  font-weight:600;
`;

const SortChoosDropDownContentSort = styled.div`
  display: none;
  position: absolute;
  background-color:white;
  z-index: 1;
  display: ${(props) => (props.sortShow ? 'block' : 'none')};
  min-width: 180px;
`;

const SortChoose = styled.ul`
  color:black;
  display: inline-block;
`;

const PriceSortButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction:row;
  color: white;
  text-align: center;
  text-decoration: none;
  color:black;
  min-width: 180px;
  padding:8px;
  align-items: center;
  justify-content: space-between;
  border:none;
  border-radius:4px;
`;

const Sort = styled.div`
  cursor: pointer;
  padding:4px;
  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }
`;

const PriceSortText = styled.div`
  font-weight:600;
`;

/**
 * "Sorter" component.
 */
class Sorter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'Price (High to Low)',
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
    this.setState({ sort: 'Price (High to Low)' });
    this.props.chooseSortPrice('Descending');
  }

  sortPriceAscending() {
    this.setState({ sort: 'Price (Low to High)' });
    this.props.chooseSortPrice('Ascending');
  }

  render() {
    return (
      <SortContainer>
        <SortChoose>
          <PriceSortButton onClick={this.sortShow}>
            <PriceSortText>{this.state.sort === undefined ? 'Price (High to Low)' : this.state.sort}</PriceSortText>
            <ArrowDropDownIcon />
          </PriceSortButton>
          <SortChoosDropDownContentSort sortShow={this.state.sortShow} onClick={this.sortShow}>
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
