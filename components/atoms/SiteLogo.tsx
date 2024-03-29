import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IndexContext } from "../../pages/_app";

function SiteLogo({ dimensions = null, logoUrl = "/PavelonLogo.png" }) {
  const { subNavTitle, showSubNav, setShowSubNav, setShowDropDown, matches } =
    useContext(IndexContext);
  // const matches = true;
  return (
    <div
      className={`${dimensions ? dimensions.height : "h-8"} ${
        dimensions ? dimensions.width : "w-36"
      } relative`}
    >
      <Link
        onClick={() => {
          setShowDropDown(false);
          setShowSubNav(false);
        }}
        href={"/"}
      >
        {/* <Image fill src="/PavelonLogoWhite.png" alt="Pavelon Logo" /> */}
        <Image fill src={logoUrl} alt="Pavelon Logo" />
      </Link>
    </div>
  );
}

export default SiteLogo;
