import React from "react";
import { styled } from "styled-components";
// import EmployeeListItem from "../EmployeeListItem";
// import { StyledImg } from "../EmployeeListItem/EmployeeListItem";
// import { StyledContent } from "../EmployeeListItem/EmployeeListItem";
// import { StyledEmplList } from "../EmployeeListItem/EmployeeListItem";
// import { useState } from "react";
// import EmployeeList from "../EmployeeList/EmployeeList";

const StyledEmpDetail = styled.div`
  width: 50%;
  height: 70%;

  border: 1px solid black;
`;
const StyledDetail = styled.div`
  border: 1px solid brown;
  background: white;
  margin: 5px;
  width: 100%;
  text-align: left;
  padding: 5px;
`;

// const StyledEmployee = {
//   backgroundColor: "red",
//   width: "50%",
//   height: "400px",
// };

function EmployeeDetail() {
  return (
    <StyledEmpDetail>
      Employee Detail
      {/* {handleEmployeeDetailList} */}
      {/* {employeesData.map(employeeDetailList)} */}
    </StyledEmpDetail>
  );
}

export default EmployeeDetail;
