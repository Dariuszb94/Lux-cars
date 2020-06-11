import styled from "styled-components";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

export const Container = styled.div`
  width: 28%;
  @media (max-width: 660px) {
    width: 95%;
    grid-column: 1 / 3;
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
  margin-bottom: 12px;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 660px) {
    flex-direction: row;
  }
`;

export const Left = styled.div`
  width: 50%;
  @media (max-width: 660px) {
    width: 100%;
  }
`;

export const LeftElement = styled.div`
  color: #919191;
  margin-bottom: 4px;
  font-size: 0.9rem;
`;

export const Right = styled.div`
  width: 50%;
  padding-left: 8px;
  @media (max-width: 900px) {
    padding-top: 4px;
    padding-left: 0;
    width: 100%;
  }
  @media (max-width: 660px) {
    padding-left: 16px;
  }
`;

export const CallLower = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-size: 0.9rem;
`;

export const StyledCallIcon = styled(CallIcon)`
  color: white;
  font-size: 0.9rem;
`;

export const CallNumber = styled.div`
  color: #919191;
  font-size: 0.9rem;
  text-decoration: none;
  -webkit-transition: color 0.2s linear;
  -moz-transition: color 0.2s linear;
  transition: color 0.2s linear;
  &:hover {
    color: white;
  }
`;

export const Mail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-size: 0.9rem;
`;

export const StyledMailIcon = styled(MailIcon)`
  color: white;
  font-size: 0.9rem;
`;

export const MailAddress = styled.div`
  color: #919191;
  font-size: 0.9rem;
  -webkit-transition: color 0.2s linear;
  -moz-transition: color 0.2s linear;
  transition: color 0.2s linear;
  &:hover {
    color: white;
  }
`;

export const Footer = styled.div`
  margin-top: 16px;
  @media (max-width: 660px) {
    margin-top: 8px;
  }
`;

export const Facebook = styled(FacebookIcon)`
  background-color: #383838;
  color: white;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const Twitter = styled(TwitterIcon)`
  background-color: #383838;
  color: white;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
`;
