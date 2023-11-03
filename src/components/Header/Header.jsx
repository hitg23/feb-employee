import React from "react";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { Icon, IconButton } from "@mui/material";

function Header({ name, Backarrow }) {
  return (
    <div
      style={{
        display: "flex",

        gap: "8rem",
        border: "1px solid",
        margin: "5px",
        height: "70px",
        borderRadius: "8px",
      }}
    >
      <div style={{ padding: "10px", margin: "10px" }}>{Backarrow}</div>
      <div style={{ textAlign: "center" }}>
        <h2>{name}</h2>
      </div>
    </div>
  );
}
export { Header };
