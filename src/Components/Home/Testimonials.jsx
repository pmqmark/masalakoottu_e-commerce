import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const testimonialsData = [
  { id: 1, text: "Amazing service! Great discounts and fast delivery. Lorem Ipsum is simply free text solor not sit amet, consectstur notted adipisicin elit sed do eiusmod tempor incididunt ut labore et dolore text.", name: "Anil Shah", role: "Customer" },
  { id: 2, text: "Top-notch quality and excellent support!. Lorem Ipsum is simply free text solor not sit amet, consectstur notted adipisicin elit sed do eiusmod tempor incididunt ut labore et dolore text.", name: "Jessica Brown", role: "Customer" },
  { id: 3, text: "Highly recommend their products. Lorem Ipsum is simply free text solor not sit amet, consectstur notted adipisicin elit sed do eiusmod tempor incididunt ut labore et dolore text.", name: "Michael Smith", role: "Customer" },
  { id: 4, text: "Professional and reliable. Lorem Ipsum is simply free text solor not sit amet, consectstur notted adipisicin elit sed do eiusmod tempor incididunt ut labore et dolore text.", name: "Sophia Lee", role: "Customer" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 2 >= testimonialsData.length ? 0 : prevIndex + 2));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 2 < 0 ? testimonialsData.length - 2 : prevIndex - 2));
  };

  // Animation Variants
  const cardVariants = {
    hidden: (direction) => ({
      x: direction === 1 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction === 1 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <div className="bg-[url('/assets/backgrounds/testimonialbg.png')] bg-cover bg-center bg-no-repeat md:py-14 py-10 lg:py-12 px-6 lg:px-20 min-h-[1050px] md:min-h-[550px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row items-center lg:items-start">
        
        {/* Left Section */}
        <div className="lg:w-1/3 lg:mt-[60px] ">
          <p className="text-orange-600 italic cavenix font-semibold">Our Testimonials</p>
          <h2 className="text-4xl font-bold text-green-900 mt-2 leading-tight">
            What they’re talking about us
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, elit sed, ading do eiusmod tempor incididunt labore et dolmre elit.
          </p>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-10">
            <button onClick={prevSlide} className="border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center">
              <BsArrowLeft className="text-gray-500 text-lg" />
            </button>
            <button onClick={nextSlide} className="border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center">
              <BsArrowRight className="text-gray-500 text-lg" />
            </button>
          </div>
        </div>

        {/* Right Section - Testimonials */}
        <div className="lg:w-2/3 flex md:flex-row flex-col md:mt-[40px] mt-32 gap-24  md:gap-8 justify-center lg:justify-start  lg:mt-[60px] relative h-[320px]">
        <AnimatePresence custom={direction} initial={false} mode="wait">
  {testimonialsData.slice(currentIndex, currentIndex + 2).map((testimonial) => (
    <motion.div
    key={testimonial.id}
    className="bg-white shadow-lg border rounded-lg p-6 lg:w-[370px] lg:h-[300px] flex flex-col justify-center items-center text-center relative"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    custom={direction}
  >
    {/* Profile Image - Positioned Overlapping the Card */}
    <div className="w-20 h-20 rounded-full border-4 border-green-500 bg-gray-300 flex items-center justify-center absolute left-6 top-[75%] translate-y-1/2 z-10">
      <img 
        src={testimonial.image} 
        alt={testimonial.name} 
        className="w-full h-full object-cover rounded-full" 
      />
    </div>
  
    {/* Testimonial Text */}
    <p className="text-gray-700 ">{testimonial.text}</p>
  
    {/* Name & Role (Shifted Right to Avoid Overlapping Image) */}
    <div className=" mt-4 text-left">
      <p className="text-[#1E3813] font-bold">{testimonial.name}</p>
      <p className="text-gray-500 text-sm">{testimonial.role}</p>
    </div>
  
    {/* Quote Icon */}
    <FaQuoteRight className="text-gray-300 text-4xl absolute bottom-6 right-6" />
  </motion.div>
  
  ))}
</AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
