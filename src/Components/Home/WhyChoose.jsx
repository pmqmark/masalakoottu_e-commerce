import React from "react";

const features = [
  {
    icon: "🥬",
    title: "100% fresh",
    description: "In ree hour when our power choice is and when nothing prevents.",
  },
  {
    icon: "📦",
    title: "Fast deliveries",
    description: "In ree hour when our power choice is and when nothing prevents.",
  },
  {
    icon: "🌿",
    title: "Natural products",
    description: "In ree hour when our power choice is and when nothing prevents.",
  },
  {
    icon: "👩‍🌾",
    title: "Best farmers",
    description: "In ree hour when our power choice is and when nothing prevents.",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full min-h-[650px] bg-[#365420] text-white px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between py-10">
      
      {/* Left Content - On Top for Mobile */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h3 className="text-orange-400 text-lg italic mb-2">Why Choose Ogenix</h3>
        <h2 className="w-full md:w-[480px] font-extrabold text-[44px] leading-tight tracking-tight">
          Few reasons for people choosing Ogenix
        </h2>
        <p className="w-full md:w-[506px] text-gray-300 mt-4 leading-relaxed mx-auto md:mx-0">
          Aliquam viverra arcu. Donec aliquet blandit enim. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg">
            Discover more
          </button>
        </div>
      </div>

      {/* Right Content - Features Section (Kept Same) */}
      <div className="w-full md:w-[60%] lg:w-[65%] xl:w-[70%] bg-white p-8 rounded-lg shadow-lg text-gray-900 grid grid-cols-2 gap-6 min-h-[400px]">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center text-center md:text-left space-y-3 md:space-y-0 md:space-x-4 border-b last:border-none pb-4">
            <div className="bg-orange-500 text-white p-3 rounded-full text-xl flex items-center justify-center w-12 h-12">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-bold text-lg">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyChoose;
