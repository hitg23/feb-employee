
import Nav from './components/Nav/Nav';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage';
import AddEmployeePage from './components/Pages/AddEmployeePage';
import EmployeeListPage from './components/Pages/EmployeeListPage';
import LogInPage from './components/Pages/LogInPage';
import { EmployeeProvider } from './Context';

const App= ()=> {
    return (
    <>
      <EmployeeProvider>
     <Nav/>
     <Routes>  
        <Route path= '/' element= {<HomePage/>}/>
        <Route path= '/add-employee' element= {<AddEmployeePage/>}/>
        <Route path= '/employee-list' element= {<EmployeeListPage />}/>
       <Route path= '/login' element= {<LogInPage/>}/>
       
    </Routes> 
    </EmployeeProvider>
    </>
  );
}

export default App;
