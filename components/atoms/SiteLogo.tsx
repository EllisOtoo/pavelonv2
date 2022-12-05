import React, { useEffect, useRef } from "react";
import Image from "next/image";

function SiteLogo() {
  return (
    <Image
      src="/PavelonLogoWhite.png"
      alt="Pavelon Logo"
      width={150}
      height={50}
    />
  );
}

export default SiteLogo;
