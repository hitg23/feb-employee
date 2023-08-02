import React from "react";

import HomePage from "../Homepage/HomePage";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import Container from "../Container/Container";

function Employee({ employeesData, setEmployeesData }) {
  return (
    <div>
      <Container>
        <HomePage
          employeesData={employeesData}
          setEmployeesData={setEmployeesData}
        />
        <EmployeeDetail />
      </Container>
    </div>
  );
}

export default Employee;
