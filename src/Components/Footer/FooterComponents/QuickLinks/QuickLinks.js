import React from "react";
import {
  Container,
  Header,
  Weekday,
  StyledChevronRightIcon,
  StyledLink,
} from "./QuickLinksStyle";

/**
 * "QuickLinks" component.
 */
const QuickLinks = () => (
  <Container>
    <Header>Quick Links</Header>
    <Weekday>
      <StyledLink to="/Lux-cars">
        <StyledChevronRightIcon />
        Home
      </StyledLink>
    </Weekday>
    <Weekday>
      <StyledLink to="/Offers">
        <StyledChevronRightIcon />
        Used Cars
      </StyledLink>
    </Weekday>
    <Weekday>
      <StyledLink to="/Finance">
        <StyledChevronRightIcon />
        Finance
      </StyledLink>
    </Weekday>
    <Weekday>
      <StyledLink to="/About">
        <StyledChevronRightIcon />
        About Us
      </StyledLink>
    </Weekday>
    <Weekday>
      <StyledLink to="/Contact">
        <StyledChevronRightIcon />
        Contact
      </StyledLink>
    </Weekday>
  </Container>
);
export default QuickLinks;
