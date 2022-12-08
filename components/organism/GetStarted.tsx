import Image from "next/image";
import React, { useEffect } from "react";

function GetStarted() {
  return (
    <div className="w-full bg-gray-200 py-24">
      <div className="w-10/12 m-auto">
        <hr />
        <div>
          <p>BUILDING CREDIT PRODUCTS HAS NEVER BEEN EASIER</p>
          <p className="text-3xl font-bold">Ready to get Started?</p>
          <p>
            See how Pavelon can help you build, embed or enhance your credit
            products so you can acquire more customers, increase revenue and
            accelerate growth.
          </p>
        </div>
        <div>
          <Image
            width={300}
            height={300}
            alt="Get Started with Pavelon"
            src={"/getStarted/api_Image.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
