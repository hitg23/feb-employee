import React, { useContext } from "react";
// import { StyledImg } from "../EmployeeListItem/EmployeeListItem";
// import { StyledContent } from "../EmployeeListItem/EmployeeListItem";
// import { StyledEmplList } from "../EmployeeListItem/EmployeeListItem";

import { styled } from "styled-components";
import { EmployeeContext } from "../../Context";

const StyledEmpDetail = styled.div`
  width: 50%;
  height: 70%;
  border: 1px solid black;
  h3,
  p {
    padding: 0;
    margin: 0;
  }
`;
const StyledImg = styled.img`
  margin-top: 20px;
  width: 80px;
  height: 80px;
  border-radius: 70%;
  border: 5px solid #ddd3a4;
`;
const StyledEmployeeHeader = styled.div`
  display: flex;
  gap: 50px;
  padding: 10px 10px;
  align-items: center;
  border-bottom: 1px solid #9e9e9e;
`;
const StyledEmployeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  border-bottom: 1px solid #9e9e9e;
`;
const StyledEmployeedetailWrapper = styled.div`
  margin: 2rem;
  border-radius: 8px;
  border: 1px solid #9e9e9e;
  background-color: lightblue;
`;
const StyledEmployeeHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
`;

function EmployeeDetail() {
  const { employessDetail, setEmployessDetail } = useContext(EmployeeContext);

  return (
    <StyledEmpDetail>
      <StyledEmployeedetailWrapper>
        <StyledEmployeeHeader>
          <StyledImg src={employessDetail.imageUrl} alt="empPicture" />
          <StyledEmployeeHeaderInfo>
            <h3>{employessDetail.name}</h3>
            <p>{employessDetail.title}</p>
          </StyledEmployeeHeaderInfo>
        </StyledEmployeeHeader>
        <StyledEmployeeInfo>
          <h3>call Office</h3>
          <p>{employessDetail.callOffice}</p>
        </StyledEmployeeInfo>
        <StyledEmployeeInfo>
          <h3>call Mobile</h3>
          <p>{employessDetail.callMobile}</p>
        </StyledEmployeeInfo>
        <StyledEmployeeInfo>
          <h3>SMS</h3>
          <p>{employessDetail.sms}</p>
        </StyledEmployeeInfo>
        <StyledEmployeeInfo>
          <h3>Email</h3>
          <p>{employessDetail.email}</p>
        </StyledEmployeeInfo>
      </StyledEmployeedetailWrapper>
    </StyledEmpDetail>
  );
}

export default EmployeeDetail;
