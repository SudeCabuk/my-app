"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

function Newpassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const ChangePassword = () => {
    if (password !== confirmpassword) {
      alert("Lütfen şifreyi aynı giriniz");
    } else {
      alert("Şifreniz başarıyla değiştirildi.");
      router.push("/login");
    }
  };

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
          height: "445px",
          margin: "250px",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ marginBottom: "40px", marginTop: "20px" }}>
          New Password
        </h1>
        <h3
          style={{
            marginBottom: "40px",
            marginTop: "10px",
            backgroundColor: "#B7E0FF",
          }}
        >
          Please create a new password that you don't use on any other site.
        </h3>
        <TextField
          id="outlined-basic"
          label="Create New Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "90%", marginBottom: "20px" }}
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Confirm Password"
          variant="outlined"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ width: "90%" }}
        />
        <Button
          variant="contained"
          style={{ width: "90%", marginTop: "20px" }}
          onClick={ChangePassword}
        >
          Change
        </Button>
      </div>
    </div>
  );
}

export default Newpassword;
