import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Name = styled.input`
  margin-bottom: 8px;
  border-radius: 4px;
  border: none;
  padding: 4px;
  width: 100%;
`;

export const Tel = styled.input`
  margin-bottom: 8px;
  border-radius: 4px;
  border: none;
  width: 100%;
  padding: 4px;
`;

export const Email = styled.input`
  margin-bottom: 8px;
  border-radius: 4px;
  border: none;
  width: 100%;
  padding: 4px;
`;

export const Enquiry = styled.textarea`
  margin-bottom: 8px;
  border-radius: 4px;
  width: 100%;
  border: none;
  padding: 4px;
`;

export const Send = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #ec6b0c;
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const WarningName = styled.div`
  color: red;
  font-size: 1.2rem;
  display: none;
  font-weight: 900;
`;

export const WarningTel = styled.div`
  color: red;
  font-size: 1.2rem;
  display: none;
  font-weight: 900;
`;

export const WarningMail = styled.div`
  color: red;
  font-size: 1.2rem;
  display: none;
  font-weight: 900;
`;

export const FormElement = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Sent = styled.div`
  display: none;
`;
