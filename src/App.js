import { useState } from 'react';
import Container from './components/Container/Container';
import Employee from './components/Employee/Employee';

const App= ()=> {
const [employeesData, setEmployeesData]= useState([])
  return (
    <div>
     <Container>
      <Employee employeesData={employeesData} setEmployeesData={setEmployeesData}/> 
     </Container>
    </div>
  );
}

export default App;
