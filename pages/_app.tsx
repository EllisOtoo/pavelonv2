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
    { title: "Kyc", url: "/kyc" },
    { title: "Identity API", url: "/digitalLendingApi" },
  ],
  [
    { title: "BAAS", url: "/digitalLendingApi" },
    { title: "Investment As A Service", url: "/digitalLendingApi" },
    { title: "Insurance As A Service", url: "/digitalLendingApi" },
  ],
  [
    { title: "Creditmall", url: "/digitalLendingApi" },
    { title: "Credify", url: "/digitalLendingApi" },
  ],
  [
    { title: "Digital Lending API", url: "/digitalLendingApi" },
    { title: "Digital Lending API", url: "/digitalLendingApi" },
    { title: "Digital Lending API", url: "/digitalLendingApi" },
    { title: "Digital Lending API", url: "/digitalLendingApi" },
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
