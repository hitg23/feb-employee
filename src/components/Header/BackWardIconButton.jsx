import * as React from "react";

import IconButton from "@mui/material/IconButton";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { EmployeeContext } from "../../Context";
import { useContext } from "react";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import { useNavigate } from "react-router-dom";
import HomePage from "../Homepage/HomePage";
// import { useNavigate } from "react-router-dom";

export default function BackWardIconButton() {
  const { employeesData, employessDetail } = useContext(EmployeeContext);
  const navigate = useNavigate();
  const handleBackWardButton = () => {
    navigate("/", { replace: true });
    // if (!(employeesData[0] === employessDetail)) {
    //   return <EmployeeDetail />;
    // }
  };
  return (
    <IconButton size="small" onClick={handleBackWardButton} color="primary">
      <ArrowBackIosIcon />
    </IconButton>
  );
}
