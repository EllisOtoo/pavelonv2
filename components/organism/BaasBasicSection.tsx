import Image from "next/image";
import React from "react";
import SectionHeader from "../atoms/SectionHeader";

function BaasBasicSection({ reverse, title, imageUrl, children, setWH }) {
  return (
    <div className={`flex flex-col md:flex-row`}>
      <div
        className={`w-10/12 m-auto flex flex-col my-12 border-l md:gap-12 pl-4 items-start md:flex-row md:items-center ${
          reverse && "md:flex-row-reverse"
        }  border-black`}
      >
        {imageUrl ? (
          <Image
            alt="Image"
            width={setWH ? setWH[0] : 250}
            height={setWH ? setWH[1] : 300}
            src={imageUrl}
          />
        ) : (
          <div className="bg-gray-100 h-80 my-8 rounded-2xl flex items-center justify-center w-80 ">
            Placeholder
          </div>
        )}
        <div className="flex flex-col md:w-8/12 gap-8 items-start">
          <SectionHeader textSize={"2rem"} title={title} />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default BaasBasicSection;
