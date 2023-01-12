import Image from "next/image";
import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Paper, useMediaQuery } from "@mui/material";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from "nuka-carousel/lib/carousel";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function LogoStripAnimated({ imageUrls, headertitle }) {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <>
      <div className="my-12 flex flex-col  justify-between w-10/12 m-auto">
        <p className="text-4xl w-12/12">
          Powering businesses, {matches ? <br /> : ""} small and large
        </p>
        <div className="w-full my-4 ">
          <Carousel
            speed={200}
            className=""
            defaultControlsConfig={{
              nextButtonOnClick: (event: React.MouseEvent) => {},
              pagingDotsStyle: { display: "none" },
              nextButtonStyle: { display: "none" },
              prevButtonStyle: { display: "none" },
            }}
            slidesToShow={4}
            autoplay
            wrapAround
            autoplayReverse
          >
            <Image
              width={200}
              height={50}
              alt=""
              src={"/logostrip/creditmall.png"}
            />
            <Image
              width={200}
              height={50}
              alt=""
              src={"/logostrip/credify.png"}
            />
            <Image
              width={170}
              height={50}
              alt=""
              src={"/logostrip/yango.f54ab341.png"}
            />
            <Image
              width={200}
              height={50}
              alt=""
              src={"/logostrip/gcb_logo.cb4c2a8d.png"}
            />
          </Carousel>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default LogoStripAnimated;
