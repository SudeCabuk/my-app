"use client";

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { red } from "@mui/material/colors";
import Link from "next/link";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
          width: "20%",
          backgroundColor: "white",
          height: "445px",
          margin: "250px",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            marginTop: "50px",
          }}
        >
          Login
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          style={{ display: "inline-block" }}
        >
          <TextField
            className="ml-1"
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            style={{
              marginTop: "10px",
              width: "80%",
            }}
          />
          <TextField
            className="ml-1"
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            style={{
              marginTop: "10px ",
              width: "80%",
            }}
          />
          <Button
            className="ml-1"
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            style={{
              marginTop: "10px ",
              width: "80%",
              marginBottom: "15px",
            }}
          >
            Submit
          </Button>
          <Link href="/password">Forgot Password</Link>
          <div style={{ marginTop: "10px" }}>
            Don't have an account? <Link href="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
