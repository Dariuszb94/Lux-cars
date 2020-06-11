import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div``;

export const Header = styled.h1`
  border-bottom: 2px solid #ec6b0c;
  margin-bottom: 16px;
  font-size: 1.4rem;
`;

export const Offer = styled.div``;

export const Offers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1.5rem;
  justify-content: center;
  @media (max-width: 1200px) {
    grid-gap: 0.5rem;
    grid-row-gap: 1.5rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const OfferPhoto = styled.img`
  height: auto;
  max-width: 100%;
`;

export const OfferName = styled.div`
  font-size: 1rem;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const OfferPrice = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #e46b0c;
`;

export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  text-decoration: none;
  color: white;
`;
