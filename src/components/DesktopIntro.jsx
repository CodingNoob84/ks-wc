"use client";
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export const DesktopIntro = ({ setIntro }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="fixed inset-0 bg-black flex w-full justify-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/DesktopIntro.mp4" type="video/mp4" />
      </video>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ type: "spring", duration: 3, damping: 5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-10  transform  flex items-center justify-center"
        >
          <Button
            size="xl"
            onClick={() => setIntro(false)}
            className="rounded-full animate-bounce bg-purple-500 border border-red-500 text-white hover:bg-white/30 focus:bg-white/30 hover:ring-purple-500"
          >
            <span className="text-black font-extrabold">Open</span>
          </Button>
        </motion.div>
      )}
    </div>
  );
};
