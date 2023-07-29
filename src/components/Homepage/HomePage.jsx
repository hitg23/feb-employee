import React from 'react'
import EmployeeList from '../EmployeeList/EmployeeList'
import employeeData from '../../data'

function HomePage({employeesData, setEmployeesData}) {
  const handleChange=  ()=>{
    setEmployeesData(employeeData);
  };
  console.log(employeesData);
  console.log(employeeData);

  return (
    <div style={StyledHome}>
      <EmployeeList employeesData=
      {employeesData} setEmployeesData={setEmployeesData}/> 
      <button onClick={handleChange} type="button">UpdateEmployee</button>
    </div>
  )
}
const StyledHome = {
  backgroundColor: "blue",
  width: "50%",
  height: "1600px"
}

export default HomePage