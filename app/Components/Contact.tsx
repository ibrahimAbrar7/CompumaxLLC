import Link from 'next/link';
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-8 dark:bg-gray-900 bg-gray-300">
      <div className="container mx-auto">
        {/* Heading above the child divs */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#101a54] dark:text-gray-300">Contact Us</h1>
        </div>

        {/* Contact Information Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 ">
          {/* Phone Number */}
          <div className="flex items-center space-x-2">
            <div>
              <Link href="tel:9949592380" className="text-[#3b779c] hover:text-[#3b779c] font-medium dark:text-gray-400">
                Call Us
                <p className="text-gray-600 mb-1 dark:text-gray-400">
                  <FaPhone className="text-[#3b779c] text-xl inline mr-2 dark:text-gray-400" />
                  994-9592-380
                </p>
              </Link>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <div>
              <Link href="mailto:Info@compumax.co.in" className="text-[#3b779c] hover:text-[#3b779c] font-medium dark:text-gray-400">
                Mail Us
                <p className="text-gray-600 mb-1 dark:text-gray-400">
                  <FaEnvelope className="text-[#3b779c] text-xl inline mr-2 dark:text-gray-400" />
                  Info@compumax.co.in
                </p>
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-2">
            <div>
              <p className="text-[#3b779c] font-medium dark:text-gray-400">Address</p>
              <p className="text-gray-600 mb-1 dark:text-gray-400">
                <FaMapMarkerAlt className="text-[#3b779c] text-xl inline mr-2 dark:text-gray-400" />
                Lakdikapul, HYD-500004
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-stretch">
          {/* Left Child: Contact Form */}
          <div className="w-full md:w-1/2 p-3 flex flex-col">
            <form className="bg-white dark:bg-gray-900 p-4 rounded shadow-lg flex flex-col flex-grow">
              <div className="mb-3">
                <label htmlFor="name" className="block text-sm font-medium font-sans text-gray-900 dark:text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-slate-950"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="block text-sm font-medium font-sans text-gray-900 dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-slate-950"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="block text-sm font-medium font-sans text-gray-900 dark:text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-slate-950"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="block text-sm font-medium font-sans text-gray-900 dark:text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-slate-950"
                />
              </div>
              <div className="text-center mt-auto">
                <button type="submit" className="bg-[#3b779c] text-white px-6 py-2 rounded-md hover:bg-pink-400">
                  Submit Form
                </button>
              </div>
            </form>
          </div>

          {/* Right Child: Map */}
          <div className="w-full md:w-1/2 p-3 flex flex-col">
            <div className="bg-white dark:bg-gray-900 p-4 rounded shadow-lg flex-grow">
              {/* Add an overlay with a grayish tint for dark mode */}
              <div className="relative w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.195766518587!2d78.45943287270119!3d17.40239028348731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97683b5d7739%3A0x21125fe71b7aa232!2sMustafa%20Towers%2C%20Lakdikapul%2C%20Hyderabad%2C%20Telangana%20500004!5e0!3m2!1sen!2sin!4v1733622887439!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Our Location"
                  className="transition-all duration-300 dark:opacity-70" // Dark mode opacity for a faded map
                />
                {/* Optional overlay in dark mode */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
