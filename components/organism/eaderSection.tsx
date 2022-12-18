import React, { useEffect, useState, useRef } from "react";
import { useAlert } from "react-alert";

// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

// import logo from "../../assets/logo.png";
// import Dropdown from "../Dropdown/Dropdown";
import darklogo from "../../assets/pav_logo_mob.png";
import { Link } from "react-router-dom";
import "./headersection.css";
import loansImage from "../../assets/lending _Image.png";
import loans_dashboard from "../../assets/dashboard_lenders.png";
/* This example requires Tailwind CSS v2.0+ */
import Buttons from "../../components/Buttons/Buttons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HeaderSection({
  title = false,
  children,
  noHeader = false,
  reverse = false,
  showSingleButton,
  controlSectionImage,
  smallerHeader,
  buttonText = "Start Now",
  makeMenuDark = false,
  isDarkHeaderText = false,
  introLogo = null,
  headerGradientClass,
  BelowCaptionText = "lorem ",
  animateClasses,
  Caption = "Pavelon Page Caption",
  oneImageHeader = false,
  SubCaption = "",
  LeadIn = "Lead In Text Sample",
  bg_colorClass = "bg_default",
  smallerBgGradient,
  logoBlack = false,
  showImage = true,
  noGradient = false,
  headerImages = [loansImage, loans_dashboard],
  noButton = true,
}) {
  const [showMenu, setMenu] = useState(false);
  const [isLarger, setisLarger] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const alert = useAlert();
  const element = useRef();

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setisLarger(e.matches);
    });
  }, [isLarger]);

  return (
    <div className={`headerSectionOnly relative ${noHeader ? "my-2" : ""}`}>
      <div style={{ position: "relative", zIndex: "2" }} className="relative">
        <div>
          <div
            className={`${
              showMenu ? "" : "hidden"
            } absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Link to={"/"}>
                    <img
                      width="100"
                      className="h-5 w-auto logo-mb"
                      src={darklogo}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setMenu(!showMenu)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <Link
                  to="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Product
                </Link>

                <Link
                  to="/use_cases"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Use Cases
                </Link>

                <Link
                  to="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700  hover:bg-gray-50"
                >
                  Marketplace
                </Link>

                <Link
                  to="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
              <Link
                to="#"
                className="hidden block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>

      {noGradient ? "" : <div className="gradientBackground"></div>}

      <div className={`relative  headerContainer`}>
        <div className="max-w-7xl mx-auto py-32 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div
            className={`${
              reverse ? "flex flex-row-reverse" : "flex"
            } items-center`}
            style={{
              justifyContent: "space-between",
              padding: "25px",
            }}
          >
            <div className={`${isLarger ? "w-5/12 " : "w-full"} flex flex-col`}>
              {introLogo && (
                <img src={introLogo} className="w-4/12" alt="Intro Logo" />
              )}
              {title && <p className="text-xl font-bold">{title}</p>}
              <p
                style={{
                  fontSize: !isLarger
                    ? "2rem"
                    : smallerHeader
                    ? "3rem"
                    : "5rem",
                }}
                className={`py-6 mt-1 ${
                  smallerHeader ? "font-bold" : "font-extrabold"
                } text-7xl  text-gray-900   sm:text-5xl sm:tracking-tight lg:text-6xl`}
              >
                {Caption}
              </p>
              {children ? children : BelowCaptionText}
              {false && <Buttons />}
            </div>
            {isLarger && showImage ? (
              <div
                // style={{ backgroundColor: noHeader ? "#F9F9F9" : "" }}
                className="flex w-5/12 start-self"
              >
                {headerImages
                  ? headerImages.map((eachImgSrc, idx, array) => {
                      if (idx > 0) {
                        return (
                          <img
                            key={idx}
                            src={eachImgSrc}
                            className={`animate__animated ${
                              animateClasses
                                ? animateClasses
                                : "animate__slideInRight"
                            }  animate__slow`}
                            style={{
                              marginTop: "3rem",
                            }}
                            alt=""
                          />
                        );
                      }
                      return (
                        <img
                          key={idx}
                          src={eachImgSrc}
                          className={`object-cover${
                            oneImageHeader
                              ? controlSectionImage
                                ? "w-6/12"
                                : "w-full"
                              : "w-4/12"
                          }  animate__animated ${
                            animateClasses
                              ? animateClasses
                              : " animate__slideInRight"
                          }`}
                          style={{
                            marginTop: "3rem",
                          }}
                          alt="Product Card "
                        />
                      );
                    })
                  : ""}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
