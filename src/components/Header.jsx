import React from "react";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-80 py-2"
    >
      <div className="flex justify-center items-center border rounded-lg py-2">
        <h1 className="text-2xl font-bold">Header</h1>
      </div>
    </motion.div>
  );
};
