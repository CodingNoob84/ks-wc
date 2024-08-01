"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedText = ({ text }) => {
  const letters = Array.from(text);
  const [key, setKey] = useState(0);

  const staggerChildren = 0.25;
  const delayChildren = 0.25;
  const repeatDelay = 2; // seconds

  const totalAnimationDuration =
    (letters.length - 1) * staggerChildren + repeatDelay;

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren * i,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, totalAnimationDuration * 1000); // Convert seconds to milliseconds

    return () => clearInterval(interval);
  }, [totalAnimationDuration]);

  return (
    <AnimatePresence>
      <motion.div
        key={key}
        className="overflow-hidden text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span className="inline-block" key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
