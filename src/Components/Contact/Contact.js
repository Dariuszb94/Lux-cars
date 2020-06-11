import React, { Component } from "react";
import ContactForm from "./ContactComponents/ContactForm/ContactForm";
import {
  Container,
  HeaderText,
  HeaderTextContainer,
  Header,
  Main,
  Mail,
  Map,
  MailHeader,
  MapContent,
} from "./ContactStyle";

/**
 * "Contact" component.
 */
class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container>
        <Header>
          <HeaderTextContainer>
            <HeaderText>Contact Lux Cars</HeaderText>
          </HeaderTextContainer>
        </Header>
        <Main>
          <Mail>
            <MailHeader>Email Us</MailHeader>
            <ContactForm />
          </Mail>
          <Map>
            <MailHeader>Map</MailHeader>
            <MapContent />
          </Map>
        </Main>
      </Container>
    );
  }
}

export default Contact;
