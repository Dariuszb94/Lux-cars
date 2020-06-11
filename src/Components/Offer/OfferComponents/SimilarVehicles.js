import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import chooseModel from '../../../Actions/chooseModelActions';
import chooseMaker from '../../../Actions/chooseMakerActions';
import chooseId from '../../../Actions/chooseOfferActions';
import CARS from '../../Const/carsDefaultData';

const Container = styled.div`
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
    grid-row-gap: 1.5rem;
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
/**
 * "SimilarVehicles" component
 */
class SimilarVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
    this.chooseId = this.chooseId.bind(this);
  }

  componentDidMount() {
    this.setState({ cars: CARS });
    this.filterCars();
  }

  filterCars() {
    const filteredArray = [];
    CARS.forEach((car) => {
      this.filterModel(car, filteredArray);
    });
    this.updateList(filteredArray);
  }

  updateList(filteredArray) {
    const prevState = JSON.stringify([...this.state.cars]);
    const newState = JSON.stringify([...filteredArray]);
    if (prevState !== newState) {
      this.setState({ cars: filteredArray });
    }
  }

  filterModel(car, filteredArray) {
    if (CARS[this.props.chosenId.chosenId].brand === car.brand || ((CARS[this.props.chosenId.chosenId].price - 40000) <= car.price) || ((CARS[this.props.chosenId.chosenId].price + 40000) >= car.price)) {
      if (filteredArray.length < 4) { filteredArray.push(car); }
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
            <StyledLink to={{ pathname: `/Offer/Vehicle-Features/${car.id}` }} key={car.id}>
              <Offer onClick={() => this.chooseId(car.id)}>
                <OfferPhoto src={car.image1} />
                <OfferName>
                  {car.brand}
                  {' '}
                  {car.model}
                </OfferName>
                <OfferPrice>
                  {car.price}
                  {' '}
                  PLN
                </OfferPrice>
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
