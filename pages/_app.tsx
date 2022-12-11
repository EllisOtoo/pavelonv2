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
  ["KYC", "Identity API"],
  ["BAAS", "Investment As A Service", "Insurance As A Service"],
  ["Credify", "Credify Mall"],
  [
    "Digital Lending API",
    "Capital By API",
    "KYC/Onboarding API",
    "Digital Accounts API",
  ],
];

export default function App({ Component, pageProps }: AppProps) {
  const [showSubNav, setShowSubNav] = useState(false);
  const [subNavContentIndex, setSubNavContentIndex] = useState(0);
  const [subNavTitle, setSubNavTitle] = useState("");
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <>
      <ThemeProvider theme={theme}>
        <IndexContext.Provider
          value={{
            setShowSubNav,
            setSubNavContentIndex,
            matches,
            subNavTitle,
            setSubNavTitle,
          }}
        >
          <NavBar />
          {showSubNav && (
            <PopUpNav menuToDisplay={subNavItems[subNavContentIndex]} />
          )}
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
