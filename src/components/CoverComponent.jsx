"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { OpenButton } from "./OpenButton";

export const CoverComponent = ({ setIntro }) => {
  const [show, setShow] = useState(true);
  const [showButterflies, setShowButterflies] = useState(false);

  useEffect(() => {
    if (!show) {
      const timer = setTimeout(() => {
        console.log("entry");
        setShowButterflies(false);
      }, 3000); // Duration of the butterfly animation

      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 1, delay: 0.5 } }}
            className="w-full flex flex-col justify-center items-center"
          >
            <div>
              <div>Content vs Content</div>
              <div
                onClick={() => {
                  setShow(false);
                  setShowButterflies(true);
                  setIntro(false);
                }}
                className=" cursor-pointer p-2"
              >
                <OpenButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <img src="./images/giphy.webp" className="w-full" /> */}
      {/* {showButterflies && <img src="./images/giphy.webp" className="w-full" />} */}
    </div>
  );
};
