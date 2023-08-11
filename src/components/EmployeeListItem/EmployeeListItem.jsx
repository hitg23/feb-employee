import React from "react";
import { styled } from "styled-components";

export const StyledEmplList = styled.div`
  display: flex;
  background-color: lightblue;
  margin: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  padding: 5px 10px;
`;

export const StyledImg = styled.img`
  margin-top: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #ddd3a4;
`;
export const StyledContent = styled.div`
  margin-left: 10px;
  text-align: center;
`;

function EmployeeListItem({ employeesData }) {
  function handleDetail() {
    // console.log("mouseOver");
  }
  function employeeList(employee) {
    return (
      <StyledEmplList key={employee._id}>
        <StyledImg src={employee.imageUrl} alt="person image" />
        <StyledContent>
          <h3>{employee.name}</h3>
          <h3>{employee.title}</h3>
          {/* <h4>{employee.callMobile}</h4>
             <h4>{employee.callOffice}</h4>
             <h4>{employee.sms}</h4>
             <h4>{employee.email}</h4> */}
        </StyledContent>
      </StyledEmplList>
    );
  }
  return (
    <div onMouseMove={handleDetail}>{employeesData.map(employeeList)}</div>
  );
}

export default EmployeeListItem;
