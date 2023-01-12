import React from "react";
import MenuItem from "../atoms/MenuItem";
import { Ul } from "../styled/styled";
import styles from "../organism/styles/navbar.module.css";

type MenuList = {
  underline: Boolean;
  list: { id: number; title: string; subItems: string[] }[];
};

const MenuList = React.forwardRef(({ list, underline }: MenuList, ref) => {
  return (
    <ul
      ref={ref}
      className={`flex flex-col gap-2 md:gap-12 ${
        underline ? "divide-y" : ""
      } md:flex-row md:gap-12${styles.fadeIn}`}
    >
      {list.map((menu) => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </ul>
  );
});

MenuList.displayName = "Hello World";

export default MenuList;
