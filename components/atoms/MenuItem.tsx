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

  useEffect(() => {}, []);

  const expandRelativeMenu = () => {
    // setShowSubNav(!showSubNav);
    setShowSubNav(true);
    setSubNavContentIndex(menu.id);
    setSubNavTitle(menu.title);
  };

  const collapse = (e) => {
    // setShowSubNav(false);
  };

  return (
    <li
      // onClick={() => setSubNavTitle(menu.title)}
      className="hover:text-sky-700 cursor-pointer flex justify-between"
      // onMouseOver={() => {
      //   // setShowSubNav(true);
      // }}
      onMouseEnter={expandRelativeMenu}
      // onClick={expandRelativeMenu}
      onMouseLeave={collapse}
    >
      {menu.title}{" "}
      {matches ? <span>{"+"}</span> : <KeyboardArrowDownOutlinedIcon />}
    </li>
  );
}

export default MenuItem;
