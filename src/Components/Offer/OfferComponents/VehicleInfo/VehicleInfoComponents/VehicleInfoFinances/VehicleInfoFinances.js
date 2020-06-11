import React, { Component } from "react";
import { connect } from "react-redux";
import CARS from "../../../../../Const/carsDefaultData";
import {
  Container,
  Sliders,
  Monthly,
  Header,
  SliderContainer,
  MonthsText,
  StyledMonthSlider,
  StyledDepositSlider,
  ThumbMonths,
  ThumbDeposit,
  TrackMonths,
  TrackDeposit,
  StyledLink,
} from "./VehicleInfoFinancesStyle";
/**
 * "VehicleInfoFinances" component.
 */
class VehicleInfoFinances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: 12,
      deposit: 0,
      carPrice: 0,
    };
  }

  componentDidMount() {
    this.setState({
      carPrice: CARS[window.location.href.slice(21).replace(/\D/g, "")].price,
    });
  }

  render() {
    return (
      <Container>
        <Header>Finance</Header>
        <Sliders>
          <SliderContainer>
            <MonthsText>Term (Months)</MonthsText>
            <StyledMonthSlider
              defaultValue={[12]}
              renderTrack={TrackMonths}
              renderThumb={ThumbMonths}
              min={2}
              max={72}
              onChange={(val) => this.setState({ months: val })}
            />
          </SliderContainer>
          <SliderContainer>
            <MonthsText>Self Deposit [PLN]</MonthsText>
            <StyledDepositSlider
              defaultValue={[0]}
              renderTrack={TrackDeposit}
              renderThumb={ThumbDeposit}
              onChange={(val) => this.setState({ deposit: val })}
              max={20000}
            />
          </SliderContainer>
        </Sliders>
        <Monthly>
          Monthly Installment:{" "}
          {(
            (this.state.carPrice * 1.05 - this.state.deposit) /
            this.state.months
          ).toFixed(0)}{" "}
          PLN
        </Monthly>
        <StyledLink to="/Finance">Fill application</StyledLink>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  chosenId: state.chosenId,
});
export default connect(mapStateToProps)(VehicleInfoFinances);
