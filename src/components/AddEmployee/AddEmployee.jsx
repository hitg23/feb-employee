import React, { useState, useEffect } from "react";
import {
  StyledFormContainer,
  StyledForm,
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./StyledComponents";

export default function AddEmployee({ employeesData, setEmployeesData }) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    imageUrl: "",
    callMobile: "",
    callOffice: "",
    Sms: "",
    Email: "",
  });
  // collecting the user info
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    //e.target.name
    //e.target.value
  };

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
      Email: "",
    });
  };

  return (
    <StyledFormContainer>
      <h2 style={{ textAlign: "center" }}>AddEmployee</h2>
      <StyledForm action="" onSubmit={handleSubmit}>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Name :</StyledLabel>
          <StyledInput
            name="name"
            onChange={handleChange}
            type="text"
            value={formData.name}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">title :</StyledLabel>
          <StyledInput
            onChange={handleChange}
            name="title"
            type="text"
            value={formData.title}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">imageUrl :</StyledLabel>
          <StyledInput
            onChange={handleChange}
            name="imageUrl"
            type="text"
            value={formData.imageUrl}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Call Mobile :</StyledLabel>
          <StyledInput
            onChange={handleChange}
            name="callMobile"
            type="text"
            value={formData.callMobile}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Call Office :</StyledLabel>
          <StyledInput
            onChange={handleChange}
            name="callOffice"
            type="text"
            value={formData.callOffice}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">SMS :</StyledLabel>
          <StyledInput
            onChange={handleChange}
            name="Sms"
            type="text"
            value={formData.Sms}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">Email :</StyledLabel>
          <StyledInput
            onChange={handleChange}
            name="Email"
            type="text"
            value={formData.Email}
          />
        </StyledInputWrapper>

        <StyledButton>Add Employee</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
}
