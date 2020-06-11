import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SpeedOutlinedIcon from '@material-ui/icons/SpeedOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import BatteryFullIcon from '@material-ui/icons/Opacity';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { HashLink as Link } from 'react-router-hash-link';
import { Magnifier, GlassMagnifier } from 'react-image-magnifiers';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import VehicleInfo from './OfferComponents/VehicleInfo/VehicleInfo';
import SimilarVehicles from './OfferComponents/SimilarVehicles';
import ContactForm from '../Contact/ContactComponents/ContactForm';
import FavouriteSet from './OfferComponents/FavouriteSet';
import SubNavi from '../Offers/OffersComponents/SubNavi';
import CARS from '../Const/carsDefaultData';

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
  @media (max-width:450px){
    flex-direction:row-reverse;
  }
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
    width:56px;
    height:56px;
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
  @media (max-width:450px) {
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
    color: ${(props) => (props.swipeRightPossible ? '#ec6b0c' : 'white')};
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
    color: ${(props) => (props.swipeLeftPossible ? '#ec6b0c' : 'white')};
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

const CarPhotoChooseSmall = styled.img`
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

const CarDetailLink = styled.div`
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

const StyledArrowRightIcon = styled(ArrowRightIcon)`
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

const GoUp = styled.button`
  position:fixed;
  right:20px;
  bottom:10px;
  color:white;
  background-color: #ec6b0c;
  display:flex;
  flex-direction:column;
  border:none;
  opacity:0.5;
  padding-left:12px;
  padding-right:12px;
  cursor: pointer;
  -webkit-transition:opacity 0.2s linear;
  -moz-transition:opacity 0.2s linear;
  transition:opacity 0.2s linear;
  border-radius:50%;
  &:hover{
    opacity:1;
  }
`;

const StyledKeyboardArrowUpIcon = styled(KeyboardArrowUpIcon)`

`;

const GoUpText = styled.div`
  
`;

/**
 * "Offer" component
 */
class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magnifierSize: '30%',
      magnifierOffsetY: 50,
      magnifierOffsetX: 50,
      listOfImages: [],
      smallImageSelect1: 1,
      smallImageSelect2: 2,
      smallImageSelect3: 3,
      mainImage: [this.props.location.pathname.replace(/\D/g, '')].imageDetail3,
      imageHighLight1: false,
      imageHighLight2: true,
      imageHighLight3: false,
      swipeRightPossible: true,
      swipeLeftPossible: true,
      magnifierMobile: 'none',
      magnifierDesktop: 'block',
      updateVehicleInfo: false,
    };
    this.swipeLeft = this.swipeLeft.bind(this);
    this.swipeRight = this.swipeRight.bind(this);
    this.displayPhoto = this.displayPhoto.bind(this);
    this.changeSection = this.changeSection.bind(this);
    this.print = this.print.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.goUp = this.goUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.scrollTo(0, 0);
    this.createListOfImages();
    this.handleResize();
  }

  componentDidUpdate() {
    this.createListOfImages();
  }

  /**
 * Unmounts listener for resize
 */
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  goUp() {
    window.scrollTo(0, 0);
  }

  handleResize() {
    if (window.innerWidth < 600) {
      this.setState({ magnifierSize: '40%' });
      this.setState({ magnifierOffsetY: 60 });
      this.setState({ magnifierOffsetY: 60 });
    }
    if (window.innerWidth < 500) {
      this.setState({ magnifierSize: '45%' });
      this.setState({ magnifierOffsetY: 70 });
      this.setState({ magnifierOffsetY: 70 });
    }
    if (window.innerWidth < 400) {
      this.setState({ magnifierSize: '50%' });
      this.setState({ magnifierOffsetY: 80 });
      this.setState({ magnifierOffsetY: 80 });
    }
    if (window.innerWidth < 710) {
      this.setState({ magnifierDesktop: 'none' });
      this.setState({ magnifierMobile: 'block' });
    } else {
      this.setState({ magnifierDesktop: 'block' });
      this.setState({ magnifierMobile: 'none' });
    }
  }

  /**
 * Clicking on right arrow make image change, states are being incremented until end of image array is reached.
 */
  swipeRight() {
    this.setState({ swipeLeftPossible: true });
    if (this.state.smallImageSelect3 < this.state.listOfImages.length - 1) {
      this.setState((prevState) => ({ smallImageSelect1: prevState.smallImageSelect1 + 1 }));
      this.setState((prevState) => ({ smallImageSelect2: prevState.smallImageSelect2 + 1 }));
      this.setState((prevState) => ({ smallImageSelect3: prevState.smallImageSelect3 + 1 }));
      if (this.state.imageHighLight1) {
        this.setState({ imageHighLight1: false });
        this.setState({ imageHighLight2: false });
        this.setState({ imageHighLight3: false });
      }
      if (this.state.imageHighLight2) {
        this.setState({ imageHighLight1: true });
        this.setState({ imageHighLight2: false });
        this.setState({ imageHighLight3: false });
      }
      if (this.state.imageHighLight3) {
        this.setState({ imageHighLight1: false });
        this.setState({ imageHighLight2: true });
        this.setState({ imageHighLight3: false });
      }
    }
    if (this.state.smallImageSelect3 >= this.state.listOfImages.length - 2) { this.setState({ swipeRightPossible: false }); } else {
      this.setState({ swipeRightPossible: true });
    }
  }

  /**
 * Clicking on left arrow make image change, states are being decremented until end of image array is reached.
 */
  swipeLeft() {
    this.setState({ swipeRightPossible: true });
    if (this.state.smallImageSelect1 === 1) { this.setState({ swipeLeftPossible: false }); } else { this.setState({ swipeLeftPossible: true }); }
    if (this.state.smallImageSelect1 > 0) {
      this.setState((prevState) => ({ smallImageSelect1: prevState.smallImageSelect1 - 1 }));
      this.setState((prevState) => ({ smallImageSelect2: prevState.smallImageSelect2 - 1 }));
      this.setState((prevState) => ({ smallImageSelect3: prevState.smallImageSelect3 - 1 }));
      if (this.state.imageHighLight1) {
        this.setState({ imageHighLight1: false });
        this.setState({ imageHighLight2: true });
        this.setState({ imageHighLight3: false });
      }
      if (this.state.imageHighLight2) {
        this.setState({ imageHighLight1: false });
        this.setState({ imageHighLight2: false });
        this.setState({ imageHighLight3: true });
      }
      if (this.state.imageHighLight3) {
        this.setState({ imageHighLight1: false });
        this.setState({ imageHighLight2: false });
        this.setState({ imageHighLight3: false });
      }
    } else {
      this.setState({ swipeLeftPossible: false });
    }
  }

  createListOfImages() {
    const listOfImages = [];
    listOfImages.push(CARS[this.props.location.pathname.replace(/\D/g, '')].imageDetail1);
    listOfImages.push(CARS[this.props.location.pathname.replace(/\D/g, '')].imageDetail2);
    listOfImages.push(CARS[this.props.location.pathname.replace(/\D/g, '')].imageDetail3);
    listOfImages.push(CARS[this.props.location.pathname.replace(/\D/g, '')].imageDetail4);
    listOfImages.push(CARS[this.props.location.pathname.replace(/\D/g, '')].imageDetail5);
    const prevState = JSON.stringify([...this.state.listOfImages]);
    const newState = JSON.stringify([...listOfImages]);
    if (prevState !== newState) {
      this.setState({ listOfImages });
      this.displayPhoto('changeCar');
    }
  }

  displayPhoto(event, numberOfPhoto) {
    if (event !== undefined) { this.setState({ mainImage: event }); }
    if (event === 'changeCar') { this.setState({ mainImage: CARS[this.props.location.pathname.replace(/\D/g, '')].imageDetail3 }); }
    if (numberOfPhoto === 1) {
      this.setState({ imageHighLight1: true });
      this.setState({ imageHighLight2: false });
      this.setState({ imageHighLight3: false });
    }
    if (numberOfPhoto === 2) {
      this.setState({ imageHighLight1: false });
      this.setState({ imageHighLight2: true });
      this.setState({ imageHighLight3: false });
    }
    if (numberOfPhoto === 3) {
      this.setState({ imageHighLight1: false });
      this.setState({ imageHighLight2: false });
      this.setState({ imageHighLight3: true });
    }
  }

  changeSection(section) {
    this.refs[section].scrollIntoView();
    this.setState((prevState) => ({ updateVehicleInfo: !prevState.updateVehicleInfo }));
  }

  print() {
    window.print();
  }

  render() {
    return (
      <CarsContainer>
        <SubNavi />
        <CarList>
          <Car key={CARS[this.props.location.pathname.replace(/\D/g, '')].id}>
            <CarHeader>
              <CarLogo src={CARS[this.props.location.pathname.replace(/\D/g, '')].imageLogo} />
              <CarHeaderText>
                <CarHeaderTextRight>
                  <CarHeaderMainText>
                    {CARS[this.props.location.pathname.replace(/\D/g, '')].year}
                    {' '}
                    {CARS[this.props.location.pathname.replace(/\D/g, '')].brand}
                    {' '}
                    {CARS[this.props.location.pathname.replace(/\D/g, '')].model}
                  </CarHeaderMainText>
                  <CarHeaderSubText>
                    {CARS[this.props.location.pathname.replace(/\D/g, '')].power}
                    {' '}
                    KM
                    {' '}
                    {CARS[this.props.location.pathname.replace(/\D/g, '')].displacement}
                    {' '}
                    cm3
                  </CarHeaderSubText>
                </CarHeaderTextRight>
                <CarHeaderTextLeft>
                  <CarHeaderMainTextRight>
                    {CARS[this.props.location.pathname.replace(/\D/g, '')].price}
                    {' '}
                    PLN
                  </CarHeaderMainTextRight>
                  <CarHeaderSubTextRight to={{ pathname: `/Offer/Vehicle-Finances/${CARS[this.props.location.pathname.replace(/\D/g, '')].id}` }} onClick={() => { this.changeSection('vehicleInfo'); }}>
                    Finance from
                    {((CARS[this.props.location.pathname.replace(/\D/g, '')].price * 1.05) / 72).toFixed(0)}
                    {' '}
                    PLN
                  </CarHeaderSubTextRight>
                </CarHeaderTextLeft>
              </CarHeaderText>
            </CarHeader>
            <CarMain>
              <CarPhotoContainer>
                <GlassMagnifier
                  imageSrc={this.state.mainImage}
                  imageAlt={CARS[this.props.location.pathname.replace(/\D/g, '')].model}
                  magnifierOffsetX={this.state.magnifierOffsetX}
                  magnifierOffsetY={this.state.magnifierOffsetY}
                  magnifierSize={this.state.magnifierSize}
                  style={{ display: this.state.magnifierDesktop }}
                />
                <Magnifier
                  imageSrc={this.state.mainImage}
                  largeImageSrc={this.state.mainImage}
                  style={{ display: this.state.magnifierMobile }}
                />
                <CarPhotoChoose>
                  <CarPhotoNaviLeft swipeLeftPossible={this.state.swipeLeftPossible}><StyledArrowLeftIcon onClick={() => this.swipeLeft()} /></CarPhotoNaviLeft>
                  <CarPhotoChooseSmall src={this.state.listOfImages[this.state.smallImageSelect1]} onClick={() => this.displayPhoto(this.state.listOfImages[this.state.smallImageSelect1], 1)} />
                  <CarPhotoChooseSmall src={this.state.listOfImages[this.state.smallImageSelect2]} onClick={() => this.displayPhoto(this.state.listOfImages[this.state.smallImageSelect2], 2)} />
                  <CarPhotoChooseSmall src={this.state.listOfImages[this.state.smallImageSelect3]} onClick={() => this.displayPhoto(this.state.listOfImages[this.state.smallImageSelect3], 3)} />
                  <CarPhotoNaviRight swipeRightPossible={this.state.swipeRightPossible}><StyledArrowRightIcon onClick={() => this.swipeRight()} /></CarPhotoNaviRight>
                </CarPhotoChoose>
              </CarPhotoContainer>
              <CarMainDetails>
                <CarDetailLink onClick={() => { this.changeSection('contact'); }}>
                  <StyledSpeedOutlinedIcon />
                  <CarDetailText>&nbsp;&nbsp;Send An Enquiry</CarDetailText>
                </CarDetailLink>
                <CarDetail onClick={this.print}>
                  <StyledColorLensOutlinedIcon />
                  <CarDetailText>&nbsp;&nbsp;Print This Page</CarDetailText>
                </CarDetail>
                <CarDetailLink onClick={() => { this.changeSection('similar'); }}>
                  <StyledBatteryFullIcon />
                  <CarDetailText>&nbsp;&nbsp;Similar Vehicles</CarDetailText>
                </CarDetailLink>
                <CarDetailOrangeContainer>
                  <FavouriteSet />
                </CarDetailOrangeContainer>
              </CarMainDetails>
            </CarMain>
            <CarDetails />
          </Car>
        </CarList>
        <VehicleInfoSection ref="vehicleInfo">
          <VehicleInfo updateVehicleInfo={this.state.updateVehicleInfo} />
        </VehicleInfoSection>
        <ContactFormSection ref="contact">
          <ContactHeader>Send a message</ContactHeader>
          <ContactFormContainer>
            <ContactForm />
          </ContactFormContainer>
        </ContactFormSection>
        <SimilarVehiclesSection ref="similar">
          <SimilarVehicles />
        </SimilarVehiclesSection>
        <GoUp onClick={this.goUp}>
          <StyledKeyboardArrowUpIcon />
          <GoUpText>Up</GoUpText>
        </GoUp>
      </CarsContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  chosenMaker: state.chosenMaker,
  chosenModel: state.chosenModel,
  chosenPower: state.chosenPower,
  chosenYear: state.chosenYear,
  chosenPrice: state.chosenPrice,
  priceSort: state.priceSort,
  chosenId: state.chosenId,
});

export default connect(mapStateToProps)(Offer);