"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lobster } from "next/font/google";
import { AnimatedText } from "./AnimatedText";

const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });

export const HeaderTest = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className={`w-80 py-2 ${lobster.className}`}
    >
      <div className="flex justify-center items-center border rounded-lg py-2 hover:shadow-[2px_10px_10px_0px_#ecc94b] overflow-hidden">
        <AnimatedText text="Full Stack Web Dev" />
      </div>
    </motion.div>
  );
};
