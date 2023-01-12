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
        // className={`absolute  md:h-auto z-40 left-[8%] m-auto p-12 w-10/12  bg-gray-900 rounded-lg text-white`}
        className={`absolute md:h-auto z-40 right-[8%] m-auto p-12 w-4/12  bg-sky-900 text-white`}
      >
        <div ref={subNavContent}>
          {/* <ul className="flex max-h-[24rem] overflow-scroll md:overflow-visible gap-6 flex-col md:grid md:grid-flow-col md:auto-cols-fr"> */}
          <ul className="flex max-h-[24rem] overflow-scroll md:overflow-visible gap-6 flex-col md:grid md:grid-col-1 md:auto-cols-fr">
            {menuToDisplay.map((item) => (
              <li key={item} className="text-sky-100 flex gap-5">
                {item.icon}
                <div className="cursor-pointer w-full">
                  <Link href={item.url}>
                    <span
                      className="font-bold text-xl"
                      onClick={() => {
                        setShowDropDown(false);
                        setShowSubNav(false);
                      }}
                    >
                      {item.title}
                    </span>
                  </Link>
                  <hr style={{ width: "2rem" }} />
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
