"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";

const revealVariants = {
  hidden: {
    clipPath: "circle(10px at 30px 460px)",
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

export const SlideUpCard = ({ memeShow = true, memeImage, children }) => {
  const [reveal, setReveal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: "spring", duration: 3, damping: 5 }}
      className="relative w-[300px] h-[500px] border-4 rounded-xl shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
    >
      {memeShow && (
        <>
          <motion.div
            className="absolute w-full h-full bg-slate-400"
            initial="hidden"
            animate={reveal ? "visible" : "hidden"}
            variants={revealVariants}
          >
            <img
              src={memeImage ? memeImage : "/images/BachelorBash.png"}
              alt="Card Image"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div
            onClick={() => setReveal(!reveal)}
            className={`absolute bottom-4 left-4 w-8 h-8 rounded-full ${
              !reveal && "border"
            } text-sm font-extrabold flex justify-center items-center text-wrap cursor-pointer bg-white z-20`}
          >
            <div>{reveal ? "❌" : "😂"}</div>
          </div>
        </>
      )}
      {children}
    </motion.div>
  );
};
