import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";

export const UnderSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  align-items: center;
  min-height: 20vh;
  justify-content: space-around;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 2%;
  padding-bottom: 2%;
  @media (max-width: 1200px) {
    padding-left: 4%;
    padding-right: 4%;
  }
  @media (max-width: 920px) {
    padding-left: 2%;
    padding-right: 2%;
  }
`;

export const UnderSliderContainerUpper = styled.h2`
  color: #ec6108;
  border-bottom: 2px solid white;
  padding-bottom: 4px;
  font-size: 3rem;
  @media (max-width: 630px) {
    font-size: 2.5rem;
  }
  @media (max-width: 520px) {
    font-size: 2.3rem;
  }
  @media (max-width: 440px) {
    font-size: 2.1rem;
  }
  @media (max-width: 400px) {
    font-size: 1.9rem;
  }
  @media (max-width: 350px) {
    font-size: 1.8rem;
  }
  @media (max-width: 320px) {
    font-size: 1.7rem;
  }
`;

export const UnderSliderContainerLower = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  font-size: 22px;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const UnderSliderContainerLowerElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Checked = styled(CheckIcon)`
  color: #ec6b0c;
  font-size: 32px !important;
`;
