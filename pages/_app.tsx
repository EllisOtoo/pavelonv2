import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/organism/Footer";

import { Poppins } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import { createContext, useState } from "react";
import "./blobz.css";
import HeaderArea from "../components/organism/HeaderArea";
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
  CreditCard,
} from "@mui/icons-material";
import { Zoom } from "@mui/material";
import GetStarted from "../components/organism/GetStarted";

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
      title: "Digital Lending API",
      url: "/digitalLendingApi",
      icon: <CreditCard />,
      description: "The Next-Gen Platform For Automated Digital Lending.      ",
    },
    {
      title: "Capital by API",
      url: "/capitalByApi",
      icon: <Balance />,
      description: "Lend money to users at scale",
    },
    {
      title: "Digital Accounts API",
      url: "/digitalAccounts",
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
      url: "/investmentAsAService",
      icon: <Wallet />,
      description: "Grant your customers the ability to own investments",
    },
    /*   {
      title: "Insurance as a service",
      url: "/digitalLendingApi",
      icon: <Shield />,
      description: "Embed insurance in your platform",
    }, */
  ],
  [
    {
      title: "Neobanks",
      url: "/neobanks",
      icon: <Book />,
      description:
        "Reach markets in a matter of weeks rather than months or years.",
    },
    {
      title: "Commercial Fintechs",
      url: "/commercialFintechs",
      icon: <Book />,
      description: "An efficient payment process",
    },
    {
      title: "Retail Fintechs",
      url: "/retailFintech",
      icon: <Book />,
      description: "Open accounts, issue cards and facilitate payments.",
    },
    {
      title: "Embedded Banking",
      url: "/embeddedBanking",
      icon: <Book />,
      description: "Seamless banking solution for any business",
    },
    {
      title: "Banks",
      url: "/banks",
      icon: <Book />,
      description: "Increase topline earnings with new fintech clients.",
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
      <Head>
        <script
          src="https://kit.fontawesome.com/93a10edc31.js"
          crossorigin="anonymous"
        ></script>
      </Head>
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
          {/* <GetStarted /> */}
          <Footer />
        </IndexContext.Provider>
      </ThemeProvider>
    </>
  );
}
