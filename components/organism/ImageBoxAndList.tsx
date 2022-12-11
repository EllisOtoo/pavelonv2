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
      <div className="relative h-40 w-12/12 md:w-6/12 md:h-96">
        <Image fill src={image} alt="" />
      </div>

      <div className={`${flexCol && "w-full"} md:w-6/12 `}>
        <ul className="grid grid-cols-1  divide-y divide-gray-200">
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
