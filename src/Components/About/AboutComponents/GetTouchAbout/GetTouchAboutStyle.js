import styled from "styled-components";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";

export const Container = styled.div`
  background-color: #404040;
  padding: 16px;
`;

export const Header = styled.h2`
  font-weight: 300;
  font-size: 1.4rem;
  letter-spacing: 1px;
  text-align: center;
`;
export const Text = styled.div`
  font-size: 0.9rem;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const CallLower = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

export const StyledCallIcon = styled(CallIcon)`
  color: #ec6b0c;
  font-size: 1.2rem;
`;

export const CallNumber = styled.div`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
`;

export const Contacts = styled.div`
  display: flex;
  @media (max-width: 1450px) {
    flex-direction: column;
  }
`;

export const StyledMailIcon = styled(MailIcon)`
  color: #ec6b0c;
`;

export const MailAddress = styled.div`
  color: white;
`;

export const Mail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  margin-left: 16px;
  @media (max-width: 1450px) {
    margin-left: 0;
  }
`;
