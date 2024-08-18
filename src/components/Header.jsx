"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "./test/AnimatedText";

export const Header = () => {
  return (
    <div className="sticky top-0 flex justify-center w-full h-24 z-50 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className=" max-w-2xl mx-4 my-4 relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center">
          <div className="flex justify-center items-center">
            <AnimatedText text="Karthik weds Sharmi" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
