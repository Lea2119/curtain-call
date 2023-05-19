import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Landing.css";

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

const textVariant = {
  start: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
  end: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const colorVariant = {
  start: { scaleY: 1 },
  enter: {
    scaleY: 0,
    transition: {
      duration: 0.5,
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

const Curtain = ({ isVisible }) => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
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
          <motion.div variants={textVariant} className="text-variant" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Landing = () => {
  const [isCurtainVisible, setIsCurtainVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsCurtainVisible(true);
    setTimeout(() => {
      navigate("/home");
    }, 1500); // Adjust the duration to match your animation
  };

  return (
    <div className="landing">
      <h1>THE CURTAIN CALL</h1>
      <button onClick={handleClick}>ENTER SITE</button>
      <Curtain isVisible={isCurtainVisible} />
    </div>
  );
};

export default Landing;
