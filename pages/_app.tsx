import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/organism/Footer";

import { Poppins } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import { createContext, useState } from "react";

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
  Book,
  History,
  LogoDev,
  People,
  SearchRounded,
  Shield,
  Wallet,
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
    { title: "Kyc", url: "/kyc", icon: <BadgeOutlinedIcon /> },
    {
      title: "Identity API",
      url: "/digitalLendingApi",
      icon: <FingerprintOutlinedIcon />,
    },
  ],
  [
    {
      title: "BAAS",
      url: "/digitalLendingApi",
      icon: <AccountBalanceOutlinedIcon />,
    },
    {
      title: "Investment as a service",
      url: "/digitalLendingApi",
      icon: <Wallet />,
    },
    {
      title: "Insurance As A Service",
      url: "/digitalLendingApi",
      icon: <Shield />,
    },
  ],
  [
    { title: "Creditmall", url: "/digitalLendingApi", icon: <Book /> },
    { title: "Credify", url: "/digitalLendingApi", icon: <Book /> },
  ],
  [
    { title: "About Us", url: "/digitalLendingApi", icon: <History /> },
    { title: "Team", url: "/digitalLendingApi", icon: <People /> },
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
