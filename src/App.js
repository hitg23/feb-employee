import { useState } from 'react';
import employeeData from './data'
import Nav from './components/Nav/Nav';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage';
import AddEmployeePage from './components/Pages/AddEmployeePage';
import EmployeeListPage from './components/Pages/EmployeeListPage';
import LogInPage from './components/Pages/LogInPage';

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

 
  return (
    <div>
     <Nav/>
     <Routes>  
        <Route path= '/' element= {<HomePage/>}/>
        <Route path= '/add-employee' element= {<AddEmployeePage employeesData={employeesData} setEmployeesData= {setEmployeesData}/>}/>
        <Route path= '/employee-list' element= {<EmployeeListPage employeesData={employeesData} setEmployeesData= {setEmployeesData}/>}/>

        <Route path= '/login' element= {<LogInPage/>}/>
       
    </Routes> 
    </div>
  );
}

export default App;
