import Image from "next/image";
import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Paper } from "@mui/material";

const styles = {
  root: {
    // padding: "0 30px", /* Show some extra logo on side */
    padding: "0 0px",
  },
  slideContainer: {
    padding: "0 1px",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    background: "#FEA900",
  },
  slide2: {
    background: "#B3DC4A",
  },
  slide3: {
    background: "#6AC0FF",
  },
  slide4: {
    backgroundColor: "silver",
  },
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function LogoStripAnimated({ imageUrls, headertitle }) {
  return (
    <div className=" my-12  flex flex-col md:flex-row items-center justify-around w-full">
      <p className="text-4xl w-12/12 px-12">
        Powering businesses, small and large
      </p>
      <div className="w-12/12 my-4">
        <AutoPlaySwipeableViews
          style={styles.root}
          slideStyle={styles.slideContainer}
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            Creditmall
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            Credify
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            Yango
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide4)}>GBC</div>
        </AutoPlaySwipeableViews>
      </div>
    </div>
  );
}

export default LogoStripAnimated;
