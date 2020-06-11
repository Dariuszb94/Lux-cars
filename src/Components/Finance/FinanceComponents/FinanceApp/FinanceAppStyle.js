import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";

export const Container = styled.div`
  background-color: white;
`;

export const Header = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  @media (max-width: 525px) {
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-top: 16px;
  }
  @media (max-width: 385px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const SubHeader = styled.div`
  background-color: #ec6b0c;
  padding-bottom: 24px;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  @media (max-width: 385px) {
    padding-bottom: 16px;
    padding-top: 16px;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const Welcome = styled.h2`
  font-weight: 500;
  font-size: 1.4rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 16px;
  padding-right: 56px;
  @media (max-width: 920px) {
    padding-right: 32px;
  }
  @media (max-width: 640px) {
    padding-right: 16px;
  }
  @media (max-width: 385px) {
    padding-right: 8px;
  }
  @media (max-width: 310px) {
    padding-right: 4px;
  }
`;

export const SubHeaderParagraph = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
  font-weight: 400;
`;

export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  text-decoration: none;
  color: black;
  &:hover {
    color: #ec6b0c;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  -webkit-box-shadow: 10px 10px 47px -26px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 10px 10px 47px -26px rgba(0, 0, 0, 0.47);
  box-shadow: 10px 10px 47px -26px rgba(0, 0, 0, 0.47);
`;

export const SubHeaderList = styled.ul`
  padding-left: 32px;
`;
export const SubHeaderListElement = styled.li``;
export const Main = styled.div`
  color: black;
`;
export const FormElement = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
export const FormElementText = styled.div`
  margin-right: 80px;
  @media (max-width: 960px) {
    margin-right: 40px;
  }
  @media (max-width: 640px) {
    margin-right: 24px;
  }
  @media (max-width: 415px) {
    margin-right: 8px;
  }
  @media (max-width: 385px) {
    margin-right: 4px;
  }
  @media (max-width: 310px) {
    margin-right: 2px;
  }
`;
export const FormElementInput = styled.input`
  min-width: 500px;
  @media (max-width: 870px) {
    min-width: 400px;
  }
  @media (max-width: 750px) {
    min-width: 300px;
  }
  @media (max-width: 610px) {
    min-width: 230px;
  }
  @media (max-width: 445px) {
    min-width: 180px;
  }
  @media (max-width: 340px) {
    min-width: 0px;
    width: 160px;
  }
  @media (max-width: 290px) {
    width: 140px;
  }
`;

export const MainHeader = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  padding: 16px;
`;
export const MainBodyHeader = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 8px;
`;
export const MainBody = styled.div`
  background-color: #f5f5f5;
  padding-bottom: 24px;
  padding-top: 24px;
  padding-left: 56px;
  padding-right: 56px;
  display: flex;
  flex-direction: column;
  @media (max-width: 525px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-top: 16px;
  }
  @media (max-width: 385px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #d4600b;
  color: white;
  outline: none;
  border: none;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const Checked = styled(CheckIcon)`
  color: white;
`;

export const WarningForname = styled.div`
  color: red;
  font-size: 1.2rem;
  display: none;
  font-weight: 900;
`;

export const WarningSurname = styled.div`
  color: red;
  font-size: 1.2rem;
  display: none;
  font-weight: 900;
`;

export const WarningMiddleName = styled.div`
  color: red;
  font-size: 1.2rem;
  display: none;
  font-weight: 900;
`;

export const WarningMail = styled.div`
  color: red;
  font-size: 1.2rem;
  display: none;
  font-weight: 900;
`;

export const Sent = styled.div`
  display: none;
`;

export const WarningTel = styled.div`
  color: red;
  font-size: 1.2rem;
  display: none;
  font-weight: 900;
`;
