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
  import Slider from 'react-input-slider';
  import ReactSlider from 'react-slider'
const Container = styled.div`
background-color:#474747;
padding:16px;
display:flex;
flex-direction:column;
padding-bottom:32px;
  
`;
const Sliders = styled.div`
margin-top:24px;
display:flex;
flex-direction:row;
justify-content: space-around;

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
const  SliderContainer= styled.div`
display:flex;
flex-direction:column;
width:40%;
`;
const MonthsText = styled.h3`
padding-bottom:4px;
text-align:center;
`;
const StyledMonthSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;

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
`;
const ThumbMonths = (props, state) => <StyledThumbMonths {...props}>{state.valueNow}</StyledThumbMonths>;
const ThumbDeposit = (props, state) => <StyledThumbDeposit {...props}>{state.valueNow}</StyledThumbDeposit>;

const StyledTrackMonths = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 1 ? '#000' : '#2d2d2d'};
    border-radius: 999px;
`;
const StyledTrackDeposit = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 1 ? '#000' : '#2d2d2d'};
    border-radius: 999px;
`;
const TrackMonths = (props, state) => <StyledTrackMonths {...props} index={state.index} />;
const TrackDeposit = (props, state) => <StyledTrackDeposit {...props} index={state.index} />;

class VehicleInfoFinances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months:12,
      deposit:0,
      monthlyInstallment:0,
      carPrice:0,
      };

  }
  componentDidMount() {
    this.setState({ carPrice: this.props.cars[this.props.id.choosenId].price}) 
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }

  render() {

    return (  
      <Container> 
          <Header>Finance</Header>
          <Sliders>
          <SliderContainer><MonthsText>Term (Months)</MonthsText>
          <StyledMonthSlider
    defaultValue={[12]}
    renderTrack={TrackMonths}
    renderThumb={ThumbMonths}
    min={2}
    max={72}
    onChange={val => this.setState({ months: val}) }
/>
</SliderContainer>
<SliderContainer><MonthsText>Self Deposit [PLN]</MonthsText>
          <StyledDepositSlider
    defaultValue={[0]}
    renderTrack={TrackDeposit}
    renderThumb={ThumbDeposit}
    onChange={val => this.setState({ deposit: val}) }
    max={100000}
/>
</SliderContainer>
</Sliders>

<Monthly>Monthly Installment: {((this.state.carPrice*1.05 - this.state.deposit)/this.state.months).toFixed(0)} PLN</Monthly>
      </Container>
    );
  }
}    
const mapStateToProps = state => ({
  models: state.models,
  maker: state.maker,
  choosenModel:state.choosenModel,
  cars:state.cars,
  id:state.id,
  }); 
  export default connect(mapStateToProps,{chooseModel, updateMaker})(VehicleInfoFinances);