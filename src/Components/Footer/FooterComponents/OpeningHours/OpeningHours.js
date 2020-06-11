import React from "react";
import {
  Container,
  Header,
  Weekday,
  WeekdayLeft,
  WeekdayRight,
  Weekdays,
  CalendarIcon,
} from "./OpeningHoursStyle";

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
