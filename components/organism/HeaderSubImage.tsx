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
import { Divider, Hidden, useMediaQuery } from "@mui/material";
import { url } from "inspector";
import Link from "next/link";

function HeaderSubImage({
  title = "Hello Section",
  children,
  imageUrl,
  noButton,
  reverse,
  subHeader,
  hidden,
}) {
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
      onMouseOver={(e) => {
        console.log("e.target");
        if (
          e.target.className !== "w-10/12 m-auto h-2 left-[8%] absolute top-0"
        ) {
          setShowSubNav(false);
          setShowDropDown(false);
        }
      }}
      className={`relative flex flex-col $ py-16 md:h-96   md:py-32 items-center md:h-auto md:flex-row bg-sky-100 w-12/12 md:justify-around`}
    >
      <div className="w-10/12 m-auto h-2 left-[8%] absolute top-0"></div>
      <div
        className={`w-10/12 m-auto flex flex-col gap-y-20 justify-between  md:flex-row md:gap-32}`}
      >
        <div className="flex flex-col w-12/12 md:w-6/12 gap-4 overflow-visible">
          <p
            style={{ width: `${matches ? "90vw" : ""}` }}
            className={`text-5xl text-slate-900 md:text-7xl py-2 md:py-3  font-bold ${styles.gradientText}`}
          >
            {title}
          </p>
          <p
            style={{ width: `${matches ? "90vw" : ""}` }}
            className={`text-3xl text-sky-900 md:text-5xl`}
          >
            {subHeader}
          </p>
          <Divider className="w-1/5" />
          {children}
          {noButton ? (
            ""
          ) : (
            <div className="flex flex-col gap-4">
              <Link href={"/contact"}>
                <Buttons title="Start now" />
              </Link>
            </div>
          )}
        </div>
        <div
          className={`flex w-full ${
            hidden ? "hidden" : ""
          } h-72 md:h-auto relative justify-end md:justify-start items-end md:w-5/12`}
        >
          <>
            {/* <div className="w-full md:w-10/12 h-72 md:h-96 relative"> */}
            <Image className=" " src={imageUrl} alt="" fill />
            {/* </div> */}
          </>
        </div>
      </div>
    </div>
  );
}

export default HeaderSubImage;
