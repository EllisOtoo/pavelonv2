import Image from "next/image";
import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Paper, useMediaQuery } from "@mui/material";

const styles = {
  root: {
    // padding: "0 30px", /* Show some extra logo on side */
    padding: "0 30px",
  },
  slideContainer: {
    padding: "0 0px",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    // background: "#FEA900",
  },
  slide2: {
    // background: "#B3DC4A",
  },
  slide3: {
    // background: "#6AC0FF",
  },
  slide4: {
    // backgroundColor: "silver",
  },
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function LogoStripAnimated({ imageUrls, headertitle }) {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div className="my-12 flex flex-col md:flex-row items-center justify-between w-10/12 m-auto">
      <p className="text-4xl w-12/12 md:w-6/12">
        Powering businesses, {matches ? <br /> : ""} small and large
      </p>

      <div className="w-full my-4 md:w-3/12">
        <AutoPlaySwipeableViews
          style={styles.root}
          slideStyle={styles.slideContainer}
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <Image
              width={200}
              height={50}
              alt=""
              src={"/logostrip/credify.png"}
            />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <Image
              width={200}
              height={50}
              alt=""
              src={"/logostrip/creditmall.png"}
            />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <Image
              width={200}
              height={50}
              alt=""
              src={"/logostrip/yango.f54ab341.png"}
            />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide4)}>
            <Image
              width={200}
              height={50}
              alt=""
              src={"/logostrip/gcb_logo.cb4c2a8d.png"}
            />
          </div>
        </AutoPlaySwipeableViews>
      </div>
    </div>
  );
}

export default LogoStripAnimated;
