"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const AnimatedText = ({ text }) => {
  const letters = Array.from(text);
  const [animate, setAnimate] = useState(true);

  const staggerChildren = 0.25;
  const delayChildren = 0.25;
  const repeatDelay = 2; // seconds

  const totalAnimationDuration =
    (letters.length - 1) * staggerChildren + repeatDelay;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
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
      setAnimate(false); // Stop animation
      setTimeout(() => {
        setAnimate(true); // Restart animation
      }, 100); // Small delay to ensure re-render
    }, totalAnimationDuration * 1000); // Convert seconds to milliseconds

    return () => clearInterval(interval);
  }, [totalAnimationDuration]);

  return (
    <motion.div
      className="text-center font-extrabold text-purple-600"
      variants={container}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
    >
      {letters.map((letter, index) => (
        <motion.span className="inline-block" key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
