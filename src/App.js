import { useState, useEffect} from 'react';


import Employee from './components/Employee/Employee';
import employeeData from './data'

const App= ()=> {
const [employeesData, setEmployeesData]= useState(employeeData)
// const requestUrl= "https://calm-everglades-09552-105a0b4519dc.herokuapp.com/api/employee/employees"
//   const getEmployeesData= async () =>{
//   const response = await fetch(requestUrl);
//   const data = await response.json();
//   setEmployeesData(data)
// }
// useEffect(()=>{
// getEmployeesData();
// }, [])

 const handleDetail=(empDetail)=>{
  

 }  
  return (
    <div>
     
    <Employee employeesData={employeesData} setEmployeesData={setEmployeesData} handleDetail={handleDetail} /> 
    
    </div>
  );
}

export default App;
