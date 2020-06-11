import styled from "styled-components";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

export const Container = styled.div`
  width: 28%;
  font-size: 0.9rem;
  @media (max-width: 660px) {
    width: 90%;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const Header = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  padding-bottom: 12px;
  border-bottom: 2px solid #3f3f3f;
  margin-bottom: 16px;
`;

export const Weekday = styled.div`
  border-bottom: 1px solid #3f3f3f;
  padding-bottom: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const WeekdayLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

export const WeekdayRight = styled.div`
  font-size: 0.9rem;
`;

export const Weekdays = styled.div`
  color: #919191;
`;

export const CalendarIcon = styled(CalendarTodayIcon)`
  font-size: 0.9rem;
  cursor: pointer;
`;
