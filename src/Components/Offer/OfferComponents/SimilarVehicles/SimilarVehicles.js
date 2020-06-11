import React, { Component } from "react";
import { connect } from "react-redux";
import chooseModel from "../../../../Actions/chooseModelActions";
import chooseMaker from "../../../../Actions/chooseMakerActions";
import chooseId from "../../../../Actions/chooseOfferActions";
import CARS from "../../../Const/carsDefaultData";
import {
  Container,
  Header,
  Offer,
  Offers,
  OfferPhoto,
  OfferName,
  OfferPrice,
  StyledLink,
} from "./SimilarVehiclesStyle";

/**
 * "SimilarVehicles" component
 */
class SimilarVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: CARS,
    };
    this.chooseId = this.chooseId.bind(this);
  }

  componentDidMount() {
    this.filterCars();
  }

  filterCars() {
    const filteredSimiliarCars = [];
    CARS.forEach((car) => {
      this.filterModel(car, filteredSimiliarCars);
    });
    this.updateList(filteredSimiliarCars);
  }

  updateList(filteredSimiliarCars) {
    this.setState({ cars: filteredSimiliarCars });
  }

  filterModel(car, filteredSimiliarCars) {
    // eslint-disable-next-line max-len
    if (
      CARS[this.props.chosenId.chosenId].brand === car.brand ||
      (CARS[this.props.chosenId.chosenId].price - 10000 <= car.price &&
        CARS[this.props.chosenId.chosenId].price + 10000 >= car.price)
    ) {
      if (filteredSimiliarCars.length < 4) {
        filteredSimiliarCars.push(car);
      }
    }
  }

  chooseId(e) {
    window.scrollTo(0, 0);
    this.props.chooseId(e);
  }

  render() {
    return (
      <Container>
        <Header>Similar Used Cars</Header>
        <Offers>
          {this.state.cars.map((car) => (
            <StyledLink
              to={{ pathname: `/Offer/Vehicle-Features/${car.id}` }}
              key={car.id}
            >
              <Offer onClick={() => this.chooseId(car.id)}>
                <OfferPhoto src={car.image1} />
                <OfferName>
                  {car.brand} {car.model}
                </OfferName>
                <OfferPrice>{car.price} PLN</OfferPrice>
              </Offer>
            </StyledLink>
          ))}
        </Offers>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  maker: state.maker,
  chosenModel: state.chosenModel,
  chosenId: state.chosenId,
});
const mapDispatchToProps = {
  chooseModel,
  chooseMaker,
  chooseId,
};
export default connect(mapStateToProps, mapDispatchToProps)(SimilarVehicles);
