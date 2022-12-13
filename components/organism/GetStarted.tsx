import Image from "next/image";
import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { useInView } from "framer-motion";
import { Button } from "@mui/material";
function GetStarted() {
  const topCard = useRef(null);
  const inView = useInView(topCard);
  useEffect(() => {
    if (inView) {
      anime({
        targets: topCard.current,
        translateY: -40,
        opacity: 1,
        easing: "easeInOutQuad",
      });
    } else {
      anime({
        targets: topCard.current,
        translateY: 50,
      });
    }
  }, [inView]);

  return (
    <div className="w-full md:flex bg-gray-200 py-24">
      <div className="w-10/12 flex flex-col md:flex-row m-auto md:justify-between">
        <div className="w-12/12 md:w-4/12">
          <p>BUILDING CREDIT PRODUCTS HAS NEVER BEEN EASIER</p>
          <p className="text-3xl font-bold">Ready to get Started?</p>
          <p>
            See how Pavelon can help you build, embed or enhance your credit
            products so you can acquire more customers, increase revenue and
            accelerate growth.
          </p>

          <Button
            sx={{ margin: "10px 0" }}
            title="Get Started"
            variant="outlined"
          >
            Get Started
          </Button>
        </div>
        <div className="w-full md:w-4/12 relative flex flex-col items-center">
          <div ref={topCard} className="relative h-20 my-12 w-6/12 opacity-0">
            <Image
              fill
              alt="Get Started with Pavelon"
              src={"/getStarted/top.png"}
            />
          </div>
          <div className="relative h-40 w-6/12">
            <Image
              fill
              alt="Get Started with Pavelon"
              src={"/getStarted/buttom.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
