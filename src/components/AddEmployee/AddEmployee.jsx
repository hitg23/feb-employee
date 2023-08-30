import React, { useState } from "react";
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
  //Validation
  const [errors, setErrors] = useState({});

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

  const formValidate = () => {
    let listOfErrors = {};

    if (formData.name.trim() === "") {
      listOfErrors.name = "name can not be empty"; // {name:name can not be empty}
    }
    if (formData.Email === "") {
      listOfErrors.Email = "Email can not be empty";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.Email)) {
      listOfErrors.Email = "invalid Email";
    }
    if (formData.callMobile === "") {
      listOfErrors.callMobile = "callMobile can not be empty";
    } else if (
      !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(
        formData.callMobile
      )
    ) {
      listOfErrors.callMobile = "invalid mobile number";
    }
    console.log("validation", listOfErrors);
    setErrors(listOfErrors);
    return Object.keys(listOfErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidate()) {
      console.log("validation", formData);
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
    }
  };

  return (
    <StyledFormContainer>
      <h2 style={{ textAlign: "center" }}>AddEmployee</h2>
      <StyledForm action="" onSubmit={handleSubmit}>
        <StyledInputWrapper>
          <StyledLabel htmlFor="">
            Name <span style={{ color: "red" }}>*</span> :
          </StyledLabel>
          <StyledInput
            name="name"
            onChange={handleChange}
            type="text"
            value={formData.name}
          />
        </StyledInputWrapper>
        {errors.name && (
          <p
            style={{
              margin: 0,
              color: "red",
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            {errors.name}
          </p>
        )}
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
        {errors.callMobile && (
          <p
            style={{
              margin: 0,
              color: "red",
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            {errors.callMobile}
          </p>
        )}
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
        {errors.Email && (
          <p
            style={{
              margin: 0,
              color: "red",
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            {errors.Email}
          </p>
        )}

        <StyledButton>Add Employee</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
}
