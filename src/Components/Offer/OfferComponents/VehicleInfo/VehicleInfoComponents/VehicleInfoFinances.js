import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ReactSlider from 'react-slider';
import { NavLink } from 'react-router-dom';
import CARS from '../../../../Const/carsDefaultData';

const Container = styled.div`
  background-color:#474747;
  padding:16px;
  display:flex;
  flex-direction:column;
  padding-bottom:32px;
  @media (max-width:600px){
    padding-left:8px;
    padding-right:8px;
  } 
`;

const Sliders = styled.div`
  margin-top:24px;
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  @media (max-width:450px){
    flex-direction:column;
  }
`;

const Monthly = styled.div`
  margin-top:24px;
  align-self: center;
  border-radius: 8px;
  padding:16px;
`;

const Header = styled.h2`
  border-bottom:2px solid #ec6b0c;
  width:30%;
`;

const SliderContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:40%;
  @media (max-width:700px){
    width:48%;
  }
  @media (max-width:450px){
    width:100%;
  }
`;

const MonthsText = styled.h3`
  padding-bottom:4px;
  text-align:center;
`;

const StyledMonthSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
  @media (max-width:450px){
    margin-bottom:24px;
  }
`;

const StyledDepositSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;

const StyledThumbMonths = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  color: white;
  background-color:#ec6b0c;
  border-radius: 50%;
  cursor: grab;
`;

const StyledThumbDeposit = styled.div`
  height: 25px;
  line-height: 25px;
  width: 100px;
  text-align: center;
  color: white;
  background-color:#ec6b0c;
  border-radius: 8%;
  cursor: grab;
  @media (max-width:900px){
    width: 60px;
  }
  @media (max-width:600px){
    width: 55px;
  }
`;

const ThumbMonths = (props, state) => <StyledThumbMonths {...props}>{state.valueNow}</StyledThumbMonths>;

const ThumbDeposit = (props, state) => <StyledThumbDeposit {...props}>{state.valueNow}</StyledThumbDeposit>;

const StyledTrackMonths = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 1 ? '#000' : '#2d2d2d')};
  border-radius: 999px;
`;
const StyledTrackDeposit = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 1 ? '#000' : '#2d2d2d')};
  border-radius: 999px;
`;

const TrackMonths = (props, state) => <StyledTrackMonths {...props} index={state.index} />;

const TrackDeposit = (props, state) => <StyledTrackDeposit {...props} index={state.index} />;

const StyledLink = styled(NavLink).attrs()`
  font-size:0.9rem;
  color:white;
  background-color: #ec6b0c;
  width:30%;
  text-decoration:none;
  -webkit-transition:background-color 0.4s linear;
  -moz-transition:background-color 0.4s linear;
  transition:background-color 0.4s linear;
  padding:8px;
  border-radius:4px;
  align-self: center;
  display: block;
  text-align: center;
  &:hover{
    background-color:black;
  }
`;

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
    this.setState({ carPrice: CARS[window.location.href.slice(21).replace(/\D/g, '')].price });
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
          Monthly Installment:
          {((this.state.carPrice * 1.05 - this.state.deposit) / this.state.months).toFixed(0)}
          {' '}
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
