import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";

// Import Manrope Font
import "@fontsource/manrope"; 

const categories = [
  { name: "Masalas and Curry Powders", icon: "🌶️" },
  { name: "Millet Products", icon: "🌾", active: true },
  { name: "Ready to Eat or Cooked Items", icon: "🍽️" },
  { name: "Rice and Wheat Products", icon: "🍚" },
  { name: "Baby Products", icon: "🍼" },
  { name: "Tea & Coffee", icon: "☕" },
  { name: "Honeys", icon: "🍯" },
  { name: "Oils", icon: "🛢️" },
];

const slides = [
  {
    title: "Eat local & healthy organic food",
    subtitle: "Organic Market",
    img: "/path-to-image1.jpg",
  },
];

const Banner = () => {
  return (
    <div
      className="w-full overflow-hidden mt-[40px]"
      style={{
        backgroundImage: 'url("/assets/backgrounds/bannerbg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
      }}
    >
      <div className="flex w-full">
        {/* Sidebar */}
        <motion.aside
          className="max-w-[300px] w-full h-auto bg-white text-black shadow-md p-4 ml-[80px] mt-[50px] rounded-t-[20px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold bg-[#D55C1F] text-white py-3 px-4 w-full rounded-t-[10px]">
            All Categories
          </h2>
          <ul className="mt-2">
            {categories.map((item, index) => (
              <li
                key={index}
                className={`flex items-center justify-between p-3 text-base font-medium transition duration-200 cursor-pointer ${
                  item.active
                    ? "bg-gray-100 text-black rounded-md"
                    : "hover:bg-gray-200 text-black"
                }`}
                style={{ fontFamily: "Manrope, sans-serif", whiteSpace: "normal" }}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span
                    className={`${
                      [
                        "Masalas and Curry Powders",
                        "Ready to Eat or Cooked Items",
                        "Rice and Wheat Products",
                      ].includes(item.name)
                        ? "block w-[140px]" 
                        : "whitespace-nowrap"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
                <FiChevronRight className="text-gray-500 group-hover:text-black transition text-lg" />
              </li>
            ))}
          </ul>
        </motion.aside>

        {/* Banner Section */}
        <div className="w-full overflow-hidden">
          <Swiper spaceBetween={30} pagination={{ clickable: true }} loop autoplay>
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative w-full">
                <img
                  src={slide.img}
                  alt="banner"
                  className="w-full h-[612px] object-cover mt-[70px]"
                />
                <motion.div
                  className="absolute top-20 left-10 bg-[#F3F3ED] p-6 rounded-md shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-[#2A491D]">
                    {slide.subtitle}
                  </h3>
                  <h2 className="text-4xl font-bold text-[#7D8978]">
                    {slide.title}
                  </h2>
                  <motion.button
                    className="mt-4 px-6 py-2 bg-[#E65722] text-white rounded-full shadow-md"
                    whileHover={{ scale: 1.1 }}
                  >
                    Shop Now
                  </motion.button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Scroll to Top Button */}
          <button className="fixed bottom-4 right-4 bg-[#E65722] p-3 rounded-full shadow-md">
            ⬆️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
