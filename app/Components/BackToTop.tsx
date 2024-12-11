"use client";

import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the page is scrolled down
  const checkScroll = () => {
    setIsVisible(window.scrollY > 300); // Show button if scrolled down more than 300px
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 bg-gradient-to-r from-pink-500 to-blue-600 text-white rounded-full shadow-lg transform transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Back to Top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
