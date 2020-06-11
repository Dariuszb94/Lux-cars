import styled from "styled-components";

export const SortContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 0.85em;
  font-weight: 600;
`;

export const SortChoosDropDownContentSort = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: ${(props) => (props.sortShow ? "block" : "none")};
  min-width: 180px;
`;

export const SortChoose = styled.ul`
  color: black;
  display: inline-block;
`;

export const PriceSortButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: white;
  text-align: center;
  text-decoration: none;
  color: black;
  min-width: 180px;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 4px;
`;

export const Sort = styled.div`
  cursor: pointer;
  padding: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const PriceSortText = styled.div`
  font-weight: 600;
`;
