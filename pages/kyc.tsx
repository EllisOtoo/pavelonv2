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
      <HeaderArea
        title={"Easiest way to Verify and Onboard users."}
        imageUrl="/IdentityApi/identity.png"
      >
        <p>
          Verify Phone Numbers, ID Cards, and Addresses. Verify user’s consent
          in real-time with consent verification. Know that people are who they
          say they are, Faster.
        </p>
      </HeaderArea>
      <div>
        <BasicSection
          imageUrl={"/IdentityApi/Screenshot 2022-12-11 at 12.45.59 PM.png"}
          title={"Phone Number Verification"}
        >
          <p>
            Validate users with SMS, voice, WhatsApp, and time-based one-time
            passwords. We use two API endpoints to seamlessly check that a user
            is the owner of the phone number they provide. The start API
            endpoint When the user is validating their phone number, Verify
            sends the user a 4 -10 digit verification code via SMS, WhatsApp, or
            voice, and waits for their response. The check API endpoint Verify
            checks the user’s input matches the code. If they match, we register
            the phone number as approved.
          </p>
        </BasicSection>
        <Divider className="w-10/12 m-auto my-12" />
        <BasicSection title={"ID Verification"}>
          <p>
            Validate users by allowing users to upload a picture of their
            national ID. Details and the photograph on the ID must match that of
            the details provided by a new user as well as a live photograph of
            the new user to prevent fraudsters and impersonators from gaining
            access to the platform.
          </p>
        </BasicSection>
        <BasicSection title={"Consent Verification"}>
          <p>
            An innovative way to get the customer’s approval. Verify user’s
            consent in real-time with consent verification. Authenticate
            customers with just a live selfie with the user holding their ID
            Card. Fraud and Identity theft are rising and simple ‘I agree’
            checkboxes are not enough to take the user’s consent. They don’t
            provide any adequate evidence on who checked that box. Integrate
            Pavelon state-of-the-art Consent Verification Service to take the
            digital consent of your customers before proceeding. With
            anti-spoofing measures and advanced AI technology, Pavelon verifies
            and authenticates the user’s identity and consent note in real-time.
          </p>
        </BasicSection>
        <BasicSection title={"Address Verification"}>
          <p>
            An innovative way to get the customer’s approval. Verify user’s
            consent in real-time with consent verification. Authenticate
            customers with just a live selfie with the user holding their ID
            Card. Fraud and Identity theft are rising and simple ‘I agree’
            checkboxes are not enough to take the user’s consent. They don’t
            provide any adequate evidence on who checked that box. Integrate
            Pavelon state-of-the-art Consent Verification Service to take the
            digital consent of your customers before proceeding. With
            anti-spoofing measures and advanced AI technology, Pavelon verifies
            and authenticates the user’s identity and consent note in real-time.
          </p>
        </BasicSection>
      </div>
    </div>
  );
};

export default KYC;
