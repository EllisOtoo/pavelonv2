import React from "react";

function SectionHeader({ title, children, textSize, style = {} }) {
  return (
    <>
      {children ? (
        children
      ) : (
        <h3
          style={{ fontSize: `${textSize ? textSize : null}`, ...style }}
          className={`${textSize ? "" : "text-4xl font-light"}`}
        >
          {title}
        </h3>
      )}
    </>
  );
}

export default SectionHeader;
