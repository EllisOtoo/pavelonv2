import { useEffect, useState } from "react";

const useInview = (domRef) => {
  const [inView, setInview] = useState(false);
  useEffect(() => {
    ["scroll", "touchmove", "load"].forEach((event) => {
      //   document.addEventListener(event, () => {
      //     if (domRef.current.getClientRects()[0].top < 715) {
      //       setInview(true);
      //     } else {
      //       setInview(false);
      //     }
      //   });
    });
  }, []);

  return [inView];
};

export default useInview;
