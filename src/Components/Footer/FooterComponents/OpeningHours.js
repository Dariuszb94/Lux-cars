import React from 'react';
import styled from 'styled-components';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const Container = styled.div`
  width: 28%;
  font-size:0.9rem;
  @media (max-width:660px){
    width: 90%;
  }
  @media (max-width:420px){
    width: 100%;
  }
`;

const Header = styled.h2`
  font-weight: 400;
  font-size:1rem;
  padding-bottom:12px;
  border-bottom:2px solid #3f3f3f;
  margin-bottom:16px;
`;

const Weekday = styled.div`
  border-bottom:1px solid #3f3f3f;
  padding-bottom:4px;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
  margin-bottom:8px;
`;

const WeekdayLeft = styled.div`
  display:flex;
  align-items:center;
  font-size:0.9rem;
`;

const WeekdayRight = styled.div`
  font-size:0.9rem;
`;

const Weekdays = styled.div`
  color:#919191;
`;

const CalendarIcon = styled(CalendarTodayIcon)`
  font-size:0.9rem;
  cursor: pointer;
`;

/**
 * "OpeningHours" component.
 */
const OpeningHours = () => (
  <Container>
    <Header>Opening Hours</Header>
    <Weekdays>
      <Weekday>
        <WeekdayLeft>
          <CalendarIcon />
          Mon
        </WeekdayLeft>
        <WeekdayRight>09:00 - 18:00</WeekdayRight>
      </Weekday>
      <Weekday>
        <WeekdayLeft>
          <CalendarIcon />
          Tue
        </WeekdayLeft>
        <WeekdayRight>09:00 - 18:00</WeekdayRight>
      </Weekday>
      <Weekday>
        <WeekdayLeft>
          <CalendarIcon />
          Wed
        </WeekdayLeft>
        <WeekdayRight>09:00 - 18:00</WeekdayRight>
      </Weekday>
      <Weekday>
        <WeekdayLeft>
          <CalendarIcon />
          Thu
        </WeekdayLeft>
        <WeekdayRight>09:00 - 18:00</WeekdayRight>
      </Weekday>
      <Weekday>
        <WeekdayLeft>
          <CalendarIcon />
          Fri
        </WeekdayLeft>
        <WeekdayRight>09:00 - 18:00</WeekdayRight>
      </Weekday>
      <Weekday>
        <WeekdayLeft>
          <CalendarIcon />
          Sat
        </WeekdayLeft>
        <WeekdayRight>10:00 - 13:00</WeekdayRight>
      </Weekday>
      <Weekday>
        <WeekdayLeft>
          <CalendarIcon />
          Sun
        </WeekdayLeft>
        <WeekdayRight>By Appointment</WeekdayRight>
      </Weekday>
    </Weekdays>
  </Container>
);
export default OpeningHours;
