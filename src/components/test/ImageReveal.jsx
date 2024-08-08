"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const revealVariants = {
  hidden: {
    clipPath: "circle(20px at 45px 440px)",
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 10,
    },
  },
  visible: {
    clipPath: "circle(1000px at 40px 440px)",
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 10,
    },
  },
};

export const ImageReveal = () => {
  const [reveal, setReveal] = useState(false);

  return (
    <div className="relative w-80 h-[500px] border rounded-lg shadow-xl overflow-hidden">
      <motion.div
        className="absolute w-full h-full bg-slate-400"
        initial="hidden"
        animate={reveal ? "visible" : "hidden"}
        variants={revealVariants}
      >
        <img
          src="/images/BachelorBash.png"
          alt="Card Image"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div
        onClick={() => setReveal(!reveal)}
        className={`absolute bottom-4 left-4 w-16 h-16 rounded-full ${
          !reveal && "border"
        } text-sm font-extrabold flex justify-center items-center text-wrap cursor-pointer bg-white z-20`}
      >
        <div>{reveal ? "close" : "click me"}</div>
      </div>
    </div>
  );
};
