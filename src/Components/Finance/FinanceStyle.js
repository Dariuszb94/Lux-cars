import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
`;

export const HeaderText = styled.h1`
  font-size: 2rem;
  position: relative;
`;

export const HeaderTextContainer = styled.div``;

export const Header = styled.div`
  background-position: top center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://i.ibb.co/Bzdwf7z/close-up-of-coins-on-table-332304-1.jpg");
  background-size: cover;
  min-height: 40vh;
  width: 100%;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 1080px) {
    min-height: 35vh;
  }
  @media (max-width: 980px) {
    min-height: 30vh;
  }
  @media (max-width: 900px) {
    min-height: 25vh;
  }
  @media (max-width: 760px) {
    min-height: 20vh;
  }
`;

export const Main = styled.div`
  padding: 32px;
  padding-left: 16%;
  padding-right: 16%;
  @media (max-width: 1400px) {
    padding-left: 12%;
    padding-right: 12%;
  }
  @media (max-width: 1200px) {
    padding-left: 8%;
    padding-right: 8%;
  }
  @media (max-width: 1000px) {
    padding-left: 4%;
    padding-right: 4%;
  }
  @media (max-width: 600px) {
    padding-left: 2%;
    padding-right: 2%;
  }
`;

export const MainLeftParagragraph = styled.p`
  margin-bottom: 12px;
  text-align: justify;
  @media (max-width: 400px) {
    font-size: 0.95rem;
    margin-bottom: 8px;
  }
`;

export const MainLeftUpper = styled.p`
  font-weight: 800;
  margin-bottom: 8px;
  @media (max-width: 400px) {
    margin-bottom: 4px;
  }
`;

export const MainLeftParagragraphStyled = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
  color: #ec5d07;
  @media (max-width: 400px) {
    margin-bottom: 4px;
  }
`;
