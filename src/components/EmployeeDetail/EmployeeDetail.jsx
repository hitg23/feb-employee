import React, { useState } from "react";
import { StyledImg } from "../EmployeeListItem/EmployeeListItem";
import { StyledContent } from "../EmployeeListItem/EmployeeListItem";
import { StyledEmplList } from "../EmployeeListItem/EmployeeListItem";

import { styled } from "styled-components";

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

// const StyledEmployee = {
//   backgroundColor: "red",
//   width: "50%",
//   height: "400px",
// };
// update the detail page
function EmployeeDetail({ employeesData, setEmployeesData }) {
  const [empDetail, setEmpDetail] = useState([]);
  const employeeDetail = (employee) => {
    return (
      <StyledEmplList>
        <StyledImg src={employee.imageUrl} alt="person image" />
        <StyledContent>
          <h3>{employee.name}</h3>
          <h3>{employee.title}</h3>
          <div>
            <h4>{employee.callMobile}</h4>
          </div>
          <div>
            <h4>{employee.callOffice}</h4>
          </div>
          <div>
            <h4>{employee.sms}</h4>
          </div>
          <div>
            <h4>{employee.email}</h4>
          </div>
        </StyledContent>
      </StyledEmplList>
    );
    setEmployeesData();
  };

  return (
    <StyledEmpDetail>
      Employee Detail
      <div>{employeesData.map(employeeDetail)}</div>
    </StyledEmpDetail>
  );
}

export default EmployeeDetail;
