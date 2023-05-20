import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Landing.css";
import "../styles/Curtain.css";

const curtainVariant = {
  enter: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
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
      duration: 1,
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Landing = () => {
  const [isCurtainVisible, setIsCurtainVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsButtonClicked(true);
  };

  useEffect(() => {
    if (isButtonClicked) {
      setIsCurtainVisible(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [isButtonClicked, navigate]);

  return (
    <div className="landing">
      {!isButtonClicked && (
        <div className="button-wrapper">
          <h1 onClick={handleClick} className="button">
            CURTAIN CALL THEATER
          </h1>
        </div>
      )}
      <Curtain isVisible={isCurtainVisible} />
    </div>
  );
};

export default Landing;
