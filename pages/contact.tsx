import { EditSharp } from "@mui/icons-material";
import { Divider, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Input, Button } from "@mui/material";
import InputMask from "react-input-mask";
import styles from "./contactUs/contactForm.module.css";
import SectionHeader from "../components/atoms/SectionHeader";
import { IndexContext } from "./_app";
const client = axios.create({
  baseURL: "https://pavelon-server.herokuapp.com/",
  //   baseURL: "http://localhost:8000/",
});

export default function Contact_form() {
  const [showSuccess, setShowSuccess] = useState(false);

  const { setShowSubNav, setShowDropDown } = useContext(IndexContext);

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
      client
        .post("", values)
        .then(() => {
          resetForm({
            values: {
              email: "",
              name: "",
              business_Name: "",
              phone_Number: "",
            },
          });
          setShowSuccess(true);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  });

  return (
    <>
      <div
        onClick={() => {
          setShowSubNav(false);
          setShowSubNav(false);
        }}
        className="flex my-24 flex-col justify-center"
      >
        {/* <div
          className={`${styles.bgPattern} p-12 h-screen w-screen absolute top-0 right-0 z-10`}
        ></div> */}
        <div
          className={`flex flex-col md:flex-row w-12/12 md:w-8/12 p-12  justify-between items-center m-auto max-h-screen rounded-lg py-24 z-10 `}
        >
          <div className="w-full w-full md:w-6/12 h-72">
            <SectionHeader title={"Contact Us"} />
            <p className="text-xl">
              Please fill form with details required and one of our
              representatives will be with you shortly
            </p>
          </div>
          <hr />
          <div className=" flex flex-col justify-center w-full h-full md:w-6/12">
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
                mask={"999-999-999-9999"}
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
