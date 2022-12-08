import React from "react";

function Features({ features }: { features: object[] }) {
  const borderStyles = ["br", "bl", "tr", "tl"];

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-12">
      {features.map((feature, idx) => {
        return (
          <div className={``}>
            <h4 className="text-xl font-bold">{feature.name}</h4>
            <p>{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Features;
