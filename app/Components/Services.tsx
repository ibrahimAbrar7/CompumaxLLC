import React from "react";
import { FaLaptop, FaSearch, FaCogs, FaCode, FaChartLine, FaBug } from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#101a54] mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Website Designing */}
          <div className="w-full p-6 bg-gradient-to-r from-[#1f648a] via-[#80a6ca] to-[#6356a5] text-white text-center rounded-lg">
            <FaLaptop className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Website Designing</h3>
            <p className="mt-4 text-lg">Creative and responsive web designs tailored for your business.</p>
          </div>

          {/* Service 2: SEO Management */}
          <div className="w-full p-6 bg-gradient-to-r from-[#1f648a] via-[#80a6ca] to-[#6356a5] text-white text-center rounded-lg">
            <FaSearch className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">SEO Management</h3>
            <p className="mt-4 text-lg">Increase your visibility and rank higher with expert SEO strategies.</p>
          </div>

          {/* Service 3: Optimization */}
          <div className="w-full p-6 bg-gradient-to-r from-[#1f648a] via-[#80a6ca] to-[#6356a5] text-white text-center rounded-lg">
            <FaCogs className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Optimization</h3>
            <p className="mt-4 text-lg">Enhance the speed and performance of your website.</p>
          </div>

          {/* Service 4: Website Development */}
          <div className="w-full p-6 bg-gradient-to-r from-[#1f648a] via-[#80a6ca] to-[#6356a5] text-white text-center rounded-lg">
            <FaCode className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Website Development</h3>
            <p className="mt-4 text-lg">Custom development to build scalable and secure websites.</p>
          </div>

          {/* Service 5: In-depth Analytics */}
          <div className="w-full p-6 bg-gradient-to-r from-[#1f648a] via-[#80a6ca] to-[#6356a5] text-white text-center rounded-lg">
            <FaChartLine className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">In-depth Analytics</h3>
            <p className="mt-4 text-lg">Track performance and gain valuable insights into your website.</p>
          </div>

          {/* Service 6: Issue's Testing */}
          <div className="w-full p-6 bg-gradient-to-r from-[#1f648a] via-[#80a6ca] to-[#6356a5] text-white text-center rounded-lg">
            <FaBug className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Issues Testing</h3>
            <p className="mt-4 text-lg">Identify and resolve bugs with thorough testing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
