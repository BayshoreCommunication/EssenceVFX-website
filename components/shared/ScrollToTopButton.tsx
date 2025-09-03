"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <motion.button
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-10 right-10 p-2 bg-black text-white rounded-full shadow-md hover:bg-gray-400 transition hidden lg:block"
        exit={{ opacity: 0, y: 90 }}
        initial={{ opacity: 0, y: 90 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={scrollToTop}
      >
        <MdOutlineKeyboardArrowUp className="text-white size-7" />
      </motion.button>
    )
  );
};

export default ScrollToTopButton;
