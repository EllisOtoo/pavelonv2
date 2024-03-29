import React, { useContext, useEffect, useState } from "react";
import { IndexContext } from "../../pages/_app";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useMediaQuery } from "@mui/material";
type MenuProp = {
  menu: { id: number; title: string; subItems: string[] };
  //   title: string;
};

function MenuItem({ menu }: MenuProp) {
  const matches = useMediaQuery("(max-width:600px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const { setShowSubNav, setSubNavContentIndex, setSubNavTitle, showSubNav } =
    useContext(IndexContext);

  const spanIconRef = React.useRef(null);

  useEffect(() => {
    // if (spanIconRef.current) {
    //   if (matches && showSubNav) {
    //     spanIconRef.current.textContent = "-";
    //   } else {
    //     spanIconRef.current.textContent = "+";
    //   }
    // }
  }, [showSubNav]);

  const expandRelativeMenu = (e) => {
    console.log("menuItem clicked");
    // console.log(e.target.name);
    // if (matches && e.target) {
    //   if (e.target.children[0]) e.target.children[0].textContent = "-";
    //   // console.log(e.target.name);
    // }
    // setShowSubNav(!showSubNav);
    e.stopPropagation();
    setShowSubNav(true);
    setSubNavContentIndex(menu.id);
    setSubNavTitle(menu.title);
  };

  const collapse = (e) => {
    if (matches && e.target) {
      if (e.target.children[0]) e.target.children[0].textContent = "+";
    }
    // setShowSubNav(false);
  };

  return (
    <li
      // onClick={() => setSubNavTitle(menu.title)}
      className="hover:text-sky-700 cursor-pointer flex text-xl font-light md:text-xl justify-between"
      // onMouseOver={() => {
      //   // setShowSubNav(true);
      // }}
      // onClick={()=> {}}
      // onMouseLeave={(e) => {
      //   e.stopPropagation();
      //   setShowSubNav(false);
      //   console.log("Left");
      // }}
      onMouseOver={expandRelativeMenu}
      onClick={(e) => {
        e.stopPropagation();
        setShowSubNav(true);
      }}
      // onMouseLeave={collapse}
    >
      {menu.title}
    </li>
  );
}

export default MenuItem;
