import Image from "next/image";
import React, { useEffect } from "react";

function GetStarted() {
  return (
    <div className="w-full md:flex bg-gray-200 py-24">
      <div className="w-10/12 md:flex m-auto">
        <hr />
        <div className="md:w-6/12">
          <p>BUILDING CREDIT PRODUCTS HAS NEVER BEEN EASIER</p>
          <p className="text-3xl font-bold">Ready to get Started?</p>
          <p>
            See how Pavelon can help you build, embed or enhance your credit
            products so you can acquire more customers, increase revenue and
            accelerate growth.
          </p>
        </div>
        <div className="md:w-3/12 relative h-96">
          <Image
            fill
            alt="Get Started with Pavelon"
            src={"/getStarted/api_Image.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
