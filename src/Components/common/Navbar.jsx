import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="hidden md:flex">
        <div className="flex-1 bg-[#E65722]"></div>
        <div className="w-[1060px] bg-green-900 text-white text-sm py-[10px] px-8 flex justify-between items-center rounded-l-[3px]">
          <div className="flex items-center space-x-6 text-[14px]">
            <div className="flex items-center space-x-2">
              <IoCall className="text-yellow-400" />
              <span>+92 (307) 68 - 06860</span>
            </div>
            <div className="flex items-center space-x-2 pl-4">
              <HiMail className="text-yellow-400" />
              <span>needhelp@company.com</span>
            </div>
          </div>
          <div className="space-x-4 text-[14px] mr-[62px]">
            <Link to="/support" className="hover:text-yellow-400">Support</Link> /
            <Link to="/wishlist" className="hover:text-yellow-400"> Wish List</Link> /
            <Link to="/account" className="hover:text-yellow-400"> My Account</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#E65722] text-white py-4 px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="/assets/logo/logo.webp"
            alt="Masala Koottu"
            className="w-[180px] md:w-[220px] h-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold mr-[290px]">
          <Link to="/" className="relative pb-2 hover:border-b-2 border-yellow-500">Home</Link>
          <Link to="/about" className="relative pb-2 hover:border-b-2 border-yellow-500">About ⬇</Link>
          <Link to="/products" className="relative pb-2 hover:border-b-2 border-yellow-500">Products</Link>
          <Link to="/contact" className="relative pb-2 hover:border-b-2 border-yellow-500">Contact</Link>
        </div>

        {/* Right Section: Icons */}
        <div className="hidden md:flex items-center space-x-6 mr-[60px] ">
          <Link to="/login" className="flex items-center space-x-3">
            <FaUser className="text-white" />
            <div className="flex space-x-2">
              <span className="text-white text-sm">Login</span>
              <span className="text-white text-sm">/</span>
              <span className="text-white text-sm">Register</span>
            </div>
          </Link>
          <button className="p-3 bg-white text-green-900 rounded-full shadow-md hover:bg-gray-200">
            <FaSearch className="text-2xl" />
          </button>
          <div className="relative">
            <Link to='/cartpage'>
              <button className="p-3 bg-yellow-400 text-green-900 rounded-full shadow-md hover:bg-yellow-500">
                <FaShoppingCart className="text-2xl" />
              </button>
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#E65722] text-white text-center flex flex-col items-center py-4 space-y-4">
          <Link to="/" className="text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-lg" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/products" className="text-lg" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/contact" className="text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/login" className="text-lg flex items-center space-x-2" onClick={() => setMenuOpen(false)}>
            <FaUser />
            <span>Login / Register</span>
          </Link>
          <button className="p-3 bg-white text-green-900 rounded-full shadow-md hover:bg-gray-200">
            <FaSearch className="text-2xl" />
          </button>
          <div className="relative">
            <Link to='/cartpage'>
              <button className="p-3 bg-yellow-400 text-green-900 rounded-full shadow-md hover:bg-yellow-500">
                <FaShoppingCart className="text-2xl" />
              </button>
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
