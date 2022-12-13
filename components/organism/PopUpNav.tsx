import React, {
  Children,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import anime from "animejs";
import Link from "next/link";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import { IndexContext } from "../../pages/_app";

function PopUpNav({ menuToDisplay, children }: { menuToDisplay: string[] }) {
  // add animejs js motion effect on mount
  // remove on unmount
  const subNavRef = useRef(null);
  const subNavContent = useRef(null);

  const { subNavTitle, showSubNav, setShowSubNav, setShowDropDown } =
    useContext(IndexContext);

  useLayoutEffect(() => {
    anime({
      targets: subNavContent.current,
      opacity: ["0%", "100%"],
      easing: "easeInOutQuad",
    });
  });

  const hideElement = (e) => {
    if (subNavRef.current && !subNavRef.current.contains(e.target)) {
      setShowSubNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideElement);
    anime({
      targets: subNavRef.current,
      translateY: 2,
    });
    return () => {
      document.removeEventListener("click", hideElement);
      anime.remove(subNavRef.current);
    };
  });

  if (showSubNav)
    return (
      <div
        ref={subNavRef}
        className={`absolute  z-40 left-[8%] m-auto p-12 w-10/12  bg-gray-900 rounded-lg text-white`}
      >
        <div ref={subNavContent}>
          <p className="text-2xl">{subNavTitle}</p>
          <hr className={"my-4"} />
          <ul className="flex flex-col md:flex-row">
            {menuToDisplay.map((item) => (
              <li key={item} className="text-sky-100 flex gap-12">
                {item.icon}
                <div className="cursor-pointer w-6/12">
                  <Link href={item.url}>
                    <span
                      className="font-light text-xl"
                      onClick={() => {
                        setShowDropDown(false);
                        setShowSubNav(false);
                      }}
                    >
                      {item.title}
                    </span>
                  </Link>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {children && children}
      </div>
    );
  return null;
}

export default PopUpNav;
