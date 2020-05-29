import React, {Component} from 'react';
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';


const FooterContainer = styled.div`
color:white;
  background-color:#3a3a3a;
  display:flex;
  flex-direction:row;
  padding-left:4%;
  padding-right:4%;
  padding-top:2%;
  padding-bottom:2%;
  justify-content:space-between;
  align-items:center;

`;
const FooterLeft= styled.div`
`;
const FooterLeftHeader= styled.h2`
  padding-bottom:4px;
  border-bottom:2px solid #ec6b0c;
  margin-bottom:24px;
  width:70%;
`;
const FooterLeftSubHeader= styled.div`
padding-top:16px;
padding-bottom:16px;
font-size:1.25em;
`;
const FooterLeftText= styled.div`
padding-top:4px;
padding-bottom:4px;
`;
const FooterLeftTextHighlighted= styled.span`
color: #ec6b0c;
`;
const FooterRight= styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
`;
const FooterRightHeader= styled.h2`
  padding-bottom:4px;
  border-bottom:2px solid #ec6b0c;

`;
const FooterRightSubHeader= styled.h3`
padding-top:12px;
padding-bottom:12px;
`;
const FooterRightText= styled.div`
padding-top:8px;
padding-bottom:8px;
`;
const CallNumber = styled.div`
  color: white;
`;
const StyledCallIcon = styled(CallIcon)`
  color: #ec6b0c;

`;
const Call= styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  text-decoration:none;
  padding-bottom:8px;
`;
const MailAddress = styled.div`
  color: white;
`;
const StyledMailIcon = styled(MailIcon)`
  color: #ec6b0c;

`;
const Mail= styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  text-decoration:none;
`;


export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      };
  }
  componentDidMount() {
 
  }

  componentWillUnmount() {

  }
  componentDidUpdate(){
    
  }
  render() {
    return (  
      <FooterContainer>
        <FooterLeft>
        <FooterLeftHeader>Used car sales of Sidcup</FooterLeftHeader>
        <FooterLeftSubHeader>Welcome to Lux Cars</FooterLeftSubHeader>
        <FooterLeftSubHeader>Quality used cars for sale</FooterLeftSubHeader>
        <FooterLeftText>View our latest selection of <FooterLeftTextHighlighted>used cars for sale in Silesia here.</FooterLeftTextHighlighted></FooterLeftText>
        <FooterLeftSubHeader>Used car finance specialists</FooterLeftSubHeader>
        <FooterLeftText>Find more information on <FooterLeftTextHighlighted>used car finance and loans here.</FooterLeftTextHighlighted></FooterLeftText>
        <FooterLeftSubHeader>Contact Us</FooterLeftSubHeader>
        <FooterLeftText><FooterLeftTextHighlighted>Click here </FooterLeftTextHighlighted>to get in touch with PayGo Cars Ltd - quality used car retailer of Sidcup.</FooterLeftText>
        </FooterLeft>
        <FooterRight>
        <FooterRightHeader>Get In Touch</FooterRightHeader>
        <FooterRightSubHeader>Lux Cars</FooterRightSubHeader>
        <FooterRightText>200/305 Westwood Lane</FooterRightText>
        <FooterRightText>Tychy</FooterRightText>
        <FooterRightText>Silesia</FooterRightText>
        <Call as="a" href="tel:111-222-333">
          <StyledCallIcon/>
          <CallNumber>&nbsp;111 222 333</CallNumber>
        </Call>
        <Mail as="a" href="mailto: LuxCars@gmail.com">
          <StyledMailIcon/>
          <MailAddress>&nbsp;LuxCars@gmail.com</MailAddress>
        </Mail>
        </FooterRight>
      </FooterContainer>
    );
  }
}