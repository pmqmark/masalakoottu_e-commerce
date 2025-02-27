import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 px-6 py-16 bg-gray-50">
      {/* Left Content */}
      <div className="max-w-[600px] text-center lg:text-left">
        <p className="text-orange-600 font-bold italic text-lg">
          Get to <span className="underline decoration-wavy">Know Us</span>
        </p>
        <h1 className="text-green-900 text-4xl lg:text-5xl font-bold mt-2">
          Welcome to Ogenix <br /> Food Provider
        </h1>
        <p className="text-red-600 font-semibold mt-4">
          We connect buyers and sellers of natural, organic products who are so
          beguiled demoralized charms of pleasure.
        </p>
        <p className="text-gray-600 mt-4">
          Aliquam viverra arcu. Donec aliquet blandit enim. Suspendisse id quam
          sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit
          amet mattis magna varius non.
        </p>

        {/* Info Cards */}
        <div className="flex flex-col sm:flex-row gap-6 mt-6 items-center sm:items-start">
          <div className="flex items-center bg-yellow-400 p-4 rounded-lg shadow-md">
            <span className="bg-white w-10 h-10 flex items-center justify-center font-bold text-yellow-600 rounded-full">
              01
            </span>
            <p className="ml-3 font-semibold text-gray-900">
              Local growth of <br /> fresh food
            </p>
          </div>
          <div className="flex items-center bg-yellow-400 p-4 rounded-lg shadow-md">
            <span className="bg-white w-10 h-10 flex items-center justify-center font-bold text-yellow-600 rounded-full">
              02
            </span>
            <p className="ml-3 font-semibold text-gray-900">
              Healthy food <br /> everyday
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Image with Experience Badge */}
      <div className="relative w-full max-w-lg lg:max-w-none lg:w-[540px] h-auto flex justify-center">
        {/* Experience Badge */}
        <div className="absolute top-6 left-6 bg-white border-2 border-yellow-500 rounded-lg px-4 py-2 shadow-md flex items-center">
          <span className="text-green-700 text-3xl font-bold">18</span>
          <span className="ml-2 text-gray-700 text-sm">
            Years of <br /> experience
          </span>
        </div>

        {/* Responsive Image */}
        <img
          src="https://via.placeholder.com/540x480"
          alt="About Us"
          className="w-full max-w-sm sm:max-w-md lg:max-w-none h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;