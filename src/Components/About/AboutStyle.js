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
  background-image: url("https://i.ibb.co/1TMgT0Y/a1-1.png");
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
  display: grid;
  grid-template-columns: 70% 30%;
  background-color: black;
  color: white;
  padding: 40px;
  grid-gap: 2rem;
  @media (max-width: 1080px) {
    grid-gap: 1rem;
    padding: 24px;
    grid-template-columns: 60% 40%;
  }
  @media (max-width: 800px) {
    display: block;
  }
  @media (max-width: 700px) {
    padding: 8px;
  }
`;

export const MainLeft = styled.div``;

export const MainRight = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const MainLeftUpper = styled.p`
  font-weight: 800;
  margin-bottom: 8px;
  @media (max-width: 400px) {
    margin-bottom: 4px;
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

export const SearchContainer = styled.div`
  width: 100%;
  background-color: #404040;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;
