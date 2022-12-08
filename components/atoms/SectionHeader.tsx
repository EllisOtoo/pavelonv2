import React from "react";

function SectionHeader({ title, children }) {
  return (
    <>
      {children ? children : <h3 className="text-4xl font-light">{title}</h3>}
    </>
  );
}

export default SectionHeader;
