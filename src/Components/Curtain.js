import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "../styles/Curtain.css";

const curtainVariant = {
  enter: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const colorVariant = {
  start: { scaleY: 1 },
  enter: {
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  end: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Curtain = () => {
  const location = useLocation();

  return (
    <AnimatePresence wait="exit">
      <motion.div
        key={location.pathname}
        initial="start"
        animate="enter"
        exit="end"
        variants={curtainVariant}
        className="curtain"
      >
        <motion.div variants={colorVariant} className="color-1" />
        <motion.div variants={colorVariant} className="color-2" />
        <motion.div variants={colorVariant} className="color-3" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Curtain;
