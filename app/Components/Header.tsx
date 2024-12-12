"use client";
import Link from 'next/link';
import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react"; // Icons from lucide-react
import { FaFacebookF, FaYoutube } from "react-icons/fa"; // Social media icons from react-icons
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 w-full z-50 font-sans dark:bg-slate-950">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Parent Div */}
        <div className="w-full flex justify-center md:justify-between items-center">
        {/* Left Child Div - Phone and Mail */}
          <div className="flex items-center space-x-6 text-sm md:text-lg text-gray-800 dark:text-white">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              <span><Link href="tel:9949592380">994-9592-380</Link></span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              <span><Link href="mailto:Info@compumax.co.in">Info@compumax.co.in</Link></span>
            </div>
          </div>

          {/* Right Child Div - Request Quote and Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-sm md:text-lg text-gray-800 dark:text-white hover:text-blue-600">
              <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              <span>Request a Quote</span>
            </button>
            <div className="flex items-center space-x-3">
              {/* Facebook Icon */}
              <Link
                href="/"
                className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Link>
              {/* Twitter Icon */}
              <Link
                href="#"
                className="text-white bg-black dark:bg-white dark:text-black p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </Link>
              {/* YouTube Icon */}
              <Link
                href="#"
                className="text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
