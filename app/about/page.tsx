"use client";

import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Footer from "../Components/Footer";
import BackToTop from "../Components/BackToTop";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../Components/ThemeToggle"; // Assuming this is the path to your ThemeToggle component

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // Track if the component has mounted

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // User has scrolled down
      } else {
        setIsScrolled(false); // User is at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set mounted to true after the component is mounted on the client
    setMounted(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering on the server before hydration
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="relative min-h-screen">
        {/* Header */}
        <Header />
        {/* Navbar */}
        <Navbar isScrolled={isScrolled} />
        
        {/* Theme Toggle Button */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        {/* Main Content */}
        <main>
          <About />
        </main>

        {/* Footer */}
        <Footer />
        {/* Back To Top Button */}
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default Home;
