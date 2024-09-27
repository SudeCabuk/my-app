"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";

function Signup() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#87A2FF",
      }}
    >
      <div
        style={{
          width: "25%",
          backgroundColor: "white",
          margin: "100px",
          textAlign: "center",
          borderRadius: "10px",
          padding: "30px",
          paddingBottom: "60px",
        }}
      >
        <h1 style={{ marginBottom: "30px", marginTop: "10px" }}>Sign Up</h1>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          style={{ width: "90%" }}
        >
          <DatePicker label="Birth Date" />
        </LocalizationProvider>
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          style={{ marginBottom: "20px", marginTop: "20px" }}
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Password"
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          style={{
            marginTop: "10px ",
            width: "90%",
            marginBottom: "15px",
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Signup;
