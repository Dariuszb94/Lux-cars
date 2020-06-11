import React, { Component } from "react";
import { connect } from "react-redux";
import chooseId from "../../../../Actions/chooseOfferActions";
import FavouriteSet from "../../../Offer/OfferComponents/FavouriteSet/FavouriteSet";
import CARS from "../../../Const/carsDefaultData";
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
  CarHeaderTextRight,
  CarHeaderTextLeft,
  CarMain,
  CarPhoto,
  CarMainDetailsLeft,
  CarMainDetailsRight,
  CarDetailOrangeContainer,
  CarFeatures,
  CarDetail,
  CarDetailText,
  CarMainDetails,
  StyledSpeedOutlinedIcon,
  StyledColorLensOutlinedIcon,
  StyledLocalGasStationOutlinedIcon,
  StyledSettingsOutlinedIcon,
  StyledBatteryFullIcon,
  StyledCheckIcon,
  StyledLink,
  CarWithButtons,
} from "./CarsStyles";

/**
 * "Cars" component shows list of cars.
 */
class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
    this.chooseId = this.chooseId.bind(this);
  }

  componentDidMount() {
    this.filterCars();
  }

  componentDidUpdate() {
    this.filterCars();
  }

  /**
   * Mapping through CARS, then list is sorted and states are updated.
   *
   */
  filterCars() {
    const filteredArray = [];
    CARS.forEach((car) => {
      this.filterModel(car, filteredArray);
    });
    this.sort(filteredArray);
    this.updateList(filteredArray);
  }

  updateList(filteredArray) {
    const prevState = JSON.stringify([this.state.cars]); // strinigifing list before comparision
    const newState = JSON.stringify([filteredArray]); // strinigifing list before comparision
    if (prevState !== newState) {
      // comparing stringified lists, if nothing new, states aren't updated
      this.setState({ cars: filteredArray });
    }
  }

  sort(filteredArray) {
    if (this.props.priceSort.priceSort === "Ascending") {
      filteredArray.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
    if (this.props.priceSort.priceSort === "Descending") {
      filteredArray.sort((a, b) => (a.price < b.price ? 1 : -1));
    }
  }

  filterModel(car, filteredArray) {
    if (
      this.props.chosenMaker.maker === car.brand ||
      this.props.chosenMaker.maker === "Any Maker"
    ) {
      if (
        this.props.chosenModel.chosenModel === car.model ||
        this.props.chosenModel.chosenModel === "Any Model"
      ) {
        // eslint-disable-next-line max-len
        if (
          (this.props.chosenPower.maxPower >= car.power ||
            this.props.chosenPower.maxPower === null) &&
          (this.props.chosenPower.minPower <= car.power ||
            this.props.chosenPower.minPower === null)
        ) {
          // eslint-disable-next-line max-len
          if (
            (this.props.chosenYear.maxYear >= car.year ||
              this.props.chosenYear.maxYear === null) &&
            (this.props.chosenYear.minYear <= car.year ||
              this.props.chosenYear.minYear === null)
          ) {
            // eslint-disable-next-line max-len
            if (
              (this.props.chosenPrice.maxPrice >= car.price ||
                this.props.chosenPrice.maxPrice === null) &&
              (this.props.chosenPrice.minPrice <= car.price ||
                this.props.chosenPrice.minPrice === null)
            ) {
              filteredArray.push(car); // push new car to the list after filtering
            }
          }
        }
      }
    }
  }

  /**
   * Update chosen id of a car.
   * @param {number} e  car id
   */
  chooseId(e) {
    this.props.chooseId(e);
  }

  render() {
    return (
      <CarsContainer>
        <CarList>
          {this.state.cars.map((car) => (
            <CarWithButtons key={car.id}>
              <StyledLink
                to={{ pathname: `/Offer/Vehicle-Features/${car.id}` }}
              >
                <Car onClick={() => this.chooseId(car.id)}>
                  <CarHeader>
                    <CarLogo src={car.imageLogo} />
                    <CarHeaderText>
                      <CarHeaderTextRight>
                        <CarHeaderMainText>
                          {car.year}
                          &nbsp;
                          {car.brand}
                          &nbsp;
                          {car.model}
                        </CarHeaderMainText>
                        <CarHeaderSubText>
                          {car.power}
                          &nbsp;KM
                          {car.displacement}
                          &nbsp;cm3
                        </CarHeaderSubText>
                      </CarHeaderTextRight>
                      <CarHeaderTextLeft>
                        <CarHeaderMainText>
                          {car.price}
                          &nbsp;PLN
                        </CarHeaderMainText>
                      </CarHeaderTextLeft>
                    </CarHeaderText>
                  </CarHeader>
                  <CarMain>
                    <CarPhoto src={car.image1} />
                    <CarMainDetails>
                      <CarFeatures>
                        <CarMainDetailsLeft>
                          <CarDetail>
                            <StyledSpeedOutlinedIcon />
                            <CarDetailText>
                              &nbsp;
                              {car.mileage}
                              &nbsp;km
                            </CarDetailText>
                          </CarDetail>
                          <CarDetail>
                            <StyledColorLensOutlinedIcon />
                            <CarDetailText>
                              &nbsp;
                              {car.color}
                            </CarDetailText>
                          </CarDetail>
                          <CarDetail>
                            <StyledBatteryFullIcon />
                            <CarDetailText>
                              &nbsp;
                              {car.fuel}
                            </CarDetailText>
                          </CarDetail>
                          <CarDetail>
                            <StyledSettingsOutlinedIcon />
                            <CarDetailText>
                              &nbsp;
                              {car.gearBox}
                            </CarDetailText>
                          </CarDetail>
                          <CarDetail>
                            <StyledLocalGasStationOutlinedIcon />
                            <CarDetailText>
                              &nbsp;
                              {car.fuelConsumption}
                            </CarDetailText>
                          </CarDetail>
                        </CarMainDetailsLeft>
                        <CarMainDetailsRight>
                          <CarDetail>
                            <StyledCheckIcon />
                            <CarDetailText>
                              &nbsp;
                              {car.feature1}
                            </CarDetailText>
                          </CarDetail>
                          <CarDetail>
                            <StyledCheckIcon />
                            <CarDetailText>
                              &nbsp;
                              {car.feature2}
                            </CarDetailText>
                          </CarDetail>
                          <CarDetail>
                            <StyledCheckIcon />
                            <CarDetailText>
                              &nbsp;
                              {car.feature3}
                            </CarDetailText>
                          </CarDetail>
                          <CarDetail>
                            <StyledCheckIcon />
                            <CarDetailText>
                              &nbsp;
                              {car.feature4}
                            </CarDetailText>
                          </CarDetail>
                          <CarDetail>
                            <StyledCheckIcon />
                            <CarDetailText>
                              &nbsp;
                              {car.feature5}
                            </CarDetailText>
                          </CarDetail>
                        </CarMainDetailsRight>
                      </CarFeatures>
                    </CarMainDetails>
                  </CarMain>
                  <CarDetails />
                </Car>
              </StyledLink>
              <CarDetailOrangeContainer>
                <FavouriteSet carId={car.id.toString(10)} />
              </CarDetailOrangeContainer>
            </CarWithButtons>
          ))}
        </CarList>
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

export default connect(mapStateToProps, { chooseId })(Cars);
