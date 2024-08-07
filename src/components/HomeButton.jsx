"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export const HomeButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="border  w-80 my-2 flex justify-center items-center bg-orange-300 py-3 rounded-lg cursor-pointer"
    >
      <Link href="/">Home</Link>
    </motion.div>
  );
};
