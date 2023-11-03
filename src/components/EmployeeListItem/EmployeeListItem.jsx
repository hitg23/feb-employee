import React from "react";
import { useContext } from "react";
import { styled } from "styled-components";
import { EmployeeContext } from "../../Context";
// import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import { Skeleton } from "@mui/material";

export const StyledEmplList = styled.div`
  display: flex;
  background-color: lightblue;
  margin: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  height: 35%;
  padding: 5px 10px;
`;

const StyledSkeleton = styled(Skeleton)`
  margin-bottom: 10px;
`;

export const StyledImg = styled.img`
  margin-top: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #ddd3a4;
`;
export const StyledContent = styled.div`
  margin-left: 10px;
  text-align: center;
`;

// function employeeList(employee) {
//   return (
//     <StyledEmplList
//       onClick={() => {
//         handleEmployee(employee.id);
//       }}
//       key={employee.id}
//     >
//       <StyledImg src={employee.imageUrl} alt="person image" />
//       <StyledContent>
//         <h3>{employee.name}</h3>
//         <h3>{employee.title}</h3>
//       </StyledContent>
//     </StyledEmplList>
//   );
// }

function EmployeeListItem() {
  const { employeesData, setEmployessDetail, isLoading, isError } =
    useContext(EmployeeContext);
  const handleEmployee = (id) => {
    const EmployeeDetailInfo = employeesData.find(
      (employee) => employee.id === id
    );
    // console.log(EmployeeDetailInfo);
    setEmployessDetail(EmployeeDetailInfo);
  };

  return (
    <div>
      <>
        {isLoading && (
          <>
            <StyledSkeleton variant="rounded" width={370} height={60} />
            <StyledSkeleton variant="rounded" width={370} height={60} />
            <StyledSkeleton variant="rounded" width={370} height={60} />
            <StyledSkeleton variant="rounded" width={370} height={60} />
          </>
        )}
        {employeesData.map((employee) => {
          return (
            <StyledEmplList
              onClick={() => {
                handleEmployee(employee.id);
              }}
              key={employee.id}
            >
              <StyledImg src={employee.imageUrl} alt="person image" />
              <StyledContent>
                <h3>{employee.name}</h3>
                <h3>{employee.title}</h3>
              </StyledContent>
            </StyledEmplList>
          );
        })}
      </>
    </div>
  );
}

export default EmployeeListItem;
