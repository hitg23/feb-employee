import React from "react";
import styled from "styled-components";
const StyledFormContainer = styled.div`
  width: 50%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledInputWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 5px;
  width: 80%;
`;
const StyledLabel = styled.label`
  flex: 1;
  text-align: right;
`;

const StyledInput = styled.input`
  flex: 2;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 5px;
`;
const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: blue;
  margin: 5px auto;
  font-size: 18px;
  align-item: left;
`;

export default function AddEmployee() {
  return (
    <StyledFormContainer>
      <h2 style={{ textAlign: "center" }}>AddEmployee</h2>
      <StyledForm action="">
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Name :</StyledLabel>
          <StyledInput type="text" value="" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Occupation :</StyledLabel>
          <StyledInput type="text" value="" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Call Mobile :</StyledLabel>
          <StyledInput type="text" value="" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Call Office :</StyledLabel>
          <StyledInput type="text" value="" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">SMS :</StyledLabel>
          <StyledInput type="text" value="" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Email :</StyledLabel>
          <StyledInput type="text" value="" />
        </StyledInputWrapper>

        <StyledButton>Add Employee</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
}
