// import BoldSection from "../../components/organism/baas";
import ModernChart from "../../assets/BAAS/modernFin.png";
import shield from "../../assets/BAAS/shield.png";
import phoneImage from "../../assets/BAAS/phone.png";
import dashboard from "../../assets/BAAS/dashboard.png";
import { Link } from "@mui/material";
import { Image, KeyboardArrowRightOutlined, Money } from "@mui/icons-material";
import HeaderArea from "../components/organism/HeaderArea";
import HeaderSubImage from "../components/organism/HeaderSubImage";
import BaasBasicSection from "../components/organism/BaasBasicSection";
import TabSwitchTest from "../components/molecules/TabSwitchTest";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import anime from "animejs";
// import BAASSection  from "../components/organism/BoldSection";

const BAAS_Section_Defaults = {
  altColor: "#f7fafe",
  singleImage: true,
  image: null,
  showButton: true,
  buttonTitle: ["Talk to our Experts", "Explore our Platform"],
  description:
    "Modern  financial products require a modern BaaS platform, Our Banking as a Service (BaaS) platform is designed from the ground up to be the effective engine that fuels any financial products or services you can imagine. It is adaptable, simple to connect to, and infinitely scalable.",
  mainCaption: "Banking as a Service -  We support the full account lifecycle",
};

const InvestmentAsAService = () => {
  return (
    <>
      {/* <TabSwitchTest /> */}
      <HeaderSubImage
        reverse
        subHeader={"We support the full account lifecycle"}
        imageUrl={"/investmentAsAService/investGoals.png"}
        title="Investment as a Service"
      >
        <p>
          Modern financial products require a modern BaaS platform, Our Banking
          as a Service (BaaS) platform is designed from the ground up to be the
          effective engine that fuels any financial products or services you can
          imagine. It is adaptable, simple to connect to, and infinitely
          scalable.
        </p>
      </HeaderSubImage>
      <HeavyLiftingTabSwitch />
      <div></div>
    </>
  );
};

const HeavyLiftingTabSwitch = () => {
  const [startingMenuItemHeight, setStartHeight] = useState(0);
  const [startingMenuItemWidth, setStartWidth] = useState(0);
  const [startingMeuLeftX, setStartingMeuLeftX] = useState(0);
  const [startingTopY, setstartingTopY] = useState(0);

  const startingMenuItem = useRef(null);
  const pillRef = useRef(null);
  const menuParent = useRef(null);

  useLayoutEffect(() => {
    // window.getComputedStyle(startingMenuItem, null);
    // console.log(startingMenuItem.current.getComputedStyle());
    const startingMenuProps = window.getComputedStyle(startingMenuItem.current);

    console.log(startingMenuProps.getPropertyValue("top"));

    setStartHeight(startingMenuItem.current.getBoundingClientRect().height);
    setStartWidth(startingMenuItem.current.getBoundingClientRect().width);
    setStartingMeuLeftX(startingMenuItem.current.getBoundingClientRect().left);
    setstartingTopY(startingMenuItem.current.getBoundingClientRect().top);
  }, []);

  useEffect(() => {
    // console.log(
    //   startingTopY,
    //   startingMenuItem.current.getBoundingClientRect().top
    // );
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
        className="relative px-4 flex z-10 py-4 px-2 w-10/12 justify-between m-auto"
      >
        {/** loop childelements and attach mouseover effect dynamically to all its children instead of hardCoding */}
        <div ref={startingMenuItem}>Without Pavelon</div>
        <div>With Pavelon</div>
      </div>
      <div
        ref={pillRef}
        style={{
          height: `${startingMenuItemHeight}px`,
          width: `${startingMenuItemWidth + 20}px`,
          left: `${startingMeuLeftX}px`,
          top: `${startingTopY}px`,
        }}
        className="absolute w-10  bg-yellow-300 rounded-xl"
      ></div>
    </div>
  );
};

function FeatureSet({ features }) {
  return (
    <>
      {features.map((perFeature, idx) => (
        <div
          style={{ paddingLeft: !idx ? 0 : "" }}
          className="flex flex-col w-full pt-4 md:pl-8 gap-2"
        >
          {/* <i className="fa-brands fa-font-awesome"></i>{" "} */}
          <Image />
          <p className="text-3xl font-bold">{perFeature.featureName}</p>
          <p className="text-base"> {perFeature.subText}</p>
          <div>
            <KeyboardArrowRightOutlined sx={{ color: "deep blue" }} />
            <Link to={"/"}> {perFeature.link} </Link>
            <i
              style={{ color: "#467ecf" }}
              className={`fa fa-chevron-right `}
              aria-hidden="true"
            ></i>
          </div>
        </div>
      ))}
    </>
  );
}
export default InvestmentAsAService;
