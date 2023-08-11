import React from "react";
import { styled } from "styled-components";
// import { StyledImg } from "../EmployeeListItem/EmployeeListItem";
// import { StyledContent } from "../EmployeeListItem/EmployeeListItem";
// import { StyledEmplList } from "../EmployeeListItem/EmployeeListItem";

const StyledEmpDetail = styled.div`
  width: 50%;
  height: 70%;

  border: 1px solid black;
`;
// const StyledDetail = styled.div`
//   border: 1px solid brown;
//   background: white;
//   margin: 5px;
//   width: 100%;
//   text-align: left;
//   padding: 5px;
// `;

function EmployeeDetail() {
  return <StyledEmpDetail>Employee Detail</StyledEmpDetail>;
  // function employeeDetailList(employee) {
  //   return (
  //     <StyledEmplList>
  //       <StyledImg src={employee.imageUrl} alt="person image" />
  //       <StyledContent>
  //         <h3>{employee.name}</h3>
  //         <h3>{employee.occupation}</h3>

  //         <StyledDetail>
  //           <p>Call Mobile</p>
  //           <h6>{employee.callMobile}</h6>
  //         </StyledDetail>

  //         <StyledDetail>
  //           <p>Call Office</p>
  //           <h6>{employee.callOffice}</h6>
  //         </StyledDetail>

  //         <StyledDetail>
  //           <p>SMS</p>
  //           <h6>{employee.sms}</h6>
  //         </StyledDetail>

  //         <StyledDetail>
  //           <p>Email</p>
  //           <h6>{employee.email}</h6>
  //         </StyledDetail>
  //       </StyledContent>
  //     </StyledEmplList>
  //   );
  // }
  // return (
  //   <StyledEmpDetail>{employeesData.map(employeeDetailList)}</StyledEmpDetail>
  // );
}
// const StyledEmployee = {
//   backgroundColor: "red",
//   width: "50%",
//   height: "400px"
// }

export default EmployeeDetail;
