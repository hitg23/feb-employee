import React from "react";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
// import EmployeeListItem from '../EmployeeListItem/EmployeeListItem'
import { styled } from "styled-components";

export const StyledEmp = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

function EmployeeList({ employeesData, setEmployessData }) {
  return (
    <StyledEmp>
      <EmployeeListItem
        employeesData={employeesData}
        setEmployessData={setEmployessData}
      />
    </StyledEmp>
  );
}

export default EmployeeList;
