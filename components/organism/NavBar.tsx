import React, { useEffect, useRef, useState } from "react";
import SiteLogo from "../atoms/SiteLogo";
import MenuList from "../molecules/MenuList";
import { StyledNav } from "../styled/styled";
// import styles from "./styles/navbar.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

import AnimateHeight from "react-animate-height";

function NavBar({ setShowSubNav, showSubNav }) {
  const [showDropDown, setShowDropDown] = useState(false);

  const navBarRef = useRef(null);
  const testRef = useRef(null);

  const matches = useMediaQuery("(max-width:480px)");

  const MenuListComponent = (
    <MenuList
      list={[
        { id: 0, title: "Use Cases", subItems: ["One", "Two"] },
        { id: 1, title: "Solutions", subItems: ["Two", "Three"] },
        { id: 2, title: "Case Studies", subItems: ["Credify", "GCB"] },
      ]}
    />
  );

  console.log(matches);
  useEffect(() => {
    // const computed = getComputedStyle(testRef.current);
    // console.log(computed.getPropertyValue("padding-left"));
  }, []);

  return (
    <div
      ref={navBarRef}
      style={{
        height: `${showDropDown ? "20vh" : "6vh"}`,
        transition: "height 0.3s",
      }}
      className={`bg-gray-900 py-2`}
    >
      <div
        onMouseOver={(e) => {
          console.log(e.target.tagName);
          if (e.target.tagName === "DIV") {
            setShowSubNav(false);
          }
          //   e.stopPropagation();
        }}
        ref={testRef}
        className="w-10/12 m-auto flex md:justify-between flex-col items-center md:flex-row relative z-10"
      >
        <div className="flex w-full justify-between">
          <SiteLogo />
          {!!matches ? (
            <span
              onClick={() => {
                if (matches) setShowDropDown(!showDropDown);
                if (showSubNav) setShowSubNav(!showSubNav);
              }}
              className="text-white"
            >
              []
            </span>
          ) : (
            MenuListComponent
          )}
        </div>

        {showDropDown && MenuListComponent}
      </div>
    </div>
  );
}

export default NavBar;
