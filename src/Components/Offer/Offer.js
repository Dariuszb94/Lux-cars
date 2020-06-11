import React, { Component } from "react";
import { connect } from "react-redux";
import { Magnifier, GlassMagnifier } from "react-image-magnifiers";
import VehicleInfo from "./OfferComponents/VehicleInfo/VehicleInfo";
import SimilarVehicles from "./OfferComponents/SimilarVehicles/SimilarVehicles";
import ContactForm from "../Contact/ContactComponents/ContactForm/ContactForm";
import FavouriteSet from "./OfferComponents/FavouriteSet/FavouriteSet";
import SubNavi from "../Offers/OffersComponents/SubNavi/SubNavi";
import CARS from "../Const/carsDefaultData";
import {
  CarsContainer,
  Car,
  CarList,
  CarHeader,
  CarLogo,
  CarDetails,
  CarHeaderText,
  CarHeaderMainText,
  CarHeaderSubText,
  CarHeaderMainTextRight,
  CarHeaderTextRight,
  CarHeaderTextLeft,
  ContactHeader,
  CarMain,
  CarPhotoNaviRight,
  CarPhotoNaviLeft,
  CarPhotoContainer,
  CarPhotoChoose,
  CarPhotoChooseSmall,
  CarDetail,
  CarDetailText,
  CarDetailOrangeContainer,
  CarMainDetails,
  StyledSpeedOutlinedIcon,
  StyledColorLensOutlinedIcon,
  StyledBatteryFullIcon,
  StyledArrowLeftIcon,
  CarHeaderSubTextRight,
  CarDetailLink,
  StyledArrowRightIcon,
  VehicleInfoSection,
  SimilarVehiclesSection,
  ContactFormSection,
  ContactFormContainer,
  GoUp,
  StyledKeyboardArrowUpIcon,
  GoUpText,
} from "./OfferStyle";

/**
 * "Offer" component
 */
class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magnifierSize: "30%",
      magnifierOffsetY: 50,
      magnifierOffsetX: 50,
      listOfImages: [],
      smallImageSelect1: 1,
      smallImageSelect2: 2,
      smallImageSelect3: 3,
      mainImage: [this.props.location.pathname.replace(/\D/g, "")].imageDetail3,
      imageHighLight1: false,
      imageHighLight2: true,
      imageHighLight3: false,
      swipeRightPossible: true,
      swipeLeftPossible: true,
      magnifierMobile: "none",
      magnifierDesktop: "block",
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
    window.addEventListener("resize", this.handleResize);
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
    window.removeEventListener("resize", this.handleResize);
  }

  goUp() {
    window.scrollTo(0, 0);
  }

  handleResize() {
    if (window.innerWidth < 600) {
      this.setState({ magnifierSize: "40%" });
      this.setState({ magnifierOffsetY: 60 });
      this.setState({ magnifierOffsetY: 60 });
    }
    if (window.innerWidth < 500) {
      this.setState({ magnifierSize: "45%" });
      this.setState({ magnifierOffsetY: 70 });
      this.setState({ magnifierOffsetY: 70 });
    }
    if (window.innerWidth < 400) {
      this.setState({ magnifierSize: "50%" });
      this.setState({ magnifierOffsetY: 80 });
      this.setState({ magnifierOffsetY: 80 });
    }
    if (window.innerWidth < 710) {
      this.setState({ magnifierDesktop: "none" });
      this.setState({ magnifierMobile: "block" });
    } else {
      this.setState({ magnifierDesktop: "block" });
      this.setState({ magnifierMobile: "none" });
    }
  }

  /**
   * Clicking on right arrow make image change, states are being incremented until end of image array is reached.
   */
  swipeRight() {
    this.setState({ swipeLeftPossible: true });
    if (this.state.smallImageSelect3 < this.state.listOfImages.length - 1) {
      this.setState((prevState) => ({
        smallImageSelect1: prevState.smallImageSelect1 + 1,
      }));
      this.setState((prevState) => ({
        smallImageSelect2: prevState.smallImageSelect2 + 1,
      }));
      this.setState((prevState) => ({
        smallImageSelect3: prevState.smallImageSelect3 + 1,
      }));
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
    if (this.state.smallImageSelect3 >= this.state.listOfImages.length - 2) {
      this.setState({ swipeRightPossible: false });
    } else {
      this.setState({ swipeRightPossible: true });
    }
  }

  /**
   * Clicking on left arrow make image change, states are being decremented until end of image array is reached.
   */
  swipeLeft() {
    this.setState({ swipeRightPossible: true });
    if (this.state.smallImageSelect1 === 1) {
      this.setState({ swipeLeftPossible: false });
    } else {
      this.setState({ swipeLeftPossible: true });
    }
    if (this.state.smallImageSelect1 > 0) {
      this.setState((prevState) => ({
        smallImageSelect1: prevState.smallImageSelect1 - 1,
      }));
      this.setState((prevState) => ({
        smallImageSelect2: prevState.smallImageSelect2 - 1,
      }));
      this.setState((prevState) => ({
        smallImageSelect3: prevState.smallImageSelect3 - 1,
      }));
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
    listOfImages.push(
      CARS[this.props.location.pathname.replace(/\D/g, "")].imageDetail1
    );
    listOfImages.push(
      CARS[this.props.location.pathname.replace(/\D/g, "")].imageDetail2
    );
    listOfImages.push(
      CARS[this.props.location.pathname.replace(/\D/g, "")].imageDetail3
    );
    listOfImages.push(
      CARS[this.props.location.pathname.replace(/\D/g, "")].imageDetail4
    );
    listOfImages.push(
      CARS[this.props.location.pathname.replace(/\D/g, "")].imageDetail5
    );
    const prevState = JSON.stringify([...this.state.listOfImages]);
    const newState = JSON.stringify([...listOfImages]);
    if (prevState !== newState) {
      this.setState({ listOfImages });
      this.displayPhoto("changeCar");
    }
  }

  displayPhoto(event, numberOfPhoto) {
    if (event !== undefined) {
      this.setState({ mainImage: event });
    }
    if (event === "changeCar") {
      this.setState({
        mainImage:
          CARS[this.props.location.pathname.replace(/\D/g, "")].imageDetail3,
      });
    }
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
    this.setState((prevState) => ({
      updateVehicleInfo: !prevState.updateVehicleInfo,
    }));
  }

  print() {
    window.print();
  }

  render() {
    return (
      <CarsContainer>
        <SubNavi />
        <CarList>
          <Car key={CARS[this.props.location.pathname.replace(/\D/g, "")].id}>
            <CarHeader>
              <CarLogo
                src={
                  CARS[this.props.location.pathname.replace(/\D/g, "")]
                    .imageLogo
                }
              />
              <CarHeaderText>
                <CarHeaderTextRight>
                  <CarHeaderMainText>
                    {CARS[this.props.location.pathname.replace(/\D/g, "")].year}
                    &nbsp;
                    {
                      CARS[this.props.location.pathname.replace(/\D/g, "")]
                        .brand
                    }
                    &nbsp;
                    {
                      CARS[this.props.location.pathname.replace(/\D/g, "")]
                        .model
                    }
                    &nbsp;
                  </CarHeaderMainText>
                  <CarHeaderSubText>
                    {
                      CARS[this.props.location.pathname.replace(/\D/g, "")]
                        .power
                    }{" "}
                    KM{" "}
                    {
                      CARS[this.props.location.pathname.replace(/\D/g, "")]
                        .displacement
                    }{" "}
                    cm3
                  </CarHeaderSubText>
                </CarHeaderTextRight>
                <CarHeaderTextLeft>
                  <CarHeaderMainTextRight>
                    {
                      CARS[this.props.location.pathname.replace(/\D/g, "")]
                        .price
                    }{" "}
                    PLN
                  </CarHeaderMainTextRight>
                  <CarHeaderSubTextRight
                    to={{
                      pathname: `/Offer/Vehicle-Finances/${
                        CARS[this.props.location.pathname.replace(/\D/g, "")].id
                      }`,
                    }}
                    onClick={() => {
                      this.changeSection("vehicleInfo");
                    }}
                  >
                    Finance from
                    {(
                      (CARS[this.props.location.pathname.replace(/\D/g, "")]
                        .price *
                        1.05) /
                      72
                    ).toFixed(0)}{" "}
                    PLN
                  </CarHeaderSubTextRight>
                </CarHeaderTextLeft>
              </CarHeaderText>
            </CarHeader>
            <CarMain>
              <CarPhotoContainer>
                <GlassMagnifier
                  imageSrc={this.state.mainImage}
                  imageAlt={
                    CARS[this.props.location.pathname.replace(/\D/g, "")].model
                  }
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
                  <CarPhotoNaviLeft
                    swipeLeftPossible={this.state.swipeLeftPossible}
                  >
                    <StyledArrowLeftIcon onClick={() => this.swipeLeft()} />
                  </CarPhotoNaviLeft>
                  <CarPhotoChooseSmall
                    src={this.state.listOfImages[this.state.smallImageSelect1]}
                    onClick={() =>
                      this.displayPhoto(
                        this.state.listOfImages[this.state.smallImageSelect1],
                        1
                      )
                    }
                  />
                  <CarPhotoChooseSmall
                    src={this.state.listOfImages[this.state.smallImageSelect2]}
                    onClick={() =>
                      this.displayPhoto(
                        this.state.listOfImages[this.state.smallImageSelect2],
                        2
                      )
                    }
                  />
                  <CarPhotoChooseSmall
                    src={this.state.listOfImages[this.state.smallImageSelect3]}
                    onClick={() =>
                      this.displayPhoto(
                        this.state.listOfImages[this.state.smallImageSelect3],
                        3
                      )
                    }
                  />
                  <CarPhotoNaviRight
                    swipeRightPossible={this.state.swipeRightPossible}
                  >
                    <StyledArrowRightIcon onClick={() => this.swipeRight()} />
                  </CarPhotoNaviRight>
                </CarPhotoChoose>
              </CarPhotoContainer>
              <CarMainDetails>
                <CarDetailLink
                  onClick={() => {
                    this.changeSection("contact");
                  }}
                >
                  <StyledSpeedOutlinedIcon />
                  <CarDetailText>&nbsp;&nbsp;Send An Enquiry</CarDetailText>
                </CarDetailLink>
                <CarDetail onClick={this.print}>
                  <StyledColorLensOutlinedIcon />
                  <CarDetailText>&nbsp;&nbsp;Print This Page</CarDetailText>
                </CarDetail>
                <CarDetailLink
                  onClick={() => {
                    this.changeSection("similar");
                  }}
                >
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
