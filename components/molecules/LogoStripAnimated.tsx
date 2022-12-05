import Image from "next/image";
import React from "react";
import SectionHeader from "../atoms/SectionHeader";

function LogoStripAnimated({ imageUrls, headertitle }) {
  return (
    <div className=" w-10/12 py-12 flex justify-between flex-col md:flex-row md:divide-x m-auto">
      <SectionHeader>
        <p className="text-4xl font-light">
          Powering businesses, small and{" "}
          <span className="font-black ">LARGE</span>{" "}
        </p>
      </SectionHeader>
      <div
        className="flex flex-wrap justify-between md:px-12"
        onTouchMove={(touchMoveEvent) => console.log(touchMoveEvent)}
        onTouchStart={(touchStartEvent) => console.log("Touhc started")}
      >
        {imageUrls.map((imageLink) => (
          <Image src={imageLink} width={150} height={50} alt="" />
        ))}
      </div>
    </div>
  );
}

export default LogoStripAnimated;
