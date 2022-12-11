import React, { Children } from "react";
import Image from "next/image";
import SectionHeader from "../atoms/SectionHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import SectionWithIcon from "../molecules/SectionWithIcon";

export default function BasicSection({
  imageUrl,
  title,
  children,
  backgroundColor = "#f4f3f2",
  reverse,
}) {
  return (
    <div className={`flex flex-col md:flex-row`}>
      <div
        className={`w-10/12 m-auto flex flex-col my-12 border-l pl-4 items-start md:flex-row md:items-stretch ${
          reverse && "md:flex-row-reverse"
        }  border-black`}
      >
        <SectionHeader textSize={"2rem"} title={title} />
        <div>{children}</div>
        {imageUrl ? (
          <Image alt="Image" width={300} height={400} src={imageUrl} />
        ) : (
          <div className="bg-gray-100 h-80 my-8 rounded-2xl flex items-center justify-center w-80 ">
            Placeholder
          </div>
        )}
      </div>
    </div>
  );
}

// export default BasicSection;
