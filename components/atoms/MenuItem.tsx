import React, { useContext, useEffect, useState } from "react";
import { IndexContext } from "../../pages/_app";

type MenuProp = {
  menu: { id: number; title: string; subItems: string[] };
  //   title: string;
};

function MenuItem({ menu }: MenuProp) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setShowSubNav, setSubNavContentIndex, setSubNavTitle, showSubNav } =
    useContext(IndexContext);

  useEffect(() => {}, []);

  const expandRelativeMenu = () => {
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
      className="hover:text-sky-700 cursor-pointer"
      // onMouseEnter={expandRelativeMenu}
      onMouseOver={expandRelativeMenu}
      onMouseLeave={collapse}
    >
      {menu.title}
    </li>
  );
}

export default MenuItem;
