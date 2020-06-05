import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import SpeedOutlinedIcon from '@material-ui/icons/SpeedOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import BatteryFullIcon from '@material-ui/icons/Opacity';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import VehicleInfo from './VehicleInfo';
import SimilarVehicles from './SimilarVehicles';
import ContactForm from './ContactForm';
import FavouriteSet from './FavouriteSet';
import { HashLink as Link } from 'react-router-hash-link';
import {choosenSection}from '../Actions/carOfferNaviActions';
import {Magnifier,GlassMagnifier} from "react-image-magnifiers";
import SubNavi from './SubNavi';

const CarsContainer = styled.div`
  background-color:black;
  color:white;
  font-weight:600;
  padding-left:2%;
  padding-right:2%;
  @media (max-width:620px){
    padding-left:1%;
    padding-right:1%;
  }
`;

const Car = styled.section`
  display:flex;
  flex-direction:column;
  padding-bottom: 16px;
  padding-top: 16px;
`;

const CarList = styled.article`
`;

const CarHeader = styled.div`
  display:flex;
  flex-direction:row;
`;

const CarLogo = styled.img`
  display:flex;
  flex-direction:row;
  background-color:white;
  width:112px;
  @media (max-width:640px){
    width:80px;
    height:80px;
  }
  @media (max-width:600px){
    width:64px;
    height:64px;
  }
  @media (max-width:480px){
    width:48px;
    height:48px;
  }
  @media (max-width:450px){
    width:96px;
    height:96px;
  }
  @media (max-width:350px){
    width:80px;
    height:80px;
  }
`;

const CarDetails = styled.section`
`;

const CarHeaderText = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  background-color:black;
  padding-left:16px;
  padding-right:16px;
  align-items: center;
  justify-content: space-between;
  @media (max-width:530px){
    padding-left: 8px;
    padding-right: 8px;
  }
  @media (max-width:500px){
    padding-left: 4px;
    padding-right: 4px;
  }
  @media (max-width: 450px) {
    flex-direction:column;
    align-items: flex-start;
  }
  @media (max-width:450px){
    padding-left:16px;
    padding-right:16px;
  }
  @media (max-width:380px){
    padding-left:4px;
    padding-right:4px;
  }
`;

const CarHeaderMainText = styled.div`
  font-size:1.5rem;
  @media (max-width:590px){
    font-size:1.3rem;
  }
  @media (max-width:350px){
    font-size:1.1rem;
  }
`;

const CarHeaderSubText = styled.div`
  font-size:1.2rem;
  font-weight:300;
  @media (max-width:590px){
    font-size:1rem;
  }
`;

const CarHeaderMainTextRight = styled.div`
  font-size:2.3rem;
  text-align:right;
  font-weight:800;
  @media (max-width:590px){
    font-size:2.1rem;
  }
  @media (max-width:530px){
    font-size:1.8rem;
  }
  @media (max-width:500px){
    font-size:1.6rem;
  }
  @media (max-width:470px){
    font-size:1.5rem;
  }
  @media (max-width: 450px) {
    text-align:left;
  }
`;

const CarHeaderTextRight = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
`;

const CarHeaderTextLeft = styled.div`
`;

const ContactHeader = styled.h1`
  border-bottom:2px solid #ec6b0c;
  margin-bottom:16px;
  font-size:1.4rem;
`;

const CarMain = styled.div`
  padding-top: 16px;
  display:grid;
  grid-template-columns:60% 40%;
  @media (max-width: 1000px) {
    grid-template-columns:70% 30%;
  }
  @media (max-width:900px) {
    grid-template-columns:72% 28%;
  }
  @media (max-width:710px) {
    display:flex;
    flex-direction:column;
  }
`;

const CarPhotoNaviRight = styled.div`
  background-color:black;
  width: 8%;
  display:flex;
  flex-direction:row;
  align-items: center;
  &:hover {
    color: ${props => props.swipeRightPossible ? "#ec6b0c" : "white"};
  } 
  @media(max-width:700px){
    width: 15%;
  }
  @media(max-width:450px){
    width: 100%;
  }
`;

const CarPhotoNaviLeft = styled.div`
  background-color:black;
  width: 8%;
  display:flex;
  flex-direction:row;
  align-items: center;
  &:hover {
    color: ${props => props.swipeLeftPossible ? "#ec6b0c" : "white"};
  } 
  @media(max-width:700px){
    width: 15%;
  }
  @media(max-width:450px){
    width: 100%;
  }
`;

const CarPhotoContainer = styled.div`
  display:flex;
  flex-direction:column;
`;

const CarPhotoChoose = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top: 16px;
`;

const CarPhotoChooseSmall= styled.img`
  width:28%;
  height:100%;
  -webkit-transition:0.5s linear;
  -moz-transition:0.5s linear;
  transition:0.5s linear;
  position: relative;
  cursor: pointer;
  &:hover {
    transform:scale(1.1);
    z-index:1;
  } 
`;

const CarDetail = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #3a3a3a;
  margin-bottom:16px;
  padding-top:8px;
  padding-bottom:8px;
  padding-left:16px;
  padding-right:16px;
  width:80%;
  -webkit-transition:0.3s linear;
  -moz-transition:0.3s linear;
  transition:0.3s linear;
  &:hover {
    background-color: #ec6b0c;  
  } 
  @media (max-width:900px) {
    padding-left:8px;
    padding-right:8px;
    width:88%;
  }
  @media (max-width:710px) {
    padding-left:16px;
    padding-right:16px;
  }
`;

const CarDetailText = styled.div`
  color:white;
`;

const CarDetailOrangeContainer = styled.div`
  width:100%;
  display:flex;
  margin-top:32px;
  flex-direction:column;
  align-items:center;
`;

const CarMainDetails = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media (max-width:710px) {
    margin-top:16px;
  }
`;

const StyledSpeedOutlinedIcon = styled(SpeedOutlinedIcon)`
  font-size:1.5em !important;
  padding: 8px;
  color:#3a3a3a;
  background-color:white;
  border-radius:50%;
`;

const StyledColorLensOutlinedIcon = styled(ColorLensOutlinedIcon)`
  font-size:1.5em !important;
  padding: 8px;
  color:#3a3a3a;
  background-color:white;
  border-radius:50%;
`;




const StyledBatteryFullIcon = styled(BatteryFullIcon)`
  font-size:1.5em !important;
  padding: 8px;
  color:#3a3a3a;
  background-color:white;
  border-radius:50%;
`;

const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
  font-size:5rem !important;
  width:100% !important;
  cursor: pointer;
  -webkit-transition:0.3s linear !important;
  -moz-transition:0.3s linear !important;
  transition:0.3s linear !important;
`;

const CarHeaderSubTextRight = styled(Link).attrs()`
  font-size:1.2rem;
  font-weight:300;
  color:#e46b0c;
  -webkit-transition:0.3s linear;
  -moz-transition:0.3s linear;
  transition:0.3s linear;
  text-decoration:none;
  &:hover{
    color:white;
    }
  @media (max-width:590px){
    font-size:1rem;
  }
  @media (max-width:470px){
    font-size:0.9rem;
  }
`;

const CarDetailLink = styled(Link).attrs()`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #3a3a3a;
  margin-bottom:16px;
  padding-top:8px;
  padding-bottom:8px;
  padding-left:16px;
  padding-right:16px;
  width:80%;
  -webkit-transition:0.3s linear;
  -moz-transition:0.3s linear;
  transition:0.3s linear;
  text-decoration:none;
  &:hover {
    background-color: #ec6b0c;
  } 
  @media (max-width:900px) {
    padding-left:8px;
    padding-right:8px;
    width:88%;
  }
  @media (max-width:710px) {
    padding-left:16px;
    padding-right:16px;
  }
`;

const StyledArrowRightIcon= styled(ArrowRightIcon)`
  font-size:5rem !important;
  width:100% !important;
  cursor: pointer;
  -webkit-transition:0.3s linear !important;
  -moz-transition:0.3s linear !important;
  transition:0.3s linear !important;
`;

const VehicleInfoSection = styled.section`
`;

const SimilarVehiclesSection = styled.section`
  padding-bottom:16px;
`;

const ContactFormSection = styled.section`
  margin-top:32px;
`;

const ContactFormContainer = styled.div`
  padding-bottom:8px;
  padding-right:16%;
  padding-left:16%;
  @media (max-width:550px){
    padding-right:8%;
    padding-left:8%;
  }
  @media (max-width:450px){
    padding-right:4%;
    padding-left:4%;
  }
`;

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magnifierSize: "30%",
      magnifierOffsetY:50,
      magnifierOffsetX:50,
      cars:[],
      listOfImages:[],
      smallImageSelect1:1,
      smallImageSelect2:2,
      smallImageSelect3:3,
      mainImage:this.props.cars[this.props.location.pathname.replace(/\D/g, "")].imageDetail3,
      imageHighLight1:false,
      imageHighLight2:true,
      imageHighLight3:false,
      swipeRightPossible:true,
      swipeLeftPossible:true,
    };
    this.swipeLeft = this.swipeLeft.bind(this);
    this.swipeRight = this.swipeRight.bind(this);
    this.displayPhoto = this.displayPhoto.bind(this);
    this.changeSection = this.changeSection.bind(this);
    this.print = this.print.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.scrollTo(0, 0);
    this.filterCars();
    this.createListOfImages();
    this.handleResize();
  }

  componentDidUpdate(){
    this.filterCars();
    this.createListOfImages();
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if(window.innerWidth<600){
      this.setState({ magnifierSize: "40%"});
      this.setState({ magnifierOffsetY: 60});
      this.setState({ magnifierOffsetY: 60});
    }
    if(window.innerWidth<500){
      this.setState({ magnifierSize: "45%"});
      this.setState({ magnifierOffsetY: 70});
      this.setState({ magnifierOffsetY: 70});
    }
    if(window.innerWidth<400){
      this.setState({ magnifierSize: "50%"});
      this.setState({ magnifierOffsetY: 80});
      this.setState({ magnifierOffsetY: 80});
    }
  }

  filterCars(){
    let filteredArray=[];
    this.props.cars.forEach((car)=>{
      this.filterModel(car,filteredArray);
    });
    this.sort(filteredArray);
    this.updateList(filteredArray);
  }

  swipeRight(){
    this.setState({ swipeLeftPossible: true});
    if (this.state.smallImageSelect3 <this.state.listOfImages.length-1){
      this.setState({ smallImageSelect1: this.state.smallImageSelect1 + 1 });
      this.setState({ smallImageSelect2: this.state.smallImageSelect2 + 1 });
      this.setState({ smallImageSelect3: this.state.smallImageSelect3 + 1 });
      if(this.state.imageHighLight1){
        this.setState({ imageHighLight1: false });
        this.setState({ imageHighLight2: false});
        this.setState({ imageHighLight3: false });
      }
      if(this.state.imageHighLight2){
        this.setState({ imageHighLight1: true });
        this.setState({ imageHighLight2: false});
        this.setState({ imageHighLight3: false});
      }
      if(this.state.imageHighLight3){
        this.setState({ imageHighLight1: false });
        this.setState({ imageHighLight2: true });
        this.setState({ imageHighLight3: false });
      }
    }
    if (this.state.smallImageSelect3 >= this.state.listOfImages.length-2)
      this.setState({ swipeRightPossible: false});
    else{
    this.setState({ swipeRightPossible: true});
    }
  }

  swipeLeft(){
    this.setState({ swipeRightPossible: true});
    if (this.state.smallImageSelect1 ===1)
      this.setState({ swipeLeftPossible: false});
    else
      this.setState({ swipeLeftPossible: true});
    if (this.state.smallImageSelect1 >0){
      this.setState({ smallImageSelect1: this.state.smallImageSelect1 - 1 });
      this.setState({ smallImageSelect2: this.state.smallImageSelect2 - 1 });
      this.setState({ smallImageSelect3: this.state.smallImageSelect3 - 1 });
      if(this.state.imageHighLight1){
        this.setState({ imageHighLight1: false });
        this.setState({ imageHighLight2: true });
        this.setState({ imageHighLight3: false });
      }
      if(this.state.imageHighLight2){
        this.setState({ imageHighLight1: false });
        this.setState({ imageHighLight2: false });
        this.setState({ imageHighLight3: true });
      }
      if(this.state.imageHighLight3){
        this.setState({ imageHighLight1: false });
        this.setState({ imageHighLight2: false });
        this.setState({ imageHighLight3: false });
      }
    }
    else{
      this.setState({ swipeLeftPossible: false});
    }
  }

  createListOfImages(){
    let listOfImages=[];
    listOfImages.push(this.props.cars[this.props.location.pathname.replace(/\D/g, "")].imageDetail1);
    listOfImages.push(this.props.cars[this.props.location.pathname.replace(/\D/g, "")].imageDetail2);
    listOfImages.push(this.props.cars[this.props.location.pathname.replace(/\D/g, "")].imageDetail3);
    listOfImages.push(this.props.cars[this.props.location.pathname.replace(/\D/g, "")].imageDetail4);
    listOfImages.push(this.props.cars[this.props.location.pathname.replace(/\D/g, "")].imageDetail5);
    let prevState = JSON.stringify([...this.state.listOfImages]);
    let newState = JSON.stringify([...listOfImages]);
    if(prevState!==newState){
      this.setState({ listOfImages: listOfImages});
      this.displayPhoto("changeCar")
    }
  }

  displayPhoto(event, numberOfPhoto){
    if (event!==undefined)
      this.setState({ mainImage: event });
    if(event==="changeCar")
      this.setState({ mainImage:this.props.cars[this.props.location.pathname.replace(/\D/g, "")].imageDetail3 });
    if (numberOfPhoto===1){
      this.setState({ imageHighLight1: true });
      this.setState({ imageHighLight2: false });
      this.setState({ imageHighLight3: false });
    }
    if (numberOfPhoto===2){
      this.setState({ imageHighLight1: false });
      this.setState({ imageHighLight2: true });
      this.setState({ imageHighLight3: false });
    }
    if (numberOfPhoto===3){
      this.setState({ imageHighLight1: false });
      this.setState({ imageHighLight2: false });
      this.setState({ imageHighLight3: true });
    }
  }

  updateList(filteredArray){
    let prevState = JSON.stringify([...this.state.cars]);
    let newState = JSON.stringify([...filteredArray]);
    if(prevState!==newState){
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
              filteredArray.push(car);
            }
          }
        } 
      }
    }
  }

  changeSection(section){
    this.props.choosenSection(section);
    this.refs.vehicleInfo.scrollIntoView();
  }

  print(){
    window.print();
  }

  render() {
    return (  
      <CarsContainer>
        <SubNavi/>
        <CarList> 
          <Car key={this.props.cars[this.props.location.pathname.replace(/\D/g, "")].id}>
            <CarHeader>
              <CarLogo src={this.props.cars[this.props.location.pathname.replace(/\D/g, "")].imageLogo}></CarLogo>
              <CarHeaderText>
                <CarHeaderTextRight>
                  <CarHeaderMainText>{this.props.cars[this.props.location.pathname.replace(/\D/g, "")].year} {this.props.cars[this.props.location.pathname.replace(/\D/g, "")].brand} {this.props.cars[this.props.location.pathname.replace(/\D/g, "")].model}</CarHeaderMainText>
                  <CarHeaderSubText>{this.props.cars[this.props.location.pathname.replace(/\D/g, "")].power} KM {this.props.cars[this.props.location.pathname.replace(/\D/g, "")].displacement} cm3</CarHeaderSubText>
                </CarHeaderTextRight>
                <CarHeaderTextLeft>
                  <CarHeaderMainTextRight>{this.props.cars[this.props.location.pathname.replace(/\D/g, "")].price} PLN</CarHeaderMainTextRight>
                  <CarHeaderSubTextRight  to={{ pathname: '/Offer/Vehicle-Finances/'+this.props.cars[this.props.location.pathname.replace(/\D/g, "")].id}}  onClick={()=> { this.changeSection("Finance")}}>Finance from {(this.props.cars[this.props.location.pathname.replace(/\D/g, "")].price*1.05/72).toFixed(0)} PLN</CarHeaderSubTextRight>
                </CarHeaderTextLeft>
              </CarHeaderText>
            </CarHeader>
            <CarMain>
              <CarPhotoContainer>
                <GlassMagnifier
                  imageSrc={this.state.mainImage}
                  imageAlt={this.props.cars[this.props.location.pathname.replace(/\D/g, "")].model}
                  magnifierOffsetX={this.state.magnifierOffsetX}
                  magnifierOffsetY={this.state.magnifierOffsetY}
                  magnifierSize={this.state.magnifierSize}
                />
                <Magnifier
                  largeImageSrc={this.state.mainImage} 
                />
                <CarPhotoChoose>
                  <CarPhotoNaviLeft swipeLeftPossible={this.state.swipeLeftPossible}><StyledArrowLeftIcon onClick={() => this.swipeLeft()}  ></StyledArrowLeftIcon></CarPhotoNaviLeft>
                  <CarPhotoChooseSmall src={this.state.listOfImages[this.state.smallImageSelect1]} onClick={() => this.displayPhoto(this.state.listOfImages[this.state.smallImageSelect1],1)}></CarPhotoChooseSmall>
                  <CarPhotoChooseSmall src={this.state.listOfImages[this.state.smallImageSelect2]} onClick={() => this.displayPhoto(this.state.listOfImages[this.state.smallImageSelect2],2)}></CarPhotoChooseSmall>
                  <CarPhotoChooseSmall src={this.state.listOfImages[this.state.smallImageSelect3]} onClick={() => this.displayPhoto(this.state.listOfImages[this.state.smallImageSelect3],3)}></CarPhotoChooseSmall>
                  <CarPhotoNaviRight swipeRightPossible={this.state.swipeRightPossible}><StyledArrowRightIcon onClick={() => this.swipeRight()} ></StyledArrowRightIcon></CarPhotoNaviRight>
                </CarPhotoChoose>
              </CarPhotoContainer>
              <CarMainDetails>
                  <CarDetailLink to="#contact">
                    <StyledSpeedOutlinedIcon></StyledSpeedOutlinedIcon>
                    <CarDetailText>&nbsp;&nbsp;Send An Enquiry</CarDetailText>
                  </CarDetailLink>
                  <CarDetail onClick={()=>this.print()}>
                    <StyledColorLensOutlinedIcon></StyledColorLensOutlinedIcon>
                    <CarDetailText>&nbsp;&nbsp;Print This Page</CarDetailText>
                  </CarDetail>
                  <CarDetailLink to="#similarVehicles">
                    <StyledBatteryFullIcon></StyledBatteryFullIcon>
                    <CarDetailText>&nbsp;&nbsp;Similar Vehicles</CarDetailText>
                  </CarDetailLink>
                <CarDetailOrangeContainer>
                    <FavouriteSet/>
                </CarDetailOrangeContainer>
              </CarMainDetails>
            </CarMain>
            <CarDetails></CarDetails>
            </Car> 
        </CarList>
        <VehicleInfoSection ref="vehicleInfo">
        <VehicleInfo></VehicleInfo>
        </VehicleInfoSection>
        <ContactFormSection id="contact">
          <ContactHeader>Send a message</ContactHeader>
          <ContactFormContainer><ContactForm></ContactForm></ContactFormContainer>
        </ContactFormSection>
        <SimilarVehiclesSection id="similarVehicles">
        <SimilarVehicles></SimilarVehicles>
        </SimilarVehiclesSection>
      </CarsContainer>
    );
  }
}
const mapStateToProps = state => ({
  models: state.models,
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
  id:state.id,
  section:state.section
  }); 

  export default connect(mapStateToProps,{choosenSection})(Offer);