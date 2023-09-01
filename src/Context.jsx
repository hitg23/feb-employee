import { createContext, useState } from "react";
import { employeeData } from "./data";

export const EmployeeContext = createContext();
export const EmployeeProvider = (props) => {
  const [employeesData, setEmployeesData] = useState(employeeData);
  const [employessDetail, setEmployessDetail] = useState(employeeData[0]);

  return (
    <EmployeeContext.Provider
      value={{
        employeesData,
        setEmployeesData,
        employessDetail,
        setEmployessDetail,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
