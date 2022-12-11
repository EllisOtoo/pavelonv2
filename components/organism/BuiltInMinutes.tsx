import React, { useEffect, useRef, useState } from "react";
import Features from "../molecules/Features";
import anime from "animejs";
import Typed from "react-typed";
import ImageBoxandList from "./ImageBoxAndList";
import { Button } from "@mui/material";
import { useInView } from "framer-motion";

function BuiltInMinutes() {
  const [startIndex, setIndex] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const builtInMinutes = useRef(null);
  const [typeRef, setTypeRef] = useState(null);

  const Inview = useInView(builtInMinutes);

  console.log("Inview only", Inview);
  console.log("Inview", !Inview, Boolean(typeRef));

  // let typeRef = useRef(null);
  useEffect(() => {
    if (Inview) {
      console.log("run!");
      typeRef.toggle();
    } else if (!Inview && Boolean(typeRef)) {
      console.log("stopped!");
      typeRef.toggle();
    }
    // if (!Inview && typeRef) {
    //   typeRef.stop();
    // }
    // typeRef.stop();
  }, [typeRef, Inview]);

  const stopTyping = () => {
    // console.log(typeRef);
  };
  const resumeTyping = () => {
    // typeRef.start(); // Stop typing
  };

  const handleComplete = () => {
    // typeRef.options.showCursor = false;
    // setShowCursor(!showCursor);
    // console.log("Call Complete", (typeRef.options.showCursor = false));
    // typeRef.showCursor = false;
  };

  return (
    <div className="flex flex-col bg-gray-900 text-white w-full py-24">
      <div className="flex flex-col md:flex-row w-10/12 md:justify-between m-auto gap-y-12 md:flex-wrap">
        <div className="md:w-4/12">
          <p>BUILT DEVELOPERS</p>
          <p className="text-3xl font-bold">Build-in minutes Launch in weeks</p>
          <p>
            With modern APIs and webhooks, you can build financial features
            using our clear, instructive guides in all the languages you use and
            love, from Node to Shell to Python
          </p>
        </div>
        <hr />
        <div className="w-full md:w-6/12 flex flex-col justify-between bg-gray-800 p-4 rounded-lg h-72">
          <div className="flex-none">
            <p>Installation</p>
            <hr className="my-2" />{" "}
          </div>
          <div ref={builtInMinutes} className="grow">
            {" "}
            <Typed
              style={{ color: "yellow" }}
              typedRef={(node) => setTypeRef(node)}
              cursorChar={"|"}
              strings={[
                `API Request and Response code goes here, API Request and Response code goes here API Request and Response code goes here, API Request and Response code goes here`,
              ]}
              typeSpeed={40}
              showCursor={showCursor}
              startDelay={2000}
              onComplete={handleComplete}
            />
          </div>
          <div className="justify-self-end flex-none">
            <hr />
            <div className="flex justify-end">
              <Button variant="outlined" className="my-2" color="neutral">
                Try
              </Button>
            </div>
          </div>
          {/* <button onClick={() => stopTyping()}>Stop</button> */}
        </div>

        <Features
          features={[
            {
              name: "Embeddable components",
              description:
                "Integrate our pre-built application widgets in under five minutes",
            },
            {
              name: "Extensive API",
              description:
                "Create a deeply immersive and seamless experience within your core product.",
            },
            {
              name: "Webhooks",
              description:
                "Get advanced, real-time notifications of offers, terms and more.",
            },
            {
              name: "Extensive API",
              description:
                "Breathe easy knowing data security and protection is at the core of what we do.",
            },
          ]}
        />
      </div>

      {/* <div className="text-animation">Welcome to codingflag</div> */}
    </div>
  );
}

export default BuiltInMinutes;
