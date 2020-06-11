import React from "react";
import {
  Container,
  Header,
  Main,
  Left,
  LeftElement,
  Right,
  CallLower,
  StyledCallIcon,
  CallNumber,
  Mail,
  StyledMailIcon,
  MailAddress,
  Footer,
  Facebook,
  Twitter,
} from "./GetInTouchStyle";

/**
 * "GetInTouch" component.
 */
const GetInTouch = () => (
  <Container>
    <Header>Get In Touch</Header>
    <Main>
      <Left>
        <LeftElement>Lux Cars</LeftElement>
        <LeftElement>43-100 Tychy</LeftElement>
        <LeftElement>Quick 28 Street</LeftElement>
        <LeftElement>Silesia</LeftElement>
      </Left>
      <Right>
        <CallLower as="a" href="tel:+48111222333">
          <StyledCallIcon />
          <CallNumber>&nbsp;111 222 333</CallNumber>
        </CallLower>
        <Mail as="a" href="mailto: LuxCars@gmail.com">
          <StyledMailIcon />
          <MailAddress>&nbsp;Email Us</MailAddress>
        </Mail>
      </Right>
    </Main>
    <Footer>
      <Facebook />
      <Twitter />
    </Footer>
  </Container>
);
export default GetInTouch;
