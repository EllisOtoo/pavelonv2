import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { GradientDiv } from "../styled/styled";
import styles from "./HeaderArea.module.css";
import Button from "@mui/material/Button";

function HeaderArea({ setShowSubNav }) {
  return (
    <div
      onMouseOver={(e) => {
        console.log(e.target.className);
        if (
          e.target.className !== "w-10/12 m-auto h-2 left-[8%] absolute top-0"
        ) {
          setShowSubNav(false);
        }
      }}
      className="relative overflow-y-clip"
    >
      <div className={`${styles.headerGradient}`}></div>
      <div className="w-10/12 m-auto h-2 left-[8%] absolute top-0"></div>
      <div className="absolute  top-[10%] left-[8%] flex flex-col gap-8 md:flex-row  justify-around w-8/12 ">
        <div className="flex flex-col items-start py-12 gap-4">
          <p className="text-5xl md:text-7xl font-bold">
            Lending Infrastructure for Africa.{" "}
          </p>
          <p className="text-xl">
            Technology and infrastructure to launch and scale your fintech in
            Africa. Use Pavelon’s APIs to embed a full range of credit services
            on your platform to increase revenue streams.
          </p>
          <Button
            className=""
            sx={{ color: "white", borderColor: "white" }}
            variant="outlined"
          >
            Start Now
          </Button>
        </div>
        <div className="hidden md:block">
          <Image
            src={"/landingPageMobile.png"}
            alt=""
            width={"650"}
            height={"500"}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderArea;
