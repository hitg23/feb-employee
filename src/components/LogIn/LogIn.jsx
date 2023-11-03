// import * as React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function ValidationTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "100%",
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          margin: "5rem auto",
          Width: "50%",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-error"
          label="Email"
          placeholder="Please inter Email"
          required
          type=" email"
          fullWidth
        />
        <TextField
          label="PassWord"
          placeholder="Please inter Password"
          required
          type="password"
          fullWidth
        />
      </div>
      <Button variant="contained" sx={{ marginRight: "1rem" }}>
        Log In
      </Button>
    </Box>
  );
}
