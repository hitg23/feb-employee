import React from "react";
import Container from "../Container/Container";
import AddEmployee from "../AddEmployee/AddEmployee";
export default function AddEmployeePage({ employeesData, setEmployeesData }) {
  return (
    <Container>
      {
        <AddEmployee
          employeesData={employeesData}
          setEmployeesData={setEmployeesData}
        />
      }
    </Container>
  );
}
