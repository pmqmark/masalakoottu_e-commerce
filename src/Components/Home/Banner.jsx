import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronRight } from "react-icons/fi";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import bannerimage1 from "../../assets/home/bannerimage1.jpg";
import bannerimage2 from "../../assets/home/bannerimage2.jpg";
import bannerimage3 from "../../assets/home/bannerimage3.jpg";

const categories = [
  { name: "Masalas and Curry Powders", icon: "\uD83C\uDF36\uFE0F" },
  { name: "Millet Products", icon: "\uD83C\uDF3E", active: true },
  { name: "Ready to Eat or Cooked Items", icon: "\uD83C\uDF7D\uFE0F" },
  { name: "Rice and Wheat Products", icon: "\uD83C\uDF5A" },
  { name: "Baby Products", icon: "\uD83C\uDF7C" },
  { name: "Tea & Coffee", icon: "\u2615" },
  { name: "Honeys", icon: "\uD83C\uDF6F" },
  { name: "Oils", icon: "\uD83D\uDE82" },
];

const slides = [
  {
    title: "Eat local & healthy organic food",
    subtitle: "Organic Market",
    img: bannerimage1,
  },
  {
    title: "Fresh & Natural Ingredients",
    subtitle: "Farm Fresh",
    img: bannerimage2,
  },
  {
    title: "Healthy Living Starts Here",
    subtitle: "Organic Lifestyle",
    img: bannerimage3,
  },
];

const Banner = () => {
  const navigate = useNavigate();

  // Function to handle the click event
  const handleShopNowClick = () => {
    navigate("/products"); // Navigate to the products page
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/assets/backgrounds/bannerbg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="md:w-[730px] lg:w-full mx-auto flex md:flex-row flex-col-reverse gap-5 md:gap-8 lg:gap-10 mt-[40px]">
          <div className="flex">
            <motion.aside
              className="lg:w-[330px] w-full h-auto bg-white text-black shadow-md p-4 mt-[40px] rounded-t-[20px]"
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
                    className="group flex items-center justify-between p-3 text-base font-medium transition duration-200 cursor-pointer hover:bg-gray-200 text-black"
                    style={{ fontFamily: "Manrope, sans-serif", whiteSpace: "normal" }}
                    onClick={() => navigate("/products")} // Redirecting only to /products
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    <FiChevronRight className="text-gray-500 group-hover:text-black transition text-lg" />
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>

          <div className="overflow-hidden w-full relative mt-[40px]">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
              modules={[Pagination, Autoplay]}
              className="relative"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative w-full">
                  <motion.img
                    src={slide.img}
                    alt="banner"
                    className="md:h-[612px] w-full h-[300px] object-cover lg:object-cover"
                    initial={{ opacity: 0.5, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <motion.div
                    className="absolute lg:top-20 top-1 md:left-10 left-5 p-4 lg:w-[400px] h-[330px] bg-opacity-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <h3 className="lg:text-xl md:text-lg text-[md] font-semibold text-green-500 mt-10">
                      {slide.subtitle}
                    </h3>
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-green-900 mt-4">
                      {slide.title}
                    </h2>
                    <motion.button
                      className="mt-5 lg:px-6 py-3 px-4 text-sm font-bold bg-green-600 text-white rounded-full shadow-md"
                      whileHover={{ scale: 1.1 }}
                      onClick={handleShopNowClick} // Trigger the navigate function
                    >
                      Shop Now
                    </motion.button>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination absolute bottom-10 left-10 flex gap-x-2 px-4 !text-green-500"></div>
            <button className="fixed bottom-4 right-4 bg-[#E65722] p-3 rounded-full shadow-md">⬆️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
