import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { IndexContext } from "../../pages";
import Link from "next/link";

function SiteLogo({ dimensions = null }) {
  const { matches } = useContext(IndexContext);
  return (
    <div
      className={`${dimensions ? dimensions.height : "h-8"} ${
        dimensions ? dimensions.width : "w-36"
      } relative`}
    >
      {" "}
      <Link href={"/"}>
        <Image fill src="/PavelonLogoWhite.png" alt="Pavelon Logo" />
      </Link>
    </div>
  );
}

export default SiteLogo;
