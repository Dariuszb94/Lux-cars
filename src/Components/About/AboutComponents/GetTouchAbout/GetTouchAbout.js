import React from "react";
import {
  Container,
  Header,
  Text,
  CallLower,
  StyledCallIcon,
  CallNumber,
  Contacts,
  StyledMailIcon,
  MailAddress,
  Mail,
} from "./GetTouchAboutStyle";

/**
 * "GetTouchAbout" component
 */
const GetTouchAbout = () => (
  <Container>
    <Header>Get In Touch</Header>
    <Text>Why not contact us directly?</Text>
    <Contacts>
      <CallLower as="a" href="tel:+48111222333">
        <StyledCallIcon />
        <CallNumber>111 222 333</CallNumber>
      </CallLower>
      <Mail as="a" href="mailto: LuxCars@gmail.com">
        <StyledMailIcon />
        <MailAddress>&nbsp;LuxCars@gmail.com</MailAddress>
      </Mail>
    </Contacts>
  </Container>
);
export default GetTouchAbout;
