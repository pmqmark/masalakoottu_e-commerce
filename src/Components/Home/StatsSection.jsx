import { FaAward } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { GiPlantSeed } from "react-icons/gi";

const StatsSection = () => {
  return (
    <div className="bg-orange-600 text-white py-[50px] md:py-[90px]"> {/* Increased height */}
      <div className="max-w-6xl mx-auto flex md:flex-row flex-col md:gap-5  lg:gap-0 gap-10 justify-between items-center text-center ">
        
        {/* Happy Customers */}
        <div className="flex items-center lg:space-x-3 md:space-x-0 space-x-3">
          <MdOutlineEmojiPeople className="text-5xl" /> {/* Increased icon size */}
          <div className="lg:text-left">
            <p className="md:text-3xl text-2xl font-bold italic">154</p> {/* Increased text size */}
            <p className="text-green-300 text-lg">Happy customers</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] md:block hidden h-14 bg-white"></div>

        {/* Expert Farmers */}
        <div className="flex items-center lg:space-x-3 md:space-x-0 space-x-3">
          <GiFarmer className="text-5xl" />
          <div className="lg:text-left">
            <p className="md:text-3xl text-2xl font-bold italic">163</p>
            <p className="text-green-300 text-md md:text-lg">Expert farmers</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] md:block hidden h-14 bg-white"></div>

        {/* New Products */}
        <div className="flex items-center lg:space-x-3 md:space-x-0 space-x-3">
          <GiPlantSeed className="text-5xl" />
          <div className="lg:text-left">
            <p className="md:text-3xl text-2xl font-bold italic">360</p>
            <p className="text-green-300 text-md md:text-lg">New products</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] md:block hidden h-14 bg-white"></div>

        {/* Awards Winning */}
        <div className="flex items-center lg:space-x-3 md:space-x-0 space-x-3">
          <FaAward className="text-5xl" />
          <div className="lg:text-left">
            <p className="text-3xl font-bold italic">22</p>
            <p className="text-green-300 text-md md:text-lg">Awards winning</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;
