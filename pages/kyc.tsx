import HeaderArea from "../components/organism/HeaderArea";
import SwipeableViews from "react-swipeable-views";
import React from "react";
import Image from "next/image";
import { autoPlay } from "react-swipeable-views-utils";

// const styles = {
//   slide: {
//     padding: 15,
//     minHeight: 100,
//     color: "#fff",
//   },
//   slide1: {
//     background: "#FEA900",
//   },
//   slide2: {
//     background: "#B3DC4A",
//   },
//   slide3: {
//     background: "#6AC0FF",
//   },
// };

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
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableImageGallery = () => {
  // const [index, setIndex] = React.useState(0);

  // const handleChangeIndex = (newIndex) => {
  //   setIndex(newIndex);
  // };

  return (
    <>
      {/* <AutoPlaySwipeableViews>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          slide n°1
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          slide n°2
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          slide n°3
        </div>
      </AutoPlaySwipeableViews> */}
      <AutoPlaySwipeableViews
        style={styles.root}
        slideStyle={styles.slideContainer}
      >
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          slide n°1
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          slide n°2
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          slide n°3
        </div>
      </AutoPlaySwipeableViews>
    </>
  );
};
const KYC = () => {
  return (
    <div>
      <HeaderArea title={"KYC"} />
      <div className="w-full">
        <SwipeableImageGallery />
      </div>
    </div>
  );
};

export default KYC;
