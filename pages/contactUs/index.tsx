import { EditSharp } from "@mui/icons-material";
import { TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Input, Button } from "@mui/material";
import InputMask from "react-input-mask";
import styles from "./contactForm.module.css";
const client = axios.create({
  baseURL: "https://pavelon-server.herokuapp.com/",
});

/* 
const validate = (values) => {
  let errors = {};

  if (!values.name) errors.name = "Required";
  else if (values.name.length < 10) errors.name = "Less than 5 characters";

  if (!values.email) errors.email = "Required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = "Invalid Email Address";

  return errors;
}; */

export default function Contact_form() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, [showSuccess]);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      business_Name: "",
      phone_Number: "",
    },
    validationSchema: Yup.object({
      business_Name: Yup.string().required("Business name is required"),
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone_Number: Yup.string().required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      // send post data with axios!
      client.post("", values).then(() => {
        resetForm({
          values: {
            email: "",
            name: "",
            business_Name: "",
            phone_Number: "",
          },
        });
        setShowSuccess(true);
      });
      // const testServer = async () => {
      //   console.log("fetch started!");
      //   const response = await fetch("https://pavelon-server.herokuapp.com/");
      //   const data = await response.json();
      //   console.log(data);
      // };
      // testServer();
      // console.log(formik.values.name);
    },
  });

  return (
    <>
      <div className="w-screen h-screen">
        <div
          className={`${styles.bgPattern} p-12 h-screen w-screen absolute top-0 right-0 z-0`}
        ></div>
        <div
          className={`flex flex-col md:flex-row w-10/12 md:w-8/12 p-12   bg-gray-50 justify-between items-center m-auto max-h-screen rounded-lg absolute left-12 top-24 md:left-72 md:top-64 py-24 z-10`}
        >
          <div className="w-full w-full md:w-6/12 h-72">
            <Typography variant="h3">Contact Us </Typography>
            <p className="text-3xl">
              Please fill form with details required and one <br /> of our
              representatives will be with you shortly
            </p>
          </div>
          <div className=" flex flex-col justify-center w-full h-full md:w-6/12  p-3">
            <form
              className="flex flex-col  h-72"
              onSubmit={formik.handleSubmit}
            >
              <TextField
                variant="filled"
                error={formik.touched.name && formik.errors.name}
                helperText={
                  formik.touched.name &&
                  formik.errors.name &&
                  formik.errors.name
                }
                name="name"
                type="text"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <InputMask
                mask={"999-999-9999"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone_Number}
                error={
                  formik.touched.phone_Number && formik.errors.phone_Number
                }
                helperText={
                  formik.touched.phone_Number &&
                  formik.errors.phone_Number &&
                  "Required"
                }
              >
                {(inputProps) => (
                  <TextField
                    {...inputProps}
                    name="phone_Number"
                    placeholder="Phone number"
                    variant="filled"
                    type="text"
                  />
                )}
              </InputMask>

              <TextField
                error={formik.touched.email && formik.errors.email}
                helperText={
                  formik.touched.email &&
                  formik.errors.email &&
                  formik.errors.email
                }
                variant="filled"
                name="email"
                type="text"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <TextField
                error={
                  formik.touched.business_Name &&
                  formik.errors.business_Name &&
                  true
                }
                helperText={
                  formik.touched.business_Name &&
                  formik.errors.business_Name &&
                  formik.errors.business_Name
                }
                variant="filled"
                name="business_Name"
                type="text"
                placeholder="Business Name"
                value={formik.values.business_Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <Button type="submit">Submit</Button>

              {showSuccess && (
                <p className="text-center text-green-400 w-full">
                  Message Sent!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
