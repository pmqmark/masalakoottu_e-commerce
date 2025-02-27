import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1E3911] text-white py-12 relative w-full">
      {/* Subscribe Section */}
      <div className="bg-[#E85B1E] px-6 py-8 w-full max-w-[1170px] rounded-tl-[50px] rounded-tr-[20px] rounded-bl-[30px] rounded-br-[10px] mx-auto absolute top-[-80px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="text-left md:w-1/2">
          <p className="italic text-yellow-100 text-sm md:text-lg">Quisque vel ortor</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Subscribe to newsletter</h2>
        </div>
        <div className="flex items-center w-full md:w-auto mt-4 md:mt-0">
          <input type="email" placeholder="Email Address" className="p-3 rounded-l-lg text-black w-full md:w-64 border-none focus:outline-none" />
          <button className="bg-yellow-400 p-3 rounded-r-lg flex items-center justify-center">
            <span className="text-black text-lg">📩</span>
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 sm:px-12 mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <img src="/logo.png" alt="Masala Kottu" className="w-24 mx-auto md:mx-0" />
          <p className="mt-4 font-bold">We’re Providing Everyday Fresh and Quality Products.</p>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">Quick Links <span className="text-yellow-400">—</span></h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/products" className="hover:text-yellow-400">Product</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            <li><Link to="/team" className="hover:text-yellow-400">Team</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">Contact <span className="text-yellow-400">—</span></h3>
          <p className="mt-4">Valentin, Street Road 24, New York, USA - 67452</p>
          <p className="mt-2 font-bold text-yellow-300">+92 (8800) 68 - 8960</p>
          <p className="mt-2">info@example.com</p>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">Gallery <span className="text-yellow-400">—</span></h3>
          <div className="grid grid-cols-3 gap-2 mt-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-gray-700 flex items-center justify-center">83X80</div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#1E3911] py-2 border-t border-gray-700 flex items-center justify-between px-6 md:px-12 text-sm relative">
  <p className="text-gray-300">© Copyright 2023 by Company.com</p>
  <div className="flex space-x-4">
    <Link to="/terms" className="text-gray-300 hover:text-yellow-400">Terms & Conditions</Link>
    <span className="text-gray-400">/</span>
    <Link to="/privacy" className="text-gray-300 hover:text-yellow-400">Privacy Policy</Link>
  </div>
  {/* Scroll to Top Button */}
  <button 
    className="absolute right-6 bottom-2 bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full shadow-lg" 
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <FaArrowUp className="text-white text-lg" />
  </button>
</div>


    </div>
  );
};

export default Footer;