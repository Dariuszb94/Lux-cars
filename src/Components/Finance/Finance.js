import React, { Component } from "react";
import FinanceApp from "./FinanceComponents/FinanceApp/FinanceApp";
import {
  Container,
  HeaderText,
  HeaderTextContainer,
  Header,
  Main,
  MainLeftParagragraph,
  MainLeftUpper,
  MainLeftParagragraphStyled,
} from "./FinanceStyle";

/**
 * "Finance" component
 */
class Finance extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container>
        <Header>
          <HeaderTextContainer>
            <HeaderText>Finance</HeaderText>
          </HeaderTextContainer>
        </Header>
        <Main>
          <MainLeftUpper>
            Lux Cars have a dedicated team of finance experts waiting to help
            with your enquiry.
          </MainLeftUpper>
          <MainLeftParagragraph>
            We have relationships with high street lenders and specialist
            motoring finance houses too, that is why&nbsp; we have helped
            hundreds of customers secure the best finance deal for their budget.
          </MainLeftParagragraph>
          <MainLeftParagragraph>
            Our expertise with finance means that even if you have a poor credit
            rating we can help arrange finance for you.
          </MainLeftParagragraph>
          <MainLeftParagragraphStyled>
            2 Minute Application
          </MainLeftParagragraphStyled>
          <MainLeftParagragraph>
            Complete our simple to use online form below and once submitted, we
            will get back to you as soon as possible.
          </MainLeftParagragraph>
          <FinanceApp />
        </Main>
      </Container>
    );
  }
}
export default Finance;
