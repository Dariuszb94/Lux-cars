import styled from "styled-components";

export const Container = styled.div``;

export const HeaderText = styled.h1`
  font-size: 2rem;
  color: white;
  position: relative;
`;

export const HeaderTextContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://i.ibb.co/yWcpKMX/photography-of-a-classic-car-gauge-1006511-1.jpg");
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
    background: rgba(0, 0, 0, 0.5);
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
  display: grid;
  grid-template-columns: 40% 60%;
  background-color: black;
  color: white;
  padding: 40px;
  grid-gap: 2rem;
  justify-content: center;
  @media (max-width: 1080px) {
    grid-gap: 1rem;
    padding: 24px;
  }
  @media (max-width: 800px) {
    display: block;
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (max-width: 700px) {
    padding-left: 56px;
    padding-right: 56px;
  }
  @media (max-width: 550px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (max-width: 500px) {
    padding-left: 12px;
    padding-right: 12px;
  }
  @media (max-width: 360px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const Mail = styled.div``;

export const Map = styled.div`
  @media (max-width: 800px) {
    margin-top: 16px;
  }
`;

export const MailHeader = styled.h1`
  color: #ec6b08;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const MapContent = styled.div`
  background-image: url("https://i.ibb.co/vcgnTMp/map.png");
  background-size: cover;
  min-height: 40vh;
  margin-top: 16px;
  @media (max-width: 1600px) {
    min-height: 35vh;
  }
  @media (max-width: 550px) {
    min-height: 30vh;
  }
  @media (max-width: 430px) {
    min-height: 25vh;
  }
`;
