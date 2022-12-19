import HeaderArea from "../components/organism/HeaderArea";
import SwipeableViews from "react-swipeable-views";
import React from "react";
import Image from "next/image";
import { autoPlay } from "react-swipeable-views-utils";
import SectionHeader from "../components/atoms/SectionHeader";
import BasicSection from "../components/organism/BasicSection";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Divider } from "@mui/material";
import PhoneLockedIcon from "@mui/icons-material/PhoneLocked";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import HeaderSubImage from "../components/organism/HeaderSubImage";
import GetStarted from "../components/organism/GetStarted";
// const styles = {
//   slide: {
//     padding: 15,
//     minHeight: 100,
//     color: "#fff",
//   },
//   slide1: {
//     background: "#FEA900",
//   },
//   slide2: {
//     background: "#B3DC4A",
//   },
//   slide3: {
//     background: "#6AC0FF",
//   },
// };

const styles = {
  root: {
    padding: "0 30px",
  },
  slideContainer: {
    padding: "0 10px",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableImageGallery = () => {
  // const [index, setIndex] = React.useState(0);

  // const handleChangeIndex = (newIndex) => {
  //   setIndex(newIndex);
  // };

  return <></>;
};
const KYC = () => {
  return (
    <div>
      <HeaderSubImage
        title={"The Next-Gen Platform For Automated Digital Lending."}
        imageUrl="/digitalLendingApi/original-338602e796dd39345b4be2ba15ac0250.png"
      >
        <p>
          Utilize Pavelon’s channel partners—like payment apps, payroll
          services, financial comparison websites, CRM solutions, or tax
          apps—for effective distribution at lower costs. Get pre-verified leads
          and offer complete or partial loan application journeys.
        </p>
      </HeaderSubImage>
      <div className="w-12/12 my-12 m-auto">
        <div className="w-10/12 m-auto">
          <p className="text-4xl">
            The easiest way to offer consumer loans in your own branding
          </p>
          <div className="w-10/12 flex gap-x-4 my-12 gap-y-4 md:justify-around flex-col items-center md:flex-row flex-wrap">
            {[
              "/digitalLendingApi/credify.0464054c (1).png",
              "/digitalLendingApi/jireh_logo.1b73473a.png",
              "/digitalLendingApi/ay_2.a34d3f7e.png",
              "/digitalLendingApi/vroom.3708cf99 (1).png",
            ].map((url) => (
              <Image width={160} height={100} src={url} alt="" />
            ))}
          </div>
        </div>
      </div>
      <div>
        <BasicSection
          imageUrl={"/IdentityApi/Screenshot 2022-12-11 at 12.45.59 PM.png"}
          title={
            "Originate Loans Your Way With The Most Flexible LOS Ever Built"
          }
        >
          <p>
            Streamline loan origination with modern user interfaces, an open API
            and built-in underwriting, process automation, document management
            and CRM features. You’re in control, with the ability to set up your
            exact data structure, lending products and origination workflow.
          </p>
        </BasicSection>
      </div>
      <div>
        <BasicSection imageUrl={""} noImage title={"Better Loan Origination"}>
          <p>
            Every lender is unique and needs a loan origination system that
            meets their origination process - not the other way around. In
            contrast to cookie-cutter legacy systems, Pavelon’s LOS was built to
            support the unique needs of innovative lenders, with modular
            capabilities and a modern design that streamlines work and increases
            productivity.
          </p>
          <p>
            Pavelon includes everything that’s required to operate a
            best-in-class lending business, from digital and automation features
            to credit and regulatory tools. Our platform’s unparalleled
            flexibility lets you customize the data structure, application
            views, underwriting processes and borrower communications to
            optimize your origination workflow.
          </p>
        </BasicSection>
      </div>
      <div>
        <BasicSection
          imageUrl={""}
          title={"Automate, Control And Optimize Complex Lending Decisions"}
        >
          <p>
            Digitize your underwriting, verification and other lending decisions
            to improve credit performance, ensure compliance and increase
            efficiency. Pavelon’s Decision Engine makes it easy to integrate
            data sources and build decision workflows – without writing any
            code.
          </p>
        </BasicSection>
      </div>
      <div>
        <BasicSection
          imageUrl={""}
          noImage
          title={
            "Completely Automated Decisioning For Underwriting, Verification And More"
          }
        >
          <p>
            Delivering a streamlined lending experience to your borrowers
            requires digitizing complex underwriting and verification decisions
            – going from manual to automated and from in-person to online.
            Pavelon’s Decision Engine was built to simplify and accelerate this
            effort.
          </p>
          <p>
            Unlike legacy systems that are rigid due to hard-coded logic, our
            Decision Engine enables decision automation with a powerful no-code
            user interface for implementing complex decision logic and a
            flexible open-API architecture for near-instant decision processing.
          </p>
        </BasicSection>
      </div>
      <div>
        <BasicSection
          imageUrl={""}
          title={
            "Launch A Best-In-Class Digital Channel And Fund More Loans, Faster            "
          }
        >
          <p>
            Create a self-service online application process for your borrowers
            with Pavelon’s flexible, multi-product digital lending portals. Our
            platform enables automated processing and we white-label your portal
            with a unique design and the ideal workflow for your customers.
          </p>
        </BasicSection>
      </div>
      <div>
        <BasicSection
          imageUrl={""}
          noImage
          title={
            "The Future Of Lending Is Digital, Pavelon Helps You Get There"
          }
        >
          <p>
            We’re changing how lenders launch digital products. In contrast to
            traditional lending platforms that limit innovation, Pavelon’s
            platform was built to enable it and our flexible technical
            architecture lets you quickly launch a best-in-class online
            application experience.
          </p>
          <p>
            Our lending portals are customized for you by a team that
            understands the challenges of digital lending. We previously built
            and sold our own lending platform and now combine deep lending and
            technical expertise to help our customers launch amazing products.{" "}
          </p>
        </BasicSection>
        <GetStarted />
      </div>
    </div>
  );
};

export default KYC;
