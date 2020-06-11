import styled from "styled-components";

export const MainSearchContainer = styled.div`
  background-color: #3a3a3a;
  padding: 2%;
  @media (max-width: 450px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const AttrContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  @media (max-width: 860px) {
    width: 100%;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;
export const SearchHeader = styled.h2`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  padding-bottom: 4px;
  letter-spacing: 1px;
`;

export const FilterContainer = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 860px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 1rem;
  }
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    grid-gap: 0;
  }
`;
export const DropDownContentMaker = styled.div`
  font-weight: 200;
  display: none;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.makerShow ? "block" : "none")};
  min-width: 200px;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const DropDownContentMinYear = styled.div`
  font-weight: 200;
  display: none;
  min-width: 200px;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.minYearsShow ? "block" : "none")};
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const DropDownContentMaxYear = styled.div`
  font-weight: 200;
  display: none;
  min-width: 200px;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.maxYearsShow ? "block" : "none")};
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const DropDownContentMinPrice = styled.div`
  font-weight: 200;
  display: none;
  min-width: 200px;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.minPricesShow ? "block" : "none")};
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const DropDownContentMaxPrice = styled.div`
  font-weight: 200;
  display: none;
  min-width: 200px;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.maxPricesShow ? "block" : "none")};
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const SubAttr = styled.div`
  cursor: pointer;
  color: black;
  padding: 4px;
  font-weight: 300;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const AnyAttrText = styled.div`
  color: black;
`;

export const AttrChoose = styled.ul`
  display: inline-block;
  padding-bottom: 4px;
  margin-bottom: 8px;
`;

export const AnyAttr = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: white;
  text-align: center;
  text-decoration: none;
  color: black;
  width: 100%;
  padding: 8px;
  margin-bottom: 4px;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
  border: none;
  border-radius: 4px;
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  &:hover {
    color: #ec6b0c;
  }
`;
export const DropDownContentModel = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.modelShow ? "block" : "none")};
  font-weight: 200;
  min-width: 200px;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const DropDownContentMinPower = styled.div`
  display: none;
  min-width: 200px;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.minPowerShow ? "block" : "none")};
  font-weight: 200;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const DropDownContentMaxPower = styled.div`
  display: none;
  min-width: 200px;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.maxPowerShow ? "block" : "none")};
  font-weight: 200;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ResetButton = styled.button`
  white-space: nowrap;
  cursor: pointer;
  background-color: #ec6b0c;
  color: white;
  justify-self: center;
  align-self: center;
  outline: none;
  border: none;
  border-radius: 4px;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  margin-left: 8px;
  &:hover {
    background-color: black;
  }
  @media (max-width: 1040px) {
    margin-left: 0px;
  }
`;
