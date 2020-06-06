import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import SpeedOutlinedIcon from '@material-ui/icons/SpeedOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import LocalGasStationOutlinedIcon from '@material-ui/icons/LocalGasStationOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import BatteryFullIcon from '@material-ui/icons/Opacity';
import CheckIcon from '@material-ui/icons/Check';
import {NavLink} from "react-router-dom";
import {chooseId}from '../Actions/chooseOfferActions';
import FavouriteSet from './FavouriteSet';

const CarsContainer = styled.div`
  background-color:black;
  color:white;
  font-weight:600;
`;

const Car = styled.div`
  display:flex;
  flex-direction:column;
  padding-bottom: 16px;
  padding-top: 16px;
  padding-left: 2%;
  padding-right: 2%;
  @media (max-width: 500px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const CarList = styled.ul`
`;

const CarHeader = styled.section`
  display:flex;
  flex-direction:row;
`;

const CarLogo = styled.img`
  display:flex;
  flex-direction:row;
  background-color:white;
  width:112px;
  height:112px;
  @media (max-width: 480px) {
    width:80px;
    height:80px;
  }
  @media (max-width: 430px) {
    width:64px;
    height:64px;
  }
  @media (max-width: 390px) {
    width:112px;
    height:112px;
  }
`;

const CarDetails = styled.section`
`;

const CarHeaderText = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  background-color:#3a3a3a;
  padding-left:16px;
  padding-right:16px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 550px) {
    padding-left:4px;
    padding-right:4px;
  }
  @media (max-width: 390px) {
    align-items: flex-start;
    flex-direction:column;
    padding-left:16px;
    padding-right:16px;
  }
`;

const CarHeaderMainText = styled.div`
  background-color:#3a3a3a;
  font-size:1.5em;
  @media (max-width: 520px) {
    font-size:1.3em;
  }
  @media (max-width: 420px) {
    font-size:1.2em;
  }
  @media (max-width: 390px) {
    font-size:1.3em;
    margin-bottom:4px;
  }
`;

const CarHeaderSubText = styled.div`
  font-size:1.2em;
  font-weight:300;
  @media (max-width: 390px) {
    margin-bottom:4px;
  }
`;

const CarHeaderTextRight = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
`;

const CarHeaderTextLeft = styled.div`
`;

const CarMain = styled.div`
  padding-top: 16px;
  display:grid;
  grid-template-columns:40% 60%;
  @media (max-width: 680px) {
    display:flex;
    flex-direction:column;
    padding-top: 0;
  }
`;

const CarPhoto = styled.img`
  width: 100%;
  margin-bottom: 8px;
`;

const CarMainDetailsLeft = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  padding-left:32px;
  padding-right:32px;
  @media (max-width: 950px) {
    padding-left:8px;
    padding-right:8px;
  }
  @media (max-width: 700px) {
    padding-left:4px;
    padding-right:4px;
  }
`;

const CarMainDetailsRight = styled.div`
  display:flex;  
  flex-direction:column;
  justify-content:space-around;
  padding-left:32px;
  padding-right:32px;
  @media (max-width: 950px) {
    padding-left:8px;
    padding-right:8px;
  }
  @media (max-width: 700px) {
    padding-left:4px;
    padding-right:4px;
  }
`;

const CarDetailOrangeContainer = styled.div`
  width:100%;
  display:grid;
  grid-template-columns:50% 50%;
  justify-items: center;
  @media (max-width: 870px) {
    margin-top:8px;
  }
  @media (max-width: 680px) {
    justify-content: space-between;
  }
  @media (max-width: 320px) {
  }
`;

const CarFeatures = styled.div`
  display:grid;
  grid-template-columns:50% 50%;
  height:80%;
  @media (max-width: 350px) {
    grid-template-columns:45% 55%;
  }
  @media (max-width: 320px) {
    grid-template-columns:42% 58%;
  }
`;

const CarDetail = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 680px) {
    margin-bottom: 4px;
  }
`;

const CarDetailText = styled.div`
`;

const CarMainDetails = styled.div`
`;

const StyledSpeedOutlinedIcon = styled(SpeedOutlinedIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;

const StyledColorLensOutlinedIcon = styled(ColorLensOutlinedIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;

const StyledLocalGasStationOutlinedIcon = styled(LocalGasStationOutlinedIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;

const StyledSettingsOutlinedIcon = styled(SettingsOutlinedIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;

const StyledBatteryFullIcon = styled(BatteryFullIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;
const StyledCheckIcon = styled(CheckIcon)`
  background-color: #ec6b0c;
  padding: 8px;
  @media (max-width: 870px) {
    padding: 4px;
  }
`;

const StyledLink = styled(NavLink).attrs()`
  width:100%;
  text-decoration:none;
  color:white;
  cursor: pointer;
`;

const CarWithButtons = styled.li`
 border-bottom:2px solid #3a3a3a;
`;

/**
 * "Cars" component shows list of cars.
 */
class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars:[],
    };
    this.chooseId = this.chooseId.bind(this);
  }

  componentDidMount() {
    this.filterCars();
  }

  componentDidUpdate(){
    this.filterCars();
  }
/**
 * Mapping through this.props.cars, then list is sorted and states are updated.
 * 
 */
  filterCars(){
    let filteredArray=[];
    this.props.cars.forEach((car)=>{
      this.filterModel(car,filteredArray);
    });
    this.sort(filteredArray);
    this.updateList(filteredArray);
  }

  updateList(filteredArray){
    let prevState = JSON.stringify([...this.state.cars]); //strinigifing list before comparision
    let newState = JSON.stringify([...filteredArray]); //strinigifing list before comparision
    if(prevState!==newState){ //comparing stringified lists, if nothing new, states aren't updated
      this.setState({ cars: filteredArray});
    }
  }

  sort(filteredArray){
    if(this.props.priceSort.priceSort==="Ascending")
    filteredArray.sort((a, b) => (a.price > b.price) ? 1 : -1)
    if(this.props.priceSort.priceSort==="Descending")
    filteredArray.sort((a, b) => (a.price < b.price) ? 1 : -1)
  }

  filterModel(car, filteredArray){
    if(this.props.maker.maker===car.brand || this.props.maker.maker==="Any Maker") {
      if(this.props.choosenModel.choosenModel===car.model || this.props.choosenModel.choosenModel==="Any Model"){
        if((this.props.choosenPower.maxPower>=car.power || this.props.choosenPower.maxPower===null)&&(this.props.choosenPower.minPower<=car.power || this.props.choosenPower.minPower===null)){
          if((this.props.choosenYear.maxYear>=car.year || this.props.choosenYear.maxYear===null) && (this.props.choosenYear.minYear<=car.year || this.props.choosenYear.minYear===null)){
            if((this.props.choosenPrice.maxPrice>=car.price || this.props.choosenPrice.maxPrice===null) && (this.props.choosenPrice.minPrice<=car.price || this.props.choosenPrice.minPrice===null)){
              filteredArray.push(car); //push new car to the list after filtering
            }
          }
        } 
      }
    }
  }
/**
 * Update choosen id of a car.
 * @param {number} e  car id
 */
  chooseId(e){
    this.props.chooseId(e); 
  }

  render() {
    return (  
      <CarsContainer>
        <CarList>
          {this.state.cars.map(car =><CarWithButtons key={car.id}>
            <StyledLink to={{ pathname: '/Offer/Vehicle-Features/'+car.id}}><Car onClick={() => this.chooseId(car.id)}>
            <CarHeader>
              <CarLogo src={car.imageLogo}></CarLogo>
              <CarHeaderText>
                <CarHeaderTextRight>
                  <CarHeaderMainText>{car.year} {car.brand} {car.model}</CarHeaderMainText>
                  <CarHeaderSubText>{car.power} KM {car.displacement} cm3</CarHeaderSubText>
                </CarHeaderTextRight>
                <CarHeaderTextLeft>
                  <CarHeaderMainText>{car.price} PLN</CarHeaderMainText>
                </CarHeaderTextLeft>
              </CarHeaderText>
            </CarHeader>
            <CarMain>
              <CarPhoto src={car.image1}></CarPhoto>
              <CarMainDetails>
                <CarFeatures>
                  <CarMainDetailsLeft>
                    <CarDetail><StyledSpeedOutlinedIcon></StyledSpeedOutlinedIcon><CarDetailText>&nbsp;{car.mileage} km</CarDetailText></CarDetail>
                    <CarDetail><StyledColorLensOutlinedIcon></StyledColorLensOutlinedIcon><CarDetailText>&nbsp;{car.color}</CarDetailText></CarDetail>
                    <CarDetail><StyledBatteryFullIcon></StyledBatteryFullIcon><CarDetailText>&nbsp;{car.fuel}</CarDetailText></CarDetail>
                    <CarDetail><StyledSettingsOutlinedIcon></StyledSettingsOutlinedIcon><CarDetailText>&nbsp;{car.gearBox}</CarDetailText></CarDetail>
                    <CarDetail><StyledLocalGasStationOutlinedIcon ></StyledLocalGasStationOutlinedIcon ><CarDetailText>&nbsp;{car.fuelConsumption}</CarDetailText></CarDetail>
                  </CarMainDetailsLeft>
                  <CarMainDetailsRight>
                    <CarDetail><StyledCheckIcon></StyledCheckIcon><CarDetailText>&nbsp;{car.feature1}</CarDetailText></CarDetail>
                    <CarDetail><StyledCheckIcon></StyledCheckIcon><CarDetailText>&nbsp;{car.feature2}</CarDetailText></CarDetail>
                    <CarDetail><StyledCheckIcon></StyledCheckIcon><CarDetailText>&nbsp;{car.feature3}</CarDetailText></CarDetail>
                    <CarDetail><StyledCheckIcon></StyledCheckIcon><CarDetailText>&nbsp;{car.feature4}</CarDetailText></CarDetail>
                    <CarDetail><StyledCheckIcon ></StyledCheckIcon ><CarDetailText>&nbsp;{car.feature5}</CarDetailText></CarDetail>
                  </CarMainDetailsRight>
                </CarFeatures>
              </CarMainDetails>
            </CarMain>
            <CarDetails></CarDetails>
            </Car>
            </StyledLink>
            <CarDetailOrangeContainer>
            <FavouriteSet carId={car.id.toString(10)}  />
          </CarDetailOrangeContainer></CarWithButtons>)}
        </CarList>
      </CarsContainer>
    );
  }
}

const mapStateToProps = state => ({
  maker: state.maker,
  choosenModel:state.choosenModel,
  power:state.power,
  choosenPower:state.choosenPower,
  years:state.years,
  choosenYear:state.choosenYear,
  price:state.price,
  choosenPrice:state.choosenPrice,
  cars:state.cars,
  priceSort:state.priceSort,
  id:state.id
  }); 

  export default connect(mapStateToProps,{chooseId})(Cars);