import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1E3911] text-white py-12 relative" style={{ width: '1350px', height: '520px' }}>
      {/* Subscribe Section */}
      <div className="bg-[#E85B1E] p-8 w-[1170px] h-[177px] rounded-tl-[50px] rounded-tr-[20px] rounded-bl-[30px] rounded-br-[10px] mx-auto absolute top-[-100px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center justify-between shadow-lg">
        {/* Left Content - Text */}
        <div className="text-left md:w-1/2">
          <p className="italic text-yellow-100 text-lg">Quisque vel ortor</p>
          <h2 className="text-3xl font-bold text-white">
            Subscribe to newsletter
          </h2>
        </div>

        {/* Right Content - Input & Button */}
        <div className="flex items-center w-full md:w-auto mt-6 md:mt-0">
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-l-lg text-black w-64 border-none focus:outline-none"
          />
          <button className="bg-yellow-400 p-3 rounded-r-lg flex items-center justify-center">
            <span className="text-black text-lg">📩</span>
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-8 mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="mt-6">
          <img src="/logo.png" alt="Masala Kottu" className="w-24" />
          <p className="mt-6 font-bold">
            We’re Providing Everyday Fresh and Quality Products.
          </p>
          <div className="flex space-x-4 mt-4">
            <span className="text-xl">🔵 ⚫ ⚪</span>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-xl font-bold">
            Explore <span className="text-yellow-400">—</span>
          </h3>
          <ul className="mt-4 space-y-2">
            <li>About Company</li>
            <li>Our Services</li>
            <li>Become a Seller</li>
            <li>New Products</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold">
            Contact <span className="text-yellow-400">—</span>
          </h3>
          <p className="mt-4">Valentin, Street Road 24, New York, USA - 67452</p>
          <p className="mt-2 font-bold text-yellow-300">+92 (8800) 68 - 8960</p>
          <p className="mt-2">info@example.com</p>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="text-xl font-bold">
            Gallery <span className="text-yellow-400">—</span>
          </h3>
          <div className="grid grid-cols-3 gap-2 mt-6">
            <div className="w-16 h-16 bg-gray-700 flex items-center justify-center">
              83X80
            </div>
            <div className="w-16 h-16 bg-gray-700 flex items-center justify-center">
              83X80
            </div>
            <div className="w-16 h-16 bg-gray-700 flex items-center justify-center">
              83X80
            </div>
            <div className="w-16 h-16 bg-gray-700 flex items-center justify-center">
              83X80
            </div>
            <div className="w-16 h-16 bg-gray-700 flex items-center justify-center">
              83X80
            </div>
            <div className="w-16 h-16 bg-gray-700 flex items-center justify-center">
              83X80
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
