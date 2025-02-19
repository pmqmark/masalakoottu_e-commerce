import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="w-full">
      {/* Top Bar (Green Section - Right Aligned, Left Side in #E65722) */}
      <div className="flex">
        {/* Left Side - Background in #E65722 */}
        <div className="flex-1 bg-[#E65722]"></div>
        
        {/* Right Side - 1040px Green Section with Rounded Left Edge */}
        <div className="w-[1060px] bg-green-900 text-white text-sm py-[10px] px-8 flex justify-between items-center rounded-l-[3px]">
          {/* Left Section: Contact Info */}
          <div className="flex items-center space-x-6 text-[14px]">
            <div className="flex items-center space-x-2">
              <IoCall className="text-yellow-400" />
              <span>+92 (307) 68 - 06860</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiMail className="text-yellow-400" />
              <span>needhelp@company.com</span>
            </div>
          </div>

          {/* Right Section: Support Links */}
          <div className="space-x-4 text-[14px]">
            <Link to="/support" className="hover:text-yellow-400">Support</Link> /
            <Link to="/wishlist" className="hover:text-yellow-400"> Wish List</Link> /
            <Link to="/account" className="hover:text-yellow-400"> My Account</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar - Full width in #E65722 */}
      <div className="bg-[#E65722] text-white py-[20px] px-8 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4 mb-3">
  <img
    src="/assets/logo/logo.webp"
    alt="Masala Koottu"
    className="w-[220px] h-auto mt-[-10px]" // Increase the width and add negative margin-top for moving the logo upwards
  />
</div>


        {/* Center Section: Navigation Links */}
        <div className="flex space-x-[40px] text-lg font-semibold mr-[370px] mb-[20px]">
          <Link to="/" className="relative pb-2 hover:border-b-2 border-yellow-500 font-manrope font-semibold text-[18px] leading-[30px]">
            Home
            <div className="absolute left-0 bottom-0 w-6 h-[2px] bg-yellow-500"></div>
          </Link>
          <Link to="/about" className="relative pb-2 hover:border-b-2 border-yellow-500 font-manrope font-semibold text-[16px] leading-[30px]">
            About ⬇
          </Link>
          <Link to="/products" className="relative pb-2 hover:border-b-2 border-yellow-500 font-manrope font-semibold text-[16px] leading-[30px]">
            Products
          </Link>
          <Link to="/contact" className="relative pb-2 hover:border-b-2 border-yellow-500 font-manrope font-semibold text-[16px] leading-[30px]">
            Contact
          </Link>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-6">
          {/* Login/Register */}
          <Link to="/login" className="flex items-center space-x-1">
            <FaUser className="text-white" />
            <span className="text-white">Login / Register</span>
          </Link>

          {/* Search Button */}
          <button className="p-3 bg-white text-green-900 rounded-full shadow-md hover:bg-gray-200">
            <FaSearch />
          </button>

          {/* Cart Button */}
          <div className="relative">
            <button className="p-3 bg-yellow-400 text-green-900 rounded-full shadow-md hover:bg-yellow-500">
              <FaShoppingCart />
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
