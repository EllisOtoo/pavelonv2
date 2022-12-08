import React, {
  useContext,
  useEffect,
  useRef,
  useLayoutEffect,
  useState,
} from "react";

import SiteLogo from "../atoms/SiteLogo";
import MenuList from "../molecules/MenuList";
import { StyledNav } from "../styled/styled";
// import styles from "./styles/navbar.module.css";

import useMediaQuery from "@mui/material/useMediaQuery";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import AnimateHeight from "react-animate-height";
import { IndexContext } from "../../pages";

function NavBar({ setShowSubNav, showSubNav }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [expandedNavHeight, setExpandedNavHeight] = useState(0);

  const navBarRef = useRef(null);
  const testRef = useRef(null);
  const menuList = useRef(null);

  //   const matches = useMediaQuery("(max-width:600px)");
  const { matches } = useContext(IndexContext);

  const MenuListComponent = (
    <MenuList
      ref={menuList}
      underline={matches ? true : false}
      list={[
        { id: 0, title: "Use Cases", subItems: ["One", "Two"] },
        { id: 1, title: "Solutions", subItems: ["Two", "Three"] },
        { id: 2, title: "Case Studies", subItems: ["Credify", "GCB"] },
        { id: 3, title: "Products", subItems: ["Credify", "GCB"] },
      ]}
    />
  );

  const setMenuHeight = () => {
    setExpandedNavHeight(navBarRef.current.getClientRects()[0].height);
  };

  //   console.log(matches);
  useEffect(() => {
    if (showDropDown) {
      setExpandedNavHeight(
        menuList.current.getClientRects()[0].height +
          navBarRef.current.getClientRects()[0].height
      );
    }
  }, [showDropDown]);

  return (
    <div
      ref={navBarRef}
      style={{
        height: `${
          showDropDown ? `${expandedNavHeight}px` : `${matches ? "8vh" : ""}`
        }`,
        transition: "height 0.3s",
      }}
      className={`bg-gray-900 py-4`}
    >
      <div
        onMouseOver={(e) => {
          if (e.target.tagName === "DIV") {
            setShowSubNav(false);
          }
        }}
        ref={testRef}
        className="w-10/12 m-auto flex md:justify-between flex-col items-center md:flex-row relative z-10"
      >
        <div className="flex w-full justify-between">
          <SiteLogo />
          {!!matches ? (
            <span
              onClick={() => {
                if (matches) {
                  setShowDropDown(!showDropDown);
                  setMenuHeight();
                }
                if (showSubNav) setShowSubNav(!showSubNav);
              }}
              className="text-white"
            >
              <MenuSharpIcon />
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
