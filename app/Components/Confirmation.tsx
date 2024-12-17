import React from 'react';

interface ConfirmationProps {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  title = 'THANK YOU!',
  message = 'Your form has been successfully submitted. Our team will review your information and get back to you within 48 hours.',
  buttonText = 'Go back to Home',
  buttonLink = '/',
}) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#1f648a] to-[#6b2b6a]">
      <div className="w-full max-w-3xl p-10 bg-white dark:slate-950 shadow-2xl rounded-lg text-center">
        <h1 className="text-4xl font-bold text-[#1f648a] mb-4">{title}</h1>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">{message}</p>
        <a
          href={buttonLink}
          className="inline-block bg-[#1f648a] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#6b2b6a] transition-all duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Confirmation;
