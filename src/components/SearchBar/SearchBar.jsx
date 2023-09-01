import React, { useContext, useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { EmployeeContext } from "../../Context";

const StyledInput = styled.input`
  width: 90%;
  padding: 5px;
  border: none;
  border: 1px solid #333;
  border-radius: 5px;
  margin: 4px;
`;

export default function SearchBar() {
  const [searchItem, setSearchItem] = useState("");
  const { employeesData, setEmployeesData } = useContext(EmployeeContext);
  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };
  //create a function that checks the employee name and if we find the same employee name and then we will add it in a new array

  //updating the existing employeeData with the new array
  const handleSearch = () => {
    const searchResult = employeesData.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    });
    setEmployeesData(searchResult);
  };
  return (
    <>
      <StyledInput type="text" name="" id="" onChange={handleChange} />
      <FontAwesomeIcon icon={faSearch} size="lg" onClick={handleSearch} />
    </>
  );
}
