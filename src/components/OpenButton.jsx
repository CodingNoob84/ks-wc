"use client";
import { motion } from "framer-motion";

export const OpenButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      transition={{ type: "spring", duration: 3, damping: 5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      size="lg"
      className="rounded-full border flex justify-center items-center p-3 hover:ring-purple-500"
    >
      Open
    </motion.div>
  );
};
