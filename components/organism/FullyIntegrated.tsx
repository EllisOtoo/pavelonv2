import { Link } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Button from "../atoms/Button";
import SectionHeader from "../atoms/SectionHeader";

function FullyIntegrated() {
  // * Use Query to change flex to column for smaller screens
  const [showMenu, setMenu] = useState(false);

  const refContainer = useRef();

  useEffect(() => {}, []);

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="w-10/12 m-auto">
        {/* BLOCKS STARTS HERE */}
        <SectionHeader
          title={
            "A fully integrated suite of Lending, eCommerce, and Payment products"
          }
        />
        <div className="flex text-base flex-col md:flex-row md:flex-wrap gap-8  my-6">
          <div className="md:w-4/12">
            We bring together everything that’s required to build lending into
            any product - from End User Application using our Digital Lending
            APIs to Disbursement or Payout. We also offer Card Issuing API for
            both virtual and physical cards.
            {/* <Buttons buttonTitle={"See more"} btnBGColor={"primary"} /> */}
          </div>
          <div className="md:w-6/12">
            Pavelon’s products also power “Buy Now, Pay Later” Services using
            our Commerce API. We also help companies onboard their users,
            process loans, collect loans, access financial data, and much more.
          </div>

          <div className="flex flex-col md:flex-row md:w-11/12 justify-around">
            <div className="w-6/12">
              <Link href="/kyc" className="">
                <Button title={"See More"} />
              </Link>
            </div>

            <div className="w-full">
              <div className="flex items-center">
                <div className="relative flex flex-col items-end">
                  <Image
                    src="/fullyIntegrated/middleImage_2_top.7013319b.png"
                    alt="creditcard"
                    width={300}
                    height={100}
                  />

                  <Image
                    src="/fullyIntegrated/middleImage_2_below.5d6e4f23 (1).png"
                    alt="creditcard"
                    width={150}
                    height={100}
                  />
                </div>
                <div>
                  <Image
                    src="/fullyIntegrated/middleImage_2_right.1ebd745b.png"
                    alt="creditcard"
                    width={500}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <MidHomepage /> */}
      </div>
    </div>
  );
}

export default FullyIntegrated;
