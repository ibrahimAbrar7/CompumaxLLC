import Link from 'next/link';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Carousel: React.FC = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-[60vh] sm:h-[80vh]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full h-full bg-gradient-to-r from-[#1f648a] to-[#6b2b6a] flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between px-6 sm:px-24 py-8">
            {/* Content */}
            <div className="text-white max-w-md relative text-center sm:text-left">
              <h1 className="relative text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-snug text-white">
              Tech 
                <br />
                Solutions
              </h1>
              <p className="mt-4 text-lg">Driving innovation for businesses.</p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-0">
              <p className="text-white text-lg text-center font-bold sm:mr-4">Follow Us</p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaFacebookF className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaXTwitter className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full h-full bg-gradient-to-r from-[#1f648a] to-[#6b2b6a] flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between px-6 sm:px-24 py-8">
            {/* Content */}
            <div className="text-white max-w-md relative text-center sm:text-left">
              <h1 className="relative text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-snug text-white">
              Custom
                <br />
                 Software
              </h1>
              <p className="mt-4 text-xl">Tailored solutions to fit your needs.</p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-0">
              <p className="text-white text-lg text-center font-bold sm:mr-4">Follow Us</p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaFacebookF className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaXTwitter className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-gradient-to-r from-[#1f648a] to-[#6b2b6a] flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between px-6 sm:px-24 py-8">
            {/* Content */}
            <div className="text-white max-w-md relative text-center sm:text-left">
              <h1 className="relative text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-snug text-white">
                Innovative
                <br />
                Solutions
              </h1>
              <p className="mt-4 text-xl">Empowering businesses with cutting-edge solutions.</p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-0">
              <p className="text-white text-lg text-center font-bold sm:mr-4">Follow Us</p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaFacebookF className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaXTwitter className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
