import React from "react";
import Container from "../Container/Container";
import Employee from "../Employee/Employee";
export default function EmployeeListPage({ employeesData, setEmployeesData }) {
  return (
    <Employee
      employeesData={employeesData}
      setEmployeesData={setEmployeesData}
    />
  );
}
