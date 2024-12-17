"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// Define the type for props
type NavbarProps = {
  isScrolled: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to check if a link is active
  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`transition-all duration-300 bg-white dark:bg-slate-950 shadow-md ${
        isScrolled ? "fixed top-0 left-0 w-full z-40" : "relative"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
          <Image
              src="/cmaxlogo.png" // Light mode logo
              alt="Company Overview"
              width={250} // Set width (adjust as per your design)
              height={190} // Set height (adjust as per your design)
              className="h-16 dark:hidden" // Hide on dark mode
            />
            <Image
              src="/cmaxlogodark.png" // Dark mode logo
              alt="Company Overview"
              width={250} // Set width (adjust as per your design)
              height={190} // Set height (adjust as per your design)
              className="h-16 hidden dark:block" // Show only in dark mode
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm text-black font-medium tracking-[0.4em] font-poppins">
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-blue-600 dark:text-white" : "hover:text-blue-600 dark:text-white"
            } transition-colors duration-200`}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about") ? "text-blue-600 dark:text-white" : "hover:text-blue-600 dark:text-white"
            } transition-colors duration-200`}
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            className={`${
              isActive("/services") ? "text-blue-600 dark:text-white" : "hover:text-blue-600 dark:text-white"
            } transition-colors duration-200`}
          >
            SERVICES
          </Link>
          <Link
            href="/portfolio"
            className={`${
              isActive("/portfolio") ? "text-blue-600 dark:text-white" : "hover:text-blue-600 dark:text-white"
            } transition-colors duration-200`}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/contact"
            className={`${
              isActive("/contact") ? "text-blue-600 dark:text-white" : "hover:text-blue-600 dark:text-white"
            } transition-colors duration-200`}
          >
            CONTACT
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 dark:text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 shadow-md">
          <div className="flex flex-col space-y-4 p-4 font-medium tracking-[0.4em] font-poppins">
            <Link
              href="/"
              className={`${
                isActive("/") ? "text-blue-600 dark:text-white" : "hover:text-blue-600 dark:text-white"
              } transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`${
                isActive("/about") ? "text-blue-600 dark:text-white" : "hover:text-blue-600 dark:text-white"
              } transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className={`${
                isActive("/services") ? "text-blue-600 dark:text-white" : "hover:text-blue-600 dark:text-white"
              } transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/portfolio"
              className={`${
                isActive("/portfolio") ? "text-blue-600 dark:text-white" : "hover:text-blue-600 dark:text-white"
              } transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive("/contact") ? "text-blue-600 dark:text-white" : "hover:text-blue-600 dark:text-white"
              } transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
