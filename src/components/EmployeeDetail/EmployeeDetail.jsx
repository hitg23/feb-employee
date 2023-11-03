import React, { useContext } from "react";
import {
  Paper,
  Box,
  Avatar,
  Divider,
  List,
  ListItem,
  Typography,
  Skeleton,
  Stack,
} from "@mui/material";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { styled } from "styled-components";
import { EmployeeContext } from "../../Context";
import { Header } from "../Header/Header";
import ForWardIconButton from "../Header/ForWardIconButton";
import BackWardIconButton from "../Header/BackWardIconButton";

function EmployeeDetail() {
  const { employessDetail, setEmployessDetail } = useContext(EmployeeContext);

  return (
    <Paper
      elevation="0"
      sx={{ width: "50%", height: "80%", padding: "0px 10px" }}
    >
      <Header Backarrow={<BackWardIconButton />} name="Employee" />
      <Paper
        elevation="0"
        sx={{
          width: "100%",
          border: "1px solid #f4f4f4",
          background: "lightblue",
        }}
      >
        <Box sx={{ display: "flex", padding: "10px" }}>
          <Avatar
            alt=""
            src={employessDetail.imageUrl}
            sx={{ width: 80, height: 80 }}
          />

          <Divider />
          <List>
            <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
              <Typography variant="h5">{employessDetail.name}</Typography>
            </ListItem>
            <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
              <Typography variant="body1">{employessDetail.title}</Typography>
            </ListItem>
          </List>
        </Box>
        <Divider />
        <List>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <Stack direction="row" alignItems="center" gap={45}>
              <Typography variant="h6">Call Office</Typography>
              <ForWardIconButton />
            </Stack>
          </ListItem>
          <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <Typography variant="body1">
              {employessDetail.callOffice}
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <Stack direction="row" gap={44}>
              <Typography variant="h6">Call Mobile</Typography>
              <ForWardIconButton />
            </Stack>
          </ListItem>
          <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <Typography variant="body1">
              {employessDetail.callMobile}
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <Stack direction="row" gap={51}>
              <Typography variant="h6">SMS</Typography>
              <ForWardIconButton />
            </Stack>
          </ListItem>
          <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <Typography variant="body1">{employessDetail.sms}</Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <Stack direction="row" gap={50}>
              <Typography variant="h6">Email</Typography>
              <ForWardIconButton />
            </Stack>
          </ListItem>
          <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <Typography variant="body1">{employessDetail.email}</Typography>
          </ListItem>
        </List>
        <Divider />
      </Paper>
    </Paper>
  );
}

export default EmployeeDetail;
