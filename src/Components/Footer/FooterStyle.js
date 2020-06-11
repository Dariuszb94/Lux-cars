import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #212121;
  padding-bottom: 24px;
  padding-top: 24px;
  color: white;
  justify-content: space-around;
  @media (max-width: 660px) {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    justify-items: center;
    row-gap: 2rem;
  }
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
export default FooterContainer;
