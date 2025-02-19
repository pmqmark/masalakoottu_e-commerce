import React from "react";

const features = [
  { icon: "🍊", title: "100% fresh", description: "In ree hour when our power choice is and when nothing prevents." },
  { icon: "📦", title: "Fast deliveries", description: "In ree hour when our power choice is and when nothing prevents." },
  { icon: "🌿", title: "Natural products", description: "In ree hour when our power choice is and when nothing prevents." },
  { icon: "👩‍🌾", title: "Best farmers", description: "In ree hour when our power choice is and when nothing prevents." },
];

const WhyChoose = () => {
  return (
    <section className="bg-green-900 text-white py-16 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h3 className="text-orange-400 text-lg italic">Why Choose Ogenix</h3>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          Few reasons for people choosing ogenix
        </h2>
        <p className="text-gray-300 mt-4">
          Aliquam viverra arcu. Donec aliquet blandit enim. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis.
        </p>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg">
          Discover more
        </button>
      </div>

      {/* Right Content - Features Grid */}
      <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md text-gray-900">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
            <div className="bg-orange-500 text-white p-3 rounded-full text-lg">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-bold">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
