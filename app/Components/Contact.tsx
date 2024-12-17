import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const router = useRouter(); // Correct useRouter for App Router

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Dynamically validate email
    if (name === 'email') {
      setErrors({
        ...errors,
        email: !/\S+@\S+\.\S+/.test(value) && value.length > 0 ? 'Please enter a valid email address.' : '',
      });
    }

    // Dynamically validate phone number (only digits allowed)
    if (name === 'phone') {
      const phoneRegex = /^[0-9]*$/; // Only allows numbers
      setErrors({
        ...errors,
        phone:
          value && !phoneRegex.test(value)
            ? 'Phone number can only contain digits, no letters or special characters.'
            : value.length < 10
            ? 'Phone number must be at least 10 digits long.'
            : '',
      });
    }

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation before sending data
  const validateForm = () => {
    const formErrors = { email: '', phone: '' };
    let isValid = true;

    if (!formData.email) {
      formErrors.email = 'Email is required.';
      isValid = false;
    }

    if (!formData.phone) {
      formErrors.phone = 'Phone number is required.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Send form data to EmailJS
      emailjs
        .send(
          'service_pbmhb28', // Your EmailJS service ID
          'template_z2lwkc7', // Your EmailJS template ID
          {
            to_name: 'wassay@compumax.co.in', // Recipient's email address
            name: formData.name, // User's name
            email: formData.email, // User's email
            phone: formData.phone, // User's phone number
            message: formData.message, // User's message
          },
          '3of_0nCQYoiZu5KFH' // Your EmailJS public key (User ID)
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            router.push('/confirmation'); // Redirect to confirmation page
            setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form data
          },
          (error) => {
            console.error('Error sending email:', error.text);
          }
        );
    }
  };

  return (
    <section className="py-8 dark:bg-gray-900 bg-gray-300">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#101a54] dark:text-gray-300">Contact Us</h1>
        </div>

        {/* Contact Information Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <Link href="tel:9949592380" className="text-[#3b779c] hover:text-[#3b779c] font-medium dark:text-gray-400">
              Call Us
              <p className="text-gray-600 mb-1 dark:text-gray-400">
                <FaPhone className="text-[#3b779c] text-xl inline mr-2 dark:text-gray-400" />
                994-9592-380
              </p>
            </Link>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <Link href="mailto:wassay@compumax.co.in" className="text-[#3b779c] hover:text-[#3b779c] font-medium dark:text-gray-400">
              Mail Us
              <p className="text-gray-600 mb-1 dark:text-gray-400">
                <FaEnvelope className="text-[#3b779c] text-xl inline mr-2 dark:text-gray-400" />
                wassay@compumax.co.in
              </p>
            </Link>
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

        {/* Contact Form */}
        <div className="flex flex-wrap justify-between items-stretch">
          <div className="w-full md:w-1/2 p-3 flex flex-col">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-4 rounded shadow-lg flex-grow">
              <div className="mb-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-slate-950"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-400">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-slate-950"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-gray-400">
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-slate-950"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
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

          {/* Map */}
          <div className="w-full md:w-1/2 p-3 flex flex-col">
            <div className="bg-white dark:bg-gray-900 p-4 rounded shadow-lg flex-grow">
              <div className="relative w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.195766518587!2d78.45943287270119!3d17.40239028348731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97683b5d7739%3A0x21125fe71b7aa232!2sMustafa%20Towers%2C%20Lakdikapul%2C%20Hyderabad%2C%20Telangana%20500004!5e0!3m2!1sen!2sin!4v1733622887439!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Our Location"
                  className="transition-all duration-300 dark:opacity-70"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
