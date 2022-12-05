import React from "react";
import MenuItem from "../atoms/MenuItem";
import { Ul } from "../styled/styled";
import styles from "../organism/styles/navbar.module.css";

type MenuList = {
  list: { id: number; title: string; subItems: string[] }[];
};

function MenuList({ list }: MenuList) {
  return (
    <Ul
      className={`flex flex-col md:flex-row md:gap-12 text-white ${styles.fadeIn}`}
    >
      {list.map((menu) => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </Ul>
  );
}

export default MenuList;
