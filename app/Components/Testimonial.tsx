import React, { useState } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: "01",
    image: "/profile2.jpg", // Replace with the actual image path
    name: "John Doe",
    testimonial:
      "Compumax transformed our business with their tailored IT solutions. Their expertise and dedication ensured seamless integration and exceptional results!",
  },
  {
    id: "02",
    image: "/profile2.jpg", // Replace with the actual image path
    name: "Jane Smith",
    testimonial:
      "We were impressed by Compumax's professionalism and commitment to excellence. They delivered on time and exceeded our expectations every step of the way.",
  },
  {
    id: "03",
    image: "/profile2.jpg", // Replace with the actual image path
    name: "Samuel Lee",
    testimonial:
      "Thanks to Compumax, our website is faster, sleeker, and more user-friendly. Their team's creativity and technical skills are truly unmatched!",
  },
];

const Testimonial: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="w-full py-16 bg-gradient-to-r from-[#1f648a] via-[#80a6ca] to-[#6356a5]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          What Our Clients Say
        </h2>

        <div className="flex justify-between items-center">
          {/* Left: Circular Image with Quote Icon */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              layout="fill"
              objectFit="cover"
              priority
            />
            {/* Position the quote icon slightly outside the image border */}
            <div className="absolute top-[-12px] right-[-12px] p-2 bg-white rounded-full shadow-md z-10">
              <FaQuoteLeft className="w-6 h-6 text-blue-500" />
            </div>
          </div>

          {/* Right: Testimonial Text */}
          <div className="ml-8 flex-1">
            <p className="text-lg italic text-white">
              {`"${testimonials[activeTestimonial].testimonial}"`}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {testimonials[activeTestimonial].name}
            </h3>
          </div>

          {/* Numbers for Selecting Testimonial */}
          <div className="flex flex-col items-center">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`text-3xl font-bold ${
                  activeTestimonial === index
                    ? "text-pink-500"
                    : "text-blue-700"
                } cursor-pointer`}
              >
                {testimonial.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
