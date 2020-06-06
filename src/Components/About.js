import React, {Component} from 'react';
import styled from 'styled-components';
import Search from './Search';
import Touch from './Touch';

const Container = styled.div`
`;

const HeaderText = styled.h1`
  font-size:2rem;
  color:white;
  position: relative;
`;

const HeaderTextContainer = styled.div`
`;

const Header = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-image: url('https://i.ibb.co/59Qnbjk/a1.png');
  background-size: cover;
  min-height:40vh;
  width:100%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,.7);
  }
  @media (max-width:1080px){
    min-height:35vh;
  }
  @media (max-width:980px){
    min-height:30vh;
  }
  @media (max-width:900px){
    min-height:25vh;
  }
  @media (max-width:760px){
    min-height:20vh;
  }
`;
const Main = styled.div`
  display:grid;
  grid-template-columns:70% 30%;
  background-color:black;
  color:white;
  padding:40px;
  grid-gap:2rem;
  @media (max-width:1080px){
    grid-gap:1rem;
    padding:24px;
    grid-template-columns:60% 40%;
  }
  @media (max-width:800px){
    display:block;
  }
  @media (max-width:700px){
    padding:8px;
  }
`;

const MainLeft = styled.div`
`;

const MainRight = styled.div`
  background-color:black;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width:800px){
    display:none;
  }
`;

const MainLeftUpper = styled.p`
  font-weight:800;
  margin-bottom:8px;
  @media (max-width:400px){
  margin-bottom:4px;
  }
`;

const MainLeftParagragraph = styled.p`
  margin-bottom:12px;
  text-align:justify;
  @media (max-width:400px){
    font-size:0.95rem;
    margin-bottom:8px;
  }
`;

const SearchContainer = styled.div`
  width:100%;
  background-color:#404040;
  display:flex;
  justify-content: center;
  margin-bottom: 16px;
`;

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
            <MainLeftUpper>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</MainLeftUpper>
            <MainLeftParagragraph>Nam semper, diam ut placerat euismod, ex ipsum pulvinar dolor, nec lobortis lorem ligula at turpis. Cras mollis facilisis aliquet. Morbi sed varius leo, eget fermentum metus. Etiam vel nulla mi. Praesent vitae volutpat ante. Fusce pulvinar, mauris sit amet finibus laoreet, ligula urna convallis odio, ut semper mi magna id ex. Maecenas arcu lorem, varius et est et, bibendum feugiat mauris. </MainLeftParagragraph>
            <MainLeftParagragraph>Vivamus faucibus arcu urna, a dapibus dui molestie eget. Nullam dignissim dolor nec sapien luctus tempor. Nunc interdum sed sapien eget porta. Nunc fringilla at sapien vitae sollicitudin. Proin eget dictum tortor, eu posuere massa. Sed justo est, scelerisque ac malesuada ut, condimentum quis purus. Fusce luctus elit justo, ac tincidunt enim mollis non.</MainLeftParagragraph>
            <MainLeftParagragraph>Morbi fringilla, eros sed aliquam pharetra, arcu lacus placerat ipsum, quis ultricies ligula ligula vitae nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis arcu eu dictum tincidunt. Donec lobortis mi non ex ultricies vestibulum. Praesent lacinia laoreet cursus. In laoreet in metus vel fringilla.</MainLeftParagragraph>
          </MainLeft>
          <MainRight>
            <SearchContainer><Search/></SearchContainer>
            <SearchContainer><Touch/></SearchContainer>
          </MainRight>
        </Main>
      </Container>
    );
  }
}

  export default About;