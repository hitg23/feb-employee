import React from "react";

import HomePage from "../Homepage/HomePage";
// import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import Container from "../Container/Container";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
function Employee() {
  return (
    <div>
      <Container>
        <HomePage />
        <EmployeeDetail />
      </Container>
    </div>
  );
}

export default Employee;
