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
        translateY: -0,
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
      <div className="w-10/12 md:flex m-auto">
        <hr />
        <div className="md:w-6/12">
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
        <div className="md:w-6/12 relative flex flex-col items-center ">
          <div ref={topCard} className="relative h-20 my-12 w-4/12">
            <Image
              fill
              alt="Get Started with Pavelon"
              src={"/getStarted/top.png"}
            />
          </div>
          <div className="relative h-40 w-4/12">
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
