import React from "react";

function SectionHeader({ title, children, textSize }) {
  return (
    <>
      {children ? (
        children
      ) : (
        <h3
          style={{ fontSize: `${textSize ? textSize : ""}` }}
          className={`${
            textSize ? "leading-tight" : "text-4xl font-light leading-3"
          }`}
        >
          {title}
        </h3>
      )}
    </>
  );
}

export default SectionHeader;
