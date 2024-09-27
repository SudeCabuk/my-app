"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

function Password() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const Change = () => {
    if (email === "foobar@gmail.com") {
      router.push("/newpassword");
    } else {
      alert("Mail adresi geçersiz");
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
        <h1 style={{ marginBottom: "50px", marginTop: "20px" }}>
          Reset your Password?
        </h1>
        <h3 style={{ marginBottom: "50px", marginTop: "10px" }}>
          Lost your password? Please enter your mail address. Yoy will receive a
          link to create a new password via email.
        </h3>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "20px", width: "90%" }}
        />
        <Button variant="contained" type="button" onClick={Change}>
          Reset Password
        </Button>
      </div>
    </div>
  );
}

export default Password;
