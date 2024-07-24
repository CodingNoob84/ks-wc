import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    // Ensure the code only runs on the client side
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        setIsMobileScreen(window.innerWidth <= 768);
      };

      // Initialize screen size on first render
      handleResize();

      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { ...screenSize, isMobileScreen };
};

export default useScreenSize;
