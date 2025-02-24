import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1E3911] text-white py-12 relative w-full">
      {/* Subscribe Section */}
      <div className="bg-[#E85B1E] px-6 py-8 w-full max-w-[1170px] rounded-tl-[50px] rounded-tr-[20px] rounded-bl-[30px] rounded-br-[10px] mx-auto absolute top-[-80px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center justify-between shadow-lg">
        {/* Left Content - Text */}
        <div className="text-left md:w-1/2">
          <p className="italic text-yellow-100 text-sm md:text-lg">
            Quisque vel ortor
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Subscribe to newsletter
          </h2>
        </div>

        {/* Right Content - Input & Button */}
        <div className="flex items-center w-full md:w-auto mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-l-lg text-black w-full md:w-64 border-none focus:outline-none"
          />
          <button className="bg-yellow-400 p-3 rounded-r-lg flex items-center justify-center">
            <span className="text-black text-lg">📩</span>
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 sm:px-12 mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <img src="/logo.png" alt="Masala Kottu" className="w-24 mx-auto md:mx-0" />
          <p className="mt-4 font-bold">
            We’re Providing Everyday Fresh and Quality Products.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <span className="text-xl">🔵 ⚫ ⚪</span>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-lg md:text-xl font-bold">
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
          <h3 className="text-lg md:text-xl font-bold">
            Contact <span className="text-yellow-400">—</span>
          </h3>
          <p className="mt-4">
            Valentin, Street Road 24, New York, USA - 67452
          </p>
          <p className="mt-2 font-bold text-yellow-300">
            +92 (8800) 68 - 8960
          </p>
          <p className="mt-2">info@example.com</p>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="text-lg md:text-xl font-bold">
            Gallery <span className="text-yellow-400">—</span>
          </h3>
          <div className="grid grid-cols-3 gap-2 mt-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-gray-700 flex items-center justify-center">
                83X80
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
