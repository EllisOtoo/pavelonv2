import Image from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { GradientDiv } from "../styled/styled";
import styles from "./HeaderArea.module.css";
// import Button from "@mui/material/Button";
// import { IndexContext } from "../../pages";
import Buttons from "../atoms/Button";

import anime from "animejs";
import { useInView } from "framer-motion";
import useInview from "../../hooks/useInView";
import { IndexContext } from "../../pages/_app";
import { useMediaQuery } from "@mui/material";
import { url } from "inspector";

function HeaderArea({ title = "Hello Section", children, imageUrl }) {
  /*  */
  // const { matches } = useContext(IndexContext);

  const matches = useMediaQuery("(max-width:600px)");
  const cardRef = useRef(null); // console.log(useInview(cardRef));
  // const [inView] = useInview(cardRef); // Hooks to check if ref is inView
  const { setShowSubNav, setShowDropDown } = useContext(IndexContext); //* Context to hide PopUpNav
  const inView = useInView(cardRef);
  // import { useInView } from "framer-motion"

  useEffect(() => {
    inView
      ? anime({
          targets: cardRef.current,
          translateX: -20,
          delay: 300,
        })
      : anime({
          targets: cardRef.current,
          translateX: 0,
        });
  }, [inView]);

  return (
    <div
      // onMouseOver={(e) => {
      //   console.log("e.target");
      //   if (
      //     e.target.className !== "w-10/12 m-auto h-2 left-[8%] absolute top-0"
      //   ) {
      //     setShowSubNav(false);
      //     setShowDropDown(false);
      //   }
      // }}
      className={`relative flex flex-col $ py-16 md:py-24 gap-1 items-center md:flex-row bg-sky-100 w-12/12 md:justify-around`}
    >
      <div className="w-10/12 m-auto h-2 left-[8%] absolute top-0"></div>
      <div className="flex flex-col w-10/12 md:w-4/12 gap-4 overflow-visible">
        <p
          style={{ width: `${matches ? "90vw" : ""}` }}
          className={`text-5xl text-sky-900 md:text-7xl font-bold ${styles.gradientText}`}
        >
          {title}
        </p>
        {children}
        <div className="w-8/12 flex flex-col gap-4">
          <Buttons title="Start now" />
        </div>
      </div>
      <div className="flex py-12 w-10/12 items-end md:w-4/12">
        {imageUrl ? (
          <Image width={300} height={200} className=" " src={imageUrl} alt="" />
        ) : (
          <>
            <div className="w-5/12 md:w-4/12 h-72 md:h-96 relative">
              <Image className=" " src={"/landingPageMobile.png"} alt="" fill />
            </div>
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              ref={cardRef}
              className="w-6/12 h-24 md:h-44 relative"
            >
              <Image src={"/creditCard.png"} alt="" fill />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HeaderArea;
