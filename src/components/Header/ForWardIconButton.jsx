import * as React from "react";

import IconButton from "@mui/material/IconButton";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Stack from "@mui/material/Stack";

export default function ForWardIconButton() {
  const handleForward = () => {
    console.log("forward");
  };
  return (
    <IconButton size="small" color="primary" onClick={handleForward}>
      <ArrowForwardIosIcon />
    </IconButton>
  );
}
