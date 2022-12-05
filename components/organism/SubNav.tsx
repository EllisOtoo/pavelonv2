import React, { Children, useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";

function SubNav({ menuToDisplay, Children }: { menuToDisplay: string[] }) {
  // add animejs js motion effect on mount
  // remove on unmount
  const subNavRef = useRef(null);

  useEffect(() => {
    anime({
      targets: subNavRef.current,
      translateY: [8],
    });
    return () => {
      anime.remove(subNavRef.current);
    };
  }, []);

  console.log("menu", menuToDisplay);

  return (
    <div
      ref={subNavRef}
      className={`absolute  z-10 left-[8%] m-auto p-12 w-10/12  bg-gray-900 rounded-lg text-white`}
    >
      <p className="text-2xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
        deleniti, architecto officia debitis magnam itaque nihil a.
      </p>
      <hr className={"my-4"} />
      <ul className="flex">
        {menuToDisplay.map((item) => (
          <li className="text-sky-100 flex gap-12">
            <AppsSharpIcon />
            <div className="w-4/12">
              <span className="font-bold"> {item}</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
          </li>
        ))}
      </ul>
      {Children && Children}
    </div>
  );
}

export default SubNav;
