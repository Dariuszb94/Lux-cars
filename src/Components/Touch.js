import React, {Component} from 'react';
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';

const Container = styled.div`
  background-color:#404040;
  padding:16px;
`;

const Header = styled.h2`
  font-weight:300;
  font-size:1.4rem;
  letter-spacing: 1px;
  text-align:center;
`;
const Text = styled.div`
  font-size:0.9rem;
  text-align:center;
  margin-top:8px;
  margin-bottom:16px;
`;

const CallLower= styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  text-decoration:none;
`;

const StyledCallIcon = styled(CallIcon)`
  color: #ec6b0c;
  font-size: 1.2rem;
`;

const CallNumber = styled.div`
  color: white;
  font-size: 1.2rem ;
  text-decoration:none;
`;

const Contacts = styled.div`
  display:flex;
  @media (max-width:1450px){
    flex-direction:column;
  }
`;

const StyledMailIcon = styled(MailIcon)`
  color: #ec6b0c;
`;

const MailAddress = styled.div`
  color: white;
`;

const Mail= styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  text-decoration:none;
  margin-left:16px;
  @media (max-width:1450px){
    margin-left:0;
  }
`;

class Touch extends Component {
  render() {
    return (  
      <Container>
        <Header>Get In Touch</Header>
        <Text>Why not contact us directly?</Text>
        <Contacts>
          <CallLower as="a" href="tel:+48111222333">
            <StyledCallIcon/>
            <CallNumber>111 222 333</CallNumber>
          </CallLower>
          <Mail as="a" href="mailto: LuxCars@gmail.com">
          <StyledMailIcon/>
          <MailAddress>&nbsp;LuxCars@gmail.com</MailAddress>
        </Mail>
        </Contacts>
      </Container>
    );
  }
}

  export default Touch;