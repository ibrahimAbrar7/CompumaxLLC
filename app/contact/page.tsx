"use client";

import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import React, { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Set scrolled state based on window scroll position
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Navbar - Updates styling when scrolled */}
      <Navbar isScrolled={isScrolled} />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
