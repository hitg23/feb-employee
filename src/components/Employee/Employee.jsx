import React from "react";

import HomePage from "../Homepage/HomePage";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import Container from "../Container/Container";
import AddEmployee from "../AddEmployee/AddEmployee";

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
      <AddEmployee
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}
      />
    </div>
  );
}

export default Employee;
