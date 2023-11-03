import React from "react";
import EmployeeList from "../EmployeeList/EmployeeList";
// import employeeData from "../../data";
import { styled } from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { Header } from "../Header/Header";
// import Container from '../Container/Container'

const StyledHomePage = styled.div`
  background-color: #fff;
  width: 50%;
  height: 80%;
  padding: 4px 16px;
`;

function HomePage() {
  return (
    <StyledHomePage>
      <Header name="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </StyledHomePage>
  );
}
// const StyledHome = {
//   backgroundColor: "blue",
//   width: "50%",
//   height: "100vh"
// }

export default HomePage;
