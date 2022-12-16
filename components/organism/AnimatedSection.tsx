import React, { useState, useEffect } from "react";
// import "./animatedSection.css";
import Link from "next/link";

function AnimatedSection({
  customColor = "#fff",
  caption,
  children = false,
  marginTop = "0",
  darker,
}) {
  return (
    <div
      style={{ backgroundColor: customColor, marginTop: marginTop }}
      className="lastSection"
    >
      <div className="ml-12 md:ml-56 md:w-8/12  xl:py-36 overflow-hidden">
        <div className="">
          {/* New Section */}
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-custom-blue font-semibold tracking-wide uppercase">
                Building credit products has never been easier
              </h2>
              <p
                className={`${
                  darker ? "text-gray-700" : "text-gray-100"
                } mt-2 text-3xl leading-8 font-extrabold  tracking-tight sm:text-4xl`}
              >
                {caption}
              </p>
            </div>
          </div>
          {/* New Section */}
          <div className="relative">
            <div className="relative  md:p-6">
              <div
                className={`lg:grid lg:grid-cols-2 ${
                  darker ? "text-gray-700" : "text-gray-100"
                } lg:gap-12 gap-x-24`}
              >
                {children}
              </div>
            </div>
          </div>
          {/* New Section */}
          {/* <div
            style={{ justifyContent: "space-around" }}
            className="flex px-8 text-gray-500"
          >
            {[
              "Sub Caption ",
              "Sub Caption 2",
              "Sub Caption 3",
              " Sub Caption 4",
            ].map((subCaption) => (
              <IconsTextCol subCaption={subCaption} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

const IconsTextCol = ({ subCaption = "Sample Text" }) => (
  <div
    style={{ color: "white", display: "flex", flexDirection: "column" }}
    className=""
  >
    <p
      style={{
        borderLeft: "2px solid #60d1fa",
        paddingLeft: "10px",
        fontSize: "1.3rem",
      }}
    >
      Sub Caption
    </p>
    <div style={{ display: "flex" }}>
      <Link to="/AKAK">
        <p
          style={{ color: "#ccc", marginTop: "20px" }}
          className="text-gray-500"
        >
          Lorem ipsum, dolor sit
        </p>
      </Link>
    </div>
  </div>
);

export default AnimatedSection;
