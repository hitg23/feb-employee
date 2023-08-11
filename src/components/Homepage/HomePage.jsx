import React from "react";
import EmployeeList from "../EmployeeList/EmployeeList";
// import employeeData from "../../data";
import { styled } from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
// import Container from '../Container/Container'

const StyledHomePage = styled.div`
  background-color: #fff;
  width: 50%;
  height: 70%;
  border: 1px solid orange;
  padding: 2px 16px;
`;

function HomePage({ employeesData, setEmployeesData }) {
  return (
    <StyledHomePage>
      <SearchBar
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}
      />
      <EmployeeList
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}
      />
    </StyledHomePage>
  );
}
// const StyledHome = {
//   backgroundColor: "blue",
//   width: "50%",
//   height: "100vh"
// }

export default HomePage;
