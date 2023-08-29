import styled from "styled-components";

export const StyledFormContainer = styled.div`
  width: 50%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 5px;
  width: 80%;
`;
export const StyledLabel = styled.label`
  flex: 1;
  text-align: right;
`;

export const StyledInput = styled.input`
  flex: 2;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 5px;
`;
export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: blue;
  margin: 5px auto;
  font-size: 18px;
  align-item: left;
`;
