import SiteLogo from "../atoms/SiteLogo";
import { Divider, TextField } from "@mui/material/";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-12/12 flex flex-col md:flex-row gap-4 m-auto bg-gray-900 text-white py-12 ">
      <div className="w-10/12 flex flex-col md:flex-row m-auto  md:my-12">
        <SiteLogo
          logoUrl="/PavelonLogoWhite.png"
          dimensions={{ width: "w-20", height: "h-4" }}
        />
        <div className="my-8 w-full flex flex-col md:flex-row md:my-0 md:justify-around">
          <p>
            Copyright © 2022 <br /> Pavelon Limited <br /> All rights reserved.{" "}
          </p>
          {/* <Divider
            light={true}
            orientation="vertical"
            className="text-white bg-sky-200"
          /> */}
          <div className="flex flex-col md:flex-row gap-12 my-12 md:my-0">
            <div>
              <p className="text-2xl my-2 md:my-0">Solutions</p>
              <ul className="list-disc ml-5">
                <Link href={"/baas"}>
                  <li className="">BAAS</li>
                </Link>
                <Link href={"/investmentAsAService"}>
                  <li className="">Investment As a Service</li>
                </Link>
              </ul>
            </div>
            <div>
              <p className="text-2xl my-2 md:my-0">Products</p>
              <ul className="list-disc ml-5">
                <Link href={"/kyc"}>
                  <li className="">KYC</li>
                </Link>
                <Link href={"/identity"}>
                  {" "}
                  <li className="">Identity API</li>
                </Link>
                <Link href={"/capitalByApu"}>
                  {" "}
                  <li className="">Capital By API</li>
                </Link>
                <Link href={"/digitalAccounts"}>
                  {" "}
                  <li className="">Digital Accounts API</li>
                </Link>
              </ul>
            </div>
            <div>
              <p className="text-2xl my-2 md:my-0">Use Cases</p>
              <ul className="list-disc ml-5">
                <Link href={"/neobanks"}>
                  {" "}
                  <li className="">NeoBanks</li>
                </Link>
                <Link href={"/commericialFintechs"}>
                  {" "}
                  <li className="">Commercial Fintechs</li>
                </Link>
                <Link href={"/retailFintechs"}>
                  {" "}
                  <li className="">Retails Fintechs</li>
                </Link>
                <Link href={"/embeddedBanking"}>
                  {" "}
                  <li className="">Embedded Banking</li>
                </Link>
                <Link href={"/banks"}>
                  {" "}
                  <li className="">Banks</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
