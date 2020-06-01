import React, {Component} from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {connect} from 'react-redux';
import {chooseModel}from '../Actions/chooseModelActions';
import {updateMaker}from '../Actions/makerActions';
import {NavLink} from "react-router-dom";
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import {
    Route,
    Switch
  } from "react-router-dom";
  import ArrowDropDownOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
  import { CSSTransition } from "react-transition-group";
  import SpeedIcon from '@material-ui/icons/Speed';
  import HeightIcon from '@material-ui/icons/Height';
import { CardHeader } from '@material-ui/core';
import {chooseId}from '../Actions/chooseOfferActions';
const Container = styled.div`
margin-top:32px;
`;
const Header = styled.h1`
border-bottom:2px solid #ec6b0c;
margin-bottom:16px;
font-size:1.4rem;
`;
const Offer = styled.div`

`;
const Offers = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   grid-gap: 1.5rem;
   justify-content:center;
   @media (max-width: 1200px) {
    grid-gap: 0.5rem;
  }
   @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
const OfferPhoto = styled.img`
  height:auto;
  max-width:100%;
`;
const OfferName = styled.div`
font-size:1rem;
margin-top:4px;
margin-bottom:4px;
`;
const OfferPrice = styled.div`
font-size:1rem;
font-weight: 500;
    color: #e46b0c;


`;
const StyledLink = styled(NavLink).attrs()`
  width:100%;
    text-decoration:none;
    color:white;
`;
class SimilarVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars:[],
      };

      this.chooseId = this.chooseId.bind(this);
  }
  componentDidMount() {

    this.setState({ cars: this.props.cars});
    this.filterCars();
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {

  }
  filterCars(){
  let filteredArray=[];
  this.props.cars.forEach((car)=>{
    this.filterModel(car,filteredArray);
  });
  this.updateList(filteredArray);
  }
  updateList(filteredArray){
    let prevState = JSON.stringify([...this.state.cars]);
    let newState = JSON.stringify([...filteredArray]);
    if(prevState===newState){
    }
    if(prevState!==newState){
      this.setState({ cars: filteredArray});
    }
  }

  filterModel(car, filteredArray){
      if(this.props.cars[this.props.id.choosenId].brand===car.brand || ((this.props.cars[this.props.id.choosenId].price-40000)<=car.price) || ((this.props.cars[this.props.id.choosenId].price+40000)>=car.price)) {

                  if(filteredArray.length<4)
                filteredArray.push(car);
              }
            }

   
            chooseId(e){
              window.scrollTo(0, 0);
              this.props.chooseId(e);
            }
  render() {
    return (  
      <Container> 
          <Header>Similar Used Cars</Header>
         <Offers> 
          {this.state.cars.map(car =>   <StyledLink to="/Offer/Vehicle-Features" key={car.id} ><Offer onClick={() => this.chooseId(car.id)}>
            <OfferPhoto src={car.image1}></OfferPhoto>
            <OfferName>{car.brand} {car.model}</OfferName>
            <OfferPrice>{car.price} PLN</OfferPrice>
          </Offer></StyledLink>)}
          </Offers>
        </Container>
    );
  }
}    
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel,
  cars:state.cars,
  id:state.id
  }); 
  export default connect(mapStateToProps,{chooseModel, updateMaker,chooseId})(SimilarVehicles);