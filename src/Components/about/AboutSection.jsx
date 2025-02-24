import React from "react";

const AboutSection = () => {
  return (
    <section className="flex items-center gap-12 px-10 py-16 bg-gray-50">
      {/* Left Content */}
      <div className="max-w-[600px]">
        <p className="text-orange-600 font-bold italic text-lg">
          Get to <span className="underline decoration-wavy">Know Us</span>
        </p>
        <h1 className="text-green-900 text-5xl font-bold mt-2">
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
        <div className="flex gap-6 mt-6">
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
      <div className="relative">
        {/* Experience Badge */}
        <div className="absolute top-6 left-6 bg-white border-2 border-yellow-500 rounded-lg px-4 py-2 shadow-md flex items-center">
          <span className="text-green-700 text-3xl font-bold">18</span>
          <span className="ml-2 text-gray-700 text-sm">
            Years of <br /> experience
          </span>
        </div>

        {/* Placeholder Image */}
        <div className="w-[540px] h-[480px] bg-gray-300 flex items-center justify-center text-black font-bold text-2xl shadow-lg">
          540X480
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
