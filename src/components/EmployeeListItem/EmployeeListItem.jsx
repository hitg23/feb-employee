import React from "react";
import { styled } from "styled-components";

const StyledEmplList = styled.div`
  display: flex;
  background-color: white;
  margin: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  align-item: center;
  padding: 5px 10px;
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const StyledContent = styled.div`
  margin-left: 10px 
  text-align:left
  p, h3 {
    margin: 0;
  }
`;

function EmployeeListItem({ employeesData }) {
  function employeeList(employee) {
    return (
      <StyledEmplList key={employee._id}>
        <StyledImg src={employee.imageUrl} alt="person image" />
        <StyledContent>
          <h3>{employee.name}</h3>
          <h3>{employee.occupation}</h3>
          {/* <h4>{employee.callMobile}</h4>
             <h4>{employee.callOffice}</h4>
             <h4>{employee.sms}</h4>
             <h4>{employee.email}</h4> */}
        </StyledContent>
      </StyledEmplList>
    );
  }
  return <div>{employeesData.map(employeeList)}</div>;
}

export default EmployeeListItem;
