"use client";

import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import BackToTop from "./Components/BackToTop";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Check if page has been scrolled past the Header
      if (window.scrollY > 100) {
        setIsScrolled(true);  // User has scrolled down
      } else {
        setIsScrolled(false);  // User is at the top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Navbar - make it fixed when scrolled */}
      <Navbar isScrolled={isScrolled} />
      <Carousel />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop /> 
     </>
  );
};

export default Home;
