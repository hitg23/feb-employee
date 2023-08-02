import React from 'react'
import EmployeeList from '../EmployeeList/EmployeeList'
import employeeData from '../../data'
import {styled }from "styled-components"
// import Container from '../Container/Container'

const StyledHomePage= styled.div`
  background-color:#fff;
  width: 50%;
  height:70%;
  border-color: 1px solid orange
`

function HomePage({employeesData, setEmployeesData}) {
  const handleChange=  ()=>{
    setEmployeesData(employeeData);
  };
  console.log(employeesData);
  console.log(employeeData);

  return (
    <StyledHomePage>
      
      <EmployeeList employeesData=
      {employeesData} setEmployeesData={setEmployeesData}/> 
      <button onClick={handleChange} type="button">UpdateEmployee</button>
    
    </StyledHomePage>
  )
}
// const StyledHome = {
//   backgroundColor: "blue",
//   width: "50%",
//   height: "100vh"
// }

export default HomePage