import React from 'react'

function EmployeeListItem({employeesData}) 
{
    function employeeList(employee){
        return <div style={{padding:"20px",margin: "50px" }}>
            <img src={employee.imageUrl} alt='' height={100} width={100}/>
            <h3>{employee.name}</h3>
            <h3>{employee.title}</h3>
            <h4>{employee.callMobile}</h4>
             <h4>{employee.callOffice}</h4>
             <h4>{employee.sms}</h4>
             <h4>{employee.email}</h4>

            </div>
    }
  return (
    <div>
        {employeesData.map(employeeList)}
    </div>
  )
}

export default EmployeeListItem