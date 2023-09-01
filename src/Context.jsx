import { createContext, useState } from "react";
import { employeeData } from "./data";

export const EmployeeContext = createContext();
export const EmployeeProvider = (props) => {
  const [employeesData, setEmployeesData] = useState(employeeData);

  return (
    <EmployeeContext.Provider value={{ employeesData, setEmployeesData }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
