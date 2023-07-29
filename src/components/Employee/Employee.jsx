import React from 'react'
import './Employee.css'
import HomePage from '../Homepage/HomePage'
// import EmployeeDetail from '../EmployeeDetail/EmployeeDetail'

function Employee({employeesData, setEmployeesData}) {
  return (
    <div className='employee-wrapper'>
        <HomePage employeesData= {employeesData} setEmployeesData = {setEmployeesData}/> 
        {/* <EmployeeDetail/>    */}
    </div>
  )
}

export default Employee