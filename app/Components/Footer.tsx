"use client";
import Link from 'next/link';
import React from "react";
import { FaFacebookF, FaYoutube, FaAngleRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-10 border-t">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-[#101a54]">About</h2>
            <p className="text-blue-600 hover:text-pink-600 mb-4">
              Comp-U-Max is an independent Web and software development company which specializes in business applications.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="text-white bg-black p-2 rounded-full hover:bg-blue-500 transition-colors"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="#"
                className="text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-[#101a54]">Services</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaAngleRight className="text-pink-600 mr-2" />
                <Link href="#" className="text-pink-600 hover:text-blue-600">
                  SEO Services
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-pink-600 mr-2" />
                <Link href="#" className="text-pink-600 hover:text-blue-600">
                  Website Development
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-pink-600 mr-2" />
                <Link href="#" className="text-pink-600 hover:text-blue-600">
                  UI/UX Design Services 
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-pink-600 mr-2" />
                <Link href="#" className="text-pink-600 hover:text-blue-600">
                  Software Development
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-pink-600 mr-2" />
                <Link href="#" className="text-pink-600 hover:text-blue-600">
                Data Analysis & Visualization
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-[#101a54]">Quick Links</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaAngleRight className="text-blue-600 mr-2" />
                <Link href="/" className="text-blue-600 hover:text-pink-600">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-blue-600 mr-2" />
                <Link href="/about" className="text-blue-600 hover:text-pink-600">
                  About
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-blue-600 mr-2" />
                <Link href="/services" className="text-blue-600 hover:text-pink-600">
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-blue-600 mr-2" />
                <Link href="/portfolio" className="text-blue-600 hover:text-pink-600">
                  Portfolio
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-blue-600 mr-2" />
                <Link href="/contact" className="text-blue-600 hover:text-pink-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Call Us & Visit Us Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-[#101a54]">Contact</h2>
            <Link
              href="tel:9949592380"
              className="text-pink-600 hover:text-blue-600"
            >
              Call Us :
              <p className="text-pink-600 mb-2"><Phone className="text-pink-600 text-xl inline mr-2" />
                994-9592-380</p> </Link>
            <Link
              href="mailto:Info@compumax.co.in"
              className="text-pink-600 hover:text-blue-600"
            > 
              Mail Us :

              <p className="text-pink-600 mb-2"><FaEnvelope className="text-pink-600 text-xl inline mr-2" />
              Info@compumax.co.in</p> </Link>
            <Link
              href="mailto:example@mail.com"
              className="text-pink-600 hover:text-blue-600"
            >
              Address :
            </Link>
            <p className="text-pink-600 mb-2"><FaMapMarkerAlt className="text-pink-600 text-xl inline mr-2" />Lakdikapul, HYD, TS.</p>
          </div>
        </div>
      </div>

      {/* Full-Width Copyright Section */}
      <div className="text-center mt-10 text-white text-sm bg-gradient-to-r from-[#1f648a] to-[#6b2b6a] w-full py-4">
        © COPYRIGHT 2024 ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
