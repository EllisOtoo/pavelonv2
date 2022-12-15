import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/organism/Footer";

import { Poppins } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import { createContext, useState } from "react";

import HeaderArea from "../components/organism/HeaderAreaLargerImages";
import NavBar from "../components/organism/NavBar";
import PopUpNav from "../components/organism/PopUpNav";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TabSwitchTest from "../components/molecules/TabSwitchTest";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import {
  AccountBalance,
  AccountBox,
  Balance,
  Book,
  ContactPage,
  History,
  LogoDev,
  Money,
  People,
  Phone,
  SearchRounded,
  Shield,
  Wallet,
  EmojiPeople,
} from "@mui/icons-material";
import { Zoom } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
});

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const IndexContext = createContext<null | object>(null);

const subNavItems = [
  [
    {
      title: "Kyc",
      url: "/kyc",
      icon: <BadgeOutlinedIcon />,
      description:
        "Conduct comprehension KYC on boarding with real time verification",
    },
    {
      title: "Identity API",
      url: "/identity",
      icon: <FingerprintOutlinedIcon />,
      description: "Authenticate users on your platform",
    },
    {
      title: "Capital by API",
      url: "/identity",
      icon: <Balance />,
      description: "Lend money to users at scale",
    },
    {
      title: "Digital Accounts API",
      url: "/identity",
      icon: <AccountBox />,
      description: "Flexible and simple opening of accounts by users",
    },
  ],
  [
    {
      title: "BAAS",
      url: "/baas",
      icon: <AccountBalanceOutlinedIcon />,
      description: "Embed financial services in your platform or products.",
    },
    {
      title: "Investment as a service",
      url: "/digitalLendingApi",
      icon: <Wallet />,
      description: "Grant your customers the ability to own investments",
    },
    {
      title: "Insurance as a service",
      url: "/digitalLendingApi",
      icon: <Shield />,
      description: "Embed insurance in your platform",
    },
  ],
  [
    {
      title: "Creditmall",
      url: "/digitalLendingApi",
      icon: <Book />,
      description:
        "How Credit Mall moved from zero to hero using Pavelon’s API.",
    },
    {
      title: "Credify",
      url: "/digitalLendingApi",
      icon: <Book />,
      description:
        "How credify used Pavelon’s API to create an end to end solution for financial institution.",
    },
  ],
  [
    {
      title: "Contact",
      url: "/digitalLendingApi",
      icon: <Phone />,
      description: "",
    },
    {
      title: "Our Story",
      url: "/digitalLendingApi",
      icon: <People />,
      description: "",
    },
    {
      title: "Join Us",
      url: "/digitalLendingApi",
      icon: <EmojiPeople />,
      description: "",
    },
  ],
];

export default function App({ Component, pageProps }: AppProps) {
  const [showSubNav, setShowSubNav] = useState(false);
  const [subNavContentIndex, setSubNavContentIndex] = useState(0);
  const [subNavTitle, setSubNavTitle] = useState("");
  const matches = useMediaQuery("(max-width:600px)");
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <IndexContext.Provider
          value={{
            setShowSubNav,
            showDropDown,
            setShowDropDown,
            setSubNavContentIndex,
            matches,
            subNavTitle,
            showSubNav,
            setSubNavTitle,
          }}
        >
          <NavBar />
          {/* {showSubNav && (
            <PopUpNav menuToDisplay={subNavItems[subNavContentIndex]} />
          )} */}
          <PopUpNav menuToDisplay={subNavItems[subNavContentIndex]} />
          <style jsx global>{`
            html {
              font-family: ${poppins.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} setShowSubNav={setShowSubNav} />
          <Footer />
        </IndexContext.Provider>
      </ThemeProvider>
    </>
  );
}
