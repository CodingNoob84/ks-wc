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
      className="md:w-80 h-[500px] border rounded-lg shadow-lg"
    >
      {children}
    </motion.div>
  );
};
