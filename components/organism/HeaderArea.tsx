import Image from "next/image";
import React, { useContext, useEffect, useRef } from "react";

import styles from "./HeaderArea.module.css";

import Buttons from "../atoms/Button";

import anime from "animejs";
import { useInView } from "framer-motion";
import useInview from "../../hooks/useInView";
import { useMediaQuery } from "@mui/material";
import { IndexContext } from "../../pages/_app";

function HeaderArea() {
  const matches = useMediaQuery("(max-width:600px)");

  const cardRef = useRef(null); // console.log(useInview(cardRef));
  const [inView] = useInview(cardRef); // Hooks to check if ref is inView

  const { setShowSubNav } = useContext(IndexContext);

  useEffect(() => {
    inView
      ? anime({
          targets: cardRef.current,
          translateX: -20,
        })
      : anime({
          targets: cardRef.current,
          translateX: 0,
        });
  }, [inView]);

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
      className="relative "
    >
      <div className={`${styles.headerGradient}`}></div>
      <div className="w-10/12 m-auto h-2 left-[8%] absolute top-0"></div>
      <div className="absolute top-[10%] left-[8%] flex flex-col gap-8 md:flex-row justify-around w-11/12 ">
        <div className="flex flex-col md:flex-row items-start py-12 gap-4">
          <div className="flex flex-col gap-4">
            <p
              className={`text-5xl text-sky-900 md:text-7xl font-bold ${styles.gradientText}`}
            >
              Lending Infrastructure for Africa.{" "}
            </p>
            <div className="w-8/12 flex flex-col gap-4">
              <p
                className="text-xl "
                style={{ width: `${matches ? "85vw" : ""}` }}
              >
                Technology and infrastructure to launch and scale your fintech
                in Africa.
              </p>
              <p
                className="text-xl"
                style={{ width: `${matches ? "85vw" : ""}` }}
              >
                Use Pavelon’s APIs to embed a full range of credit services on
                your platform to increase revenue streams.
              </p>
              <Buttons title="Start now" />
            </div>
          </div>

          <div className="flex w-full items-end">
            <div className="w-5/12 h-72 relative">
              <Image className=" " src={"/landingPageMobile.png"} alt="" fill />
            </div>
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              ref={cardRef}
              className="w-6/12 h-24 relative"
            >
              <Image src={"/creditCard.png"} alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderArea;
