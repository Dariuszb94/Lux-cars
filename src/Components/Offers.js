import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';
import MainSearch from './MainSearch';
import Cars from './Cars';
import SubNavi from './SubNavi';
import Sort from './Sort';

const OffersContainer = styled.div`
`;

class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {

      };

  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }
  render() {
    return (  
      <OffersContainer>
        <SubNavi/>
        <MainSearch/>
        <Sort/>
        <Cars/>
      </OffersContainer>
    );
  }
}    
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel
  }); 
  export default connect(mapStateToProps,{chooseModel, updateMaker})(Offers);