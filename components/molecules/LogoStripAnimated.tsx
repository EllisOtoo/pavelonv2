import Image from "next/image";
import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Paper } from "@mui/material";

const styles = {
  root: {
    padding: "0 30px",
  },
  slideContainer: {
    padding: "0 10px",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "silver",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "silver",
  },
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function LogoStripAnimated({ imageUrls, headertitle }) {
  return (
    <div className="mb-32 md:mt-0 flex flex-col md:flex-row items-center justify-around w-full">
      <p className="text-4xl w-12/12 px-12">
        Powering businesses, small and large
      </p>
      <div className="w-12/12 my-12">
        <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            slide n°1
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°2
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    </div>
  );
}

export default LogoStripAnimated;
