import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import {
  StyledFormContainer,
  StyledForm,
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./StyledComponenet";

export default function AddEmployee({ employeesData, setEmployeesData }) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    imageUrl: "",
    callMobile: "",
    callOffice: "",
    Sms: "",
    email: "",
  });

  //   collecting the user input
  const handleFormchange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(value);
  };

  //   useEffect(() => {
  //     console.log(formData);
  //   }, [formData]);
  // updating the formData state or handling the form submittion

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeesData([...employeesData, formData]);
    setFormData({
      name: "",
      title: "",
      imageUrl: "",
      callMobile: "",
      callOffice: "",
      Sms: "",
      email: "",
    });

    // console.log("handle Submit");
  };
  return (
    <StyledFormContainer>
      <h2 style={{ textAlign: "center" }}>AddEmployee</h2>
      <StyledForm action="" onSubmit={handleSubmit}>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Name :</StyledLabel>
          <StyledInput
            name="name"
            type="text"
            value={formData.name}
            onChange={handleFormchange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">title :</StyledLabel>
          <StyledInput
            name="title"
            type="text"
            value={formData.title}
            onChange={handleFormchange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">imageUrl :</StyledLabel>
          <StyledInput
            name="imageUrl"
            type="text"
            value={formData.imageUrl}
            onChange={handleFormchange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Call Mobile :</StyledLabel>
          <StyledInput
            name="callMobile"
            type="text"
            value={formData.callMobile}
            onChange={handleFormchange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Call Office :</StyledLabel>
          <StyledInput
            name="callOffice"
            type="text"
            value={formData.callOffice}
            onChange={handleFormchange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">SMS :</StyledLabel>
          <StyledInput
            name="Sms"
            type="text"
            value={formData.Sms}
            onChange={handleFormchange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Email :</StyledLabel>
          <StyledInput
            name="email"
            type="text"
            value={formData.email}
            onChange={handleFormchange}
          />
        </StyledInputWrapper>

        <StyledButton>Add Employee</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
}
