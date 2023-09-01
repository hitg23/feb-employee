import React from "react";
import { useContext } from "react";
import { styled } from "styled-components";
import { EmployeeContext } from "../../Context";

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

function EmployeeListItem() {
  const { employeesData } = useContext(EmployeeContext);
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
  return <div>{employeesData.map(employeeList)}</div>;
}

export default EmployeeListItem;
