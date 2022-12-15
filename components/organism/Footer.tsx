import SiteLogo from "../atoms/SiteLogo";
import { Divider, TextField } from "@mui/material/";

const Footer = () => {
  return (
    <div className="w-12/12 flex flex-col md:flex-row gap-4 m-auto bg-gray-900 text-white p-12 ">
      <div className="w-10/12 flex flex-col md:flex-row m-auto  md:my-12">
        <SiteLogo dimensions={{ width: "w-20", height: "h-4" }} />
        <div className="my-12 w-full flex flex-col md:flex-row md:my-0 md:justify-around">
          <p>
            Copyright © 2022 Codat Limited. <br /> All rights reserved.{" "}
          </p>
          <Divider
            light={true}
            orientation="vertical"
            className="text-white bg-sky-200"
          />
          <div className="flex flex-col md:flex-row gap-12 my-12 md:my-0">
            <div>
              <p className="text-2xl my-2 md:my-0">Solutions</p>
              <ul className="list-disc ml-5">
                <li className="underline">BAAS</li>
                <li className="underline">Insurance As a Service</li>
                <li className="underline">Investment As a Service</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl my-2 md:my-0">Products</p>
              <ul className="list-disc ml-5">
                <li className="underline">KYC</li>
                <li className="underline">Digital Accounts API</li>
                <li className="underline">Identity API</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl my-2 md:my-0">Others</p>
              <ul className="list-disc ml-5">
                <li className="underline">Legal</li>
                <li className="underline">Careers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
