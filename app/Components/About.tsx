import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-8 gap-8 md:px-20 md:py-16 bg-white dark:bg-slate-950">
      {/* Content Section */}
      <div className="flex-1 max-w-full md:max-w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
          About CompumaxLLC
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Comp-U-Max is an independent Web and software development company, specializing in business applications. Since 2000, we&apos;ve helped clients boost efficiency and profitability with custom software solutions that automate business activities.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Whether you&apos;re looking to save time, increase sales, or maximize ROI, we provide solutions tailored to your needs. Let us handle the complexities of software development so you can focus on growing your business.
        </p>
      </div>

      {/* Image Section */}
<div className="flex-1 max-w-full md:max-w-1/2">
  <Image 
    src="/about.avif"
    alt="Company Overview"
    width={600}  // Set width (adjust as per your design)
    height={400} // Set height (adjust as per your design)
    className="w-full h-auto rounded-lg shadow-lg"
    priority
  />
</div>

    </section>
  );
};

export default About;
