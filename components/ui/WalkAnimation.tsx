"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WalkAnimation: React.FC = () => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 1000; 
      const minScroll = 0;
      const maxTranslateX = window.innerWidth; 
      const percentage = Math.min(
        Math.max((scrollY - minScroll) / (maxScroll - minScroll), 0),
        1
      );
      setTranslateX(percentage * maxTranslateX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-80 bg-transparent">
      <motion.div
        className="flex justify-center items-center z-0 pl-10"
      >
        <img
          src="/gif/walk.gif"
          alt="Theatre GIF"
          className="w-1/2 opacity-30"
        />
      </motion.div>
    </div>
  );
};

export default WalkAnimation;
