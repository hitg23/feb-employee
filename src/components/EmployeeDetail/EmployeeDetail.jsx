import React from "react";
import { styled } from "styled-components";

const StyledEmpDetail = styled.div`
  width: 50%;
  height: 70%;

  border: 1px solid black;
`;

function EmployeeDetail() {
  return <StyledEmpDetail>EmployeeDetail</StyledEmpDetail>;
}
// const StyledEmployee = {
//   backgroundColor: "red",
//   width: "50%",
//   height: "400px"
// }

export default EmployeeDetail;
