import { FaQuoteRight } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className="bg-[#F5F3EE] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Left Section */}
        <div className="lg:w-1/3">
          <p className="text-orange-600 italic font-semibold">Our Testimonials</p>
          <h2 className="text-4xl font-bold text-[#1E3813] mt-2 leading-tight">
            What they’re talking about us
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, elit sed, ading do eiusmod tempor 
            incididunt labore et dolore elit, sed do eiusmod.
          </p>

          {/* Arrows */}
          <div className="flex space-x-4 mt-8">
            <button className="border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center">
              <BsArrowLeft className="text-gray-500 text-lg" />
            </button>
            <button className="border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center">
              <BsArrowRight className="text-gray-500 text-lg" />
            </button>
          </div>
        </div>

        {/* Right Section - Testimonials */}
        <div className="lg:w-2/3 flex flex-wrap gap-6 justify-center lg:justify-start mt-10 lg:mt-0">
          
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 relative">
            <p className="text-gray-700">
              They are amazing in providing in all the products you need in 
              your daily lives. With an amazing discount they also provide 
              excellent delivery service.
            </p>
            <div className="flex items-center mt-6">
              <div className="w-20 h-20 rounded-full border-4 border-green-500 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm absolute -bottom-6 left-6">
                97x97
              </div>
              <div className="ml-24">
                <p className="text-[#1E3813] font-bold">Anil Shah</p>
                <p className="text-gray-500 text-sm">Customer</p>
              </div>
            </div>
            <FaQuoteRight className="text-gray-300 text-4xl absolute bottom-6 right-6" />
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 relative">
            <p className="text-gray-700">
              Lorem ipsum is simply free text dolor not sit amet, consectetur 
              notted adipiscing elit sed do eiusmod tempor incididunt ut labore 
              et dolore text.
            </p>
            <div className="flex items-center mt-6">
              <div className="w-20 h-20 rounded-full border-4 border-green-500 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm absolute -bottom-6 left-6">
                97x97
              </div>
              <div className="ml-24">
                <p className="text-[#1E3813] font-bold">Jessica Brown</p>
                <p className="text-gray-500 text-sm">Customer</p>
              </div>
            </div>
            <FaQuoteRight className="text-gray-300 text-4xl absolute bottom-6 right-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
