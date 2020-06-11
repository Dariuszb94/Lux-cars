import React, { Component } from "react";
import Search from "./AboutComponents/Search/Search";
import GetTouchAbout from "./AboutComponents/GetTouchAbout/GetTouchAbout";
import {
  Container,
  HeaderText,
  HeaderTextContainer,
  Header,
  Main,
  MainLeft,
  MainRight,
  MainLeftUpper,
  MainLeftParagragraph,
  SearchContainer,
} from "./AboutStyle";

/**
 * "About" component.
 */
class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container>
        <Header>
          <HeaderTextContainer>
            <HeaderText>About Us</HeaderText>
          </HeaderTextContainer>
        </Header>
        <Main>
          <MainLeft>
            <MainLeftUpper>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </MainLeftUpper>
            <MainLeftParagragraph>
              Nam semper, diam ut placerat euismod, ex ipsum pulvinar dolor, nec
              lobortis lorem ligula at turpis. Cras mollis facilisis aliquet.
              Morbi sed varius leo, eget fermentum metus. Etiam vel nulla mi.
              Praesent vitae volutpat ante. Fusce pulvinar, mauris sit amet
              finibus laoreet, ligula urna convallis odio, ut semper mi magna id
              ex. Maecenas arcu lorem, varius et est et, bibendum feugiat
              mauris.
            </MainLeftParagragraph>
            <MainLeftParagragraph>
              Vivamus faucibus arcu urna, a dapibus dui molestie eget. Nullam
              dignissim dolor nec sapien luctus tempor. Nunc interdum sed sapien
              eget porta. Nunc fringilla at sapien vitae sollicitudin. Proin
              eget dictum tortor, eu posuere massa. Sed justo est, scelerisque
              ac malesuada ut, condimentum quis purus. Fusce luctus elit justo,
              ac tincidunt enim mollis non.
            </MainLeftParagragraph>
            <MainLeftParagragraph>
              Morbi fringilla, eros sed aliquam pharetra, arcu lacus placerat
              ipsum, quis ultricies ligula ligula vitae nulla. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Quisque convallis arcu eu
              dictum tincidunt. Donec lobortis mi non ex ultricies vestibulum.
              Praesent lacinia laoreet cursus. In laoreet in metus vel
              fringilla.
            </MainLeftParagragraph>
          </MainLeft>
          <MainRight>
            <SearchContainer>
              <Search />
            </SearchContainer>
            <SearchContainer>
              <GetTouchAbout />
            </SearchContainer>
          </MainRight>
        </Main>
      </Container>
    );
  }
}

export default About;
