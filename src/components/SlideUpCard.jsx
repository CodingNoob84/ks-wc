"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export const SlideUpCard = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: "spring", duration: 3, damping: 5 }}
      className="w-[300px] h-[500px] border-4 rounded-xl shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
    >
      {children}
    </motion.div>
  );
};
