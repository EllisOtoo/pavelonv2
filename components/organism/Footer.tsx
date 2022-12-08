import SiteLogo from "../atoms/SiteLogo";
import { TextField } from "@mui/material/";

const Footer = () => {
  return (
    <div className="w-12/12 flex flex-col gap-4 m-auto bg-gray-900 text-white p-12 ">
      <SiteLogo dimensions={{ width: "w-24", height: "h-4" }} />
      <div>
        <p>
          Copyright © 2022 Codat Limited. <br /> All rights reserved.{" "}
        </p>
      </div>
      <div className="flex gap-12">
        <div>
          <p className="text-2xl my-2">Solutions</p>
          <ul className="list-disc ml-5">
            <li className="underline">BAAS</li>
            <li className="underline">Insurance As a Service</li>
            <li className="underline">Investment As a Service</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl my-2">Products</p>
          <ul className="list-disc ml-5">
            <li className="underline">KYC</li>
            <li className="underline">Digital Accounts API</li>
            <li className="underline">Identity API</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-2xl my-2">Others</p>
        <ul className="list-disc ml-5">
          <li className="underline">Legal</li>
          <li className="underline">Careers</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
