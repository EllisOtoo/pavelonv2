import Image from "next/image";
import React from "react";
import SectionHeader from "../atoms/SectionHeader";

// import Slider from "infinite-react-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Image
    alt=""
    src="/logostrip/credify.png"
    onDragStart={handleDragStart}
    role="presentation"
    fill
  />,
  <Image
    alt=""
    src="/logostrip/credify.png"
    onDragStart={handleDragStart}
    role="presentation"
    fill
  />,
  <Image
    alt=""
    src="/logostrip/credify.png"
    onDragStart={handleDragStart}
    role="presentation"
    fill
  />,
];

const Gallery = () => {
  return <AliceCarousel mouseTracking items={items} />;
};

function LogoStripAnimated({ imageUrls, headertitle }) {
  return (
    <div className=" w-10/12 mt-48 mb-24 items-center flex justify-between flex-col md:flex-row md:divide-x m-auto">
      <SectionHeader>
        <p className="text-4xl font-light">
          Powering businesses, <br /> small and large{" "}
        </p>
      </SectionHeader>
      <div>
        <div
          className="grid grid-cols-3 my-12 gap-y-12 gap-x-2 w-full"
          onTouchMove={(touchMoveEvent) => console.log(touchMoveEvent)}
          onTouchStart={(touchStartEvent) => console.log("Touhc started")}
        >
          {imageUrls.map((imageLink) => (
            <Image
              src={imageLink}
              width={100}
              className=""
              height={50}
              alt=""
            />
          ))}
        </div>
      </div>
      {/* <Gallery /> */}
    </div>
  );
}

export default LogoStripAnimated;
