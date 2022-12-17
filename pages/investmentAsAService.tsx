// import BoldSection from "../../components/organism/baas";
import ModernChart from "../../assets/BAAS/modernFin.png";
import shield from "../../assets/BAAS/shield.png";
import phoneImage from "../../assets/BAAS/phone.png";
import dashboard from "../../assets/BAAS/dashboard.png";
import { Avatar, Divider, Link } from "@mui/material";
import {
  CheckBox,
  CheckBoxRounded,
  CheckCircle,
  CheckCircleOutlined,
  Image as MUIImage,
  KeyboardArrowRightOutlined,
  Money,
} from "@mui/icons-material";
import HeaderArea from "../components/organism/HeaderArea";
import HeaderSubImage from "../components/organism/HeaderSubImage";
import BaasBasicSection from "../components/organism/BaasBasicSection";
import TabSwitchTest from "../components/molecules/TabSwitchTest";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import anime from "animejs";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import Fade from "@mui/material/Fade";
import Image from "next/image";

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
  const [sliderWidth, setSliderWidth] = useState(0);
  const [switched, setSwitch] = useState(false);
  const [choice, setChoice] = useState(true);

  const switchDiv = useRef(null);
  const container = useRef(null);
  const withPav = useRef(null);
  const withoutPav = useRef(null);
  const rightBox = useRef(null);
  const leftBox = useRef(null);
  const svgPath = useRef(null);

  let containerProps;
  let motionRectProps;
  let withoutPavProps;
  let withPavProps;

  const intro = () => {
    var tl = gsap.timeline({ defaults: { duration: 0.4 } });
    tl.to(switchDiv.current, {
      x: containerProps.width - (withPavProps.width + 7),
    })
      .to(
        rightBox.current,
        {
          x: "5rem",
        },
        "<"
      )
      .to(leftBox.current, { x: "-5rem" }, "<");

    return tl;
  };

  const conclusion = () => {
    var tl = gsap.timeline();
    tl.to(switchDiv.current, { x: 0, duration: 0.4 })
      .to(
        rightBox.current,
        {
          x: 0,
        },
        "<"
      )
      .to(leftBox.current, { x: 0 }, "<");

    return tl;
  };

  const switchLength = () => {
    setSliderWidth((prev) => withoutPavProps.width + prev);
  };

  const moveRight = () => {
    setSwitch(true);
    intro();
  };

  const moveLeft = () => {
    conclusion();
    setSwitch(false);
  };

  useLayoutEffect(() => {
    withoutPavProps = withoutPav.current.getBoundingClientRect();
    withPavProps = withPav.current.getBoundingClientRect();
    containerProps = container.current.getBoundingClientRect();
    motionRectProps = switchDiv.current.getBoundingClientRect();
  });

  useEffect(() => {
    if (!switched) {
      setSliderWidth(withoutPavProps.width);
      //   setTimeout(() => {
      //     setSliderWidth(withoutPavProps.width);
      //   });
    }
    if (switched) setSliderWidth(withPavProps.width);
    // intro();
  });

  return (
    <>
      <div className="my-12">
        <div className="flex flex-col w-full my-12 justify-center items-center">
          <h2 className="text-5xl px-10 py-2">
            {"We’ve done the heavy lifting for you"}
          </h2>
          {/* <div ref={container} className=" w-10/12 relative bg-blue-800 "> */}
          <div ref={container} className="w-10/12 my-2 md:w-3/12 relative ">
            <div
              ref={switchDiv}
              // className="rounded-full bg-blue-300 h-6 w-32"
              className={`rounded-full ${
                switched ? `bg-sky-600` : `bg-sky-300`
              } h-6 p-2`}
              style={{ width: sliderWidth + 10 }}
            ></div>
            <div className="absolute flex top-0 justify-between w-full">
              <div
                className="cursor-pointer pl-2"
                ref={withoutPav}
                onClick={moveLeft}
              >
                Without Pavelon
              </div>
              <div
                ref={withPav}
                className={`cursor-pointer px-1 ${switched && "text-white"}`}
                onClick={moveRight}
              >
                With Pavelon
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 md:w-6/12 m-auto my-12">
        {switched ? (
          <div className="flex justify-between">
            <Fade in={true} timeout={1000}>
              <div className="bg-sky-600 h-12 w-12 rounded-2xl"></div>
            </Fade>{" "}
            <Fade in={true} timeout={1000}>
              <div className="bg-sky-600 h-12 w-12 rounded-2xl"></div>
            </Fade>{" "}
            <Fade in={true} timeout={1000}>
              <div className="bg-sky-600 h-12 w-12 rounded-2xl"></div>
            </Fade>
          </div>
        ) : (
          <div className="flex justify-between">
            <Fade in={true} timeout={1000}>
              <div className="h-10 w-4 relative">
                <Image
                  alt=""
                  fill
                  // className="h-4 w-4"
                  src={"/investmentAsAService/left.png"}
                />
              </div>
            </Fade>
            <Fade in={true} timeout={1000}>
              <Avatar>x</Avatar>
            </Fade>
            <Fade in={true} timeout={1000}>
              <Avatar>x</Avatar>
            </Fade>
            <Fade in={true} timeout={1000}>
              <Avatar>x</Avatar>
            </Fade>
            <Fade in={true} timeout={1000}>
              <div className="h-10 w-4 relative">
                <Image
                  alt=""
                  fill
                  // className="h-4 w-4"
                  src={"/investmentAsAService/right.png"}
                />
              </div>
            </Fade>
          </div>
        )}
      </div>
      <BaasBasicSection title={"Turn Key Experiences"}>
        <p>
          Support your customers’ investment journeys without building your UI
          from scratch. We offer fully customizable front-end experiences that
          can be tailored to match your design system.
        </p>{" "}
        <ul className="ml-4 my-4 flex flex-col gap-y-2 md:gap-y-4">
          <li>
            <CheckCircle /> Fully Customizable
          </li>
          <li>
            <CheckCircle /> Suitable for engagement Access for new investors
          </li>
          <li>
            {" "}
            <CheckCircle /> Access for new investors
          </li>
        </ul>
      </BaasBasicSection>
      <BaasBasicSection title={"Developer first APIs"}>
        <p>
          For even more control over the user experience, implement using our
          API. Implementation is quick and simple thanks to our intuitive APIs
          and thorough documentation.
        </p>{" "}
        <ul className="ml-4 my-4 md:my-8 flex flex-col gap-y-2 md:gap-4">
          <li>
            <CheckCircle /> Developer Friendly
          </li>
          <li>
            <CheckCircle /> Easy to Setup
          </li>
          <li>
            <CheckCircle /> Secure and Complaint
          </li>
        </ul>
      </BaasBasicSection>
    </>
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
          <MUIImage />
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
