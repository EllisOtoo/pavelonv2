import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import anime from "animejs";

const TabSwitchTest = () => {
  const [startingMenuItemHeight, setStartHeight] = useState(0);

  const startingMenuItem = useRef(null);
  const pillRef = useRef(null);
  const menuParent = useRef(null);

  useLayoutEffect(() => {
    setStartHeight(startingMenuItem.current.getBoundingClientRect().height);
  });
  useEffect(() => {
    const children = Array.from(menuParent.current.children);
    children.forEach((element) => {
      element.addEventListener("mouseover", (e) => {
        anime({
          targets: pillRef.current,
          translateX: e.target.getBoundingClientRect().left - 10,
          width: e.target.getBoundingClientRect().width + 20,
          height: e.target.getBoundingClientRect().height,
        });
      });
    });
  });

  return (
    <div className="relative">
      <div
        ref={menuParent}
        className="relative flex z-10 w-10/12 justify-between"
      >
        {/** loop childelements and attach mouseover effect dynamically to all its children instead of hardCoding */}
        <div ref={startingMenuItem}>One</div>
        <div
          /** Moved Event listener to useEffect, attached after component has mounted */
          /* onMouseOver={(e) => {
            anime({
              targets: pillRef.current,
              translateX: e.target.getBoundingClientRect().left - 10,
              width: e.target.getBoundingClientRect().width + 20,
            });
          }} */
          className=""
        >
          Two
        </div>
        <div>Two Hundred</div>
        <div>Three Hundred</div>
      </div>
      <div
        ref={pillRef}
        style={{ height: `${startingMenuItemHeight}px` }}
        className="absolute top-0 w-10 bg-yellow-300 rounded-xl"
      ></div>
    </div>
  );
};

export default TabSwitchTest;
