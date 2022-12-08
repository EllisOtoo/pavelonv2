import Image from "next/image";
import React from "react";
// import PropTypes from "prop-types";

function ImageBoxandList({ image, listItems, flexCol }) {
  return (
    <div
      className={`flex ${
        flexCol && "flex-col"
      } md:flex-row w-10/12 m-auto gap-12 py-12`}
    >
      <Image width={500} height={200} src={image} alt="" />

      <div className={`${flexCol && "w-full"} md:w-6/12 `}>
        <ul className="grid grid-cols-1  divide-y divide-gray-500">
          {listItems.map(({ title, description }) => (
            <li className="py-4">
              <h3 className="font-bold text-lg">{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageBoxandList;
