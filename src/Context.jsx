import { createContext, useState, useEffect } from "react";
import { employeeData } from "./data";
import axios from "axios";

export const EmployeeContext = createContext();
export const EmployeeProvider = (props) => {
  // const [employeesData, setEmployeesData] = useState(employeeData);
  const [employeesData, setEmployeesData] = useState([]);
  const [employessDetail, setEmployessDetail] = useState(employeeData[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchEmployeeData = () => {
    axios
      .get("http://localhost:5000/api/employees/employees")
      .then((response) => {
        // console.log("response", response);
        setEmployeesData(response?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        employeesData,
        setEmployeesData,
        employessDetail,
        setEmployessDetail,
        isLoading,
        isError,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
