import React from 'react'
import EmployeeListItem from '../EmployeeListItem/EmployeeListItem'
// import EmployeeListItem from '../EmployeeListItem/EmployeeListItem'


function EmployeeList({employeesData , setEmployessData}) {
  return (
    <div >
    <EmployeeListItem employeesData={employeesData} setEmployessData={setEmployessData}/> 
    </div>
  )
}


export default EmployeeList