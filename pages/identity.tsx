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
      <HeaderArea title={"Identity API"} imageUrl="/IdentityApi/identity.png">
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
      </div>
    </div>
  );
};

export default KYC;
