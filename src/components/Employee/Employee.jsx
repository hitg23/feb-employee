import React from "react";

import HomePage from "../Homepage/HomePage";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import Container from "../Container/Container";

function Employee({ employeesData, setEmployeesData, handleDetail }) {
  return (
    <div>
      <Container>
        <HomePage
          employeesData={employeesData}
          setEmployeesData={setEmployeesData}
          handleDetail={handleDetail}
        />
        <EmployeeDetail
          employeesData={employeesData}
          setEmployeesData={setEmployeesData}
          handleDetail={handleDetail}
        />
      </Container>
    </div>
  );
}

export default Employee;
