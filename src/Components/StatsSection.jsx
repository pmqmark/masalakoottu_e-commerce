import { FaAward } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { GiPlantSeed } from "react-icons/gi";

const StatsSection = () => {
  return (
    <div className="bg-orange-600 text-white py-[70PX]">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-center">
        
        {/* Happy Customers */}
        <div className="flex items-center space-x-2">
          <MdOutlineEmojiPeople className="text-4xl" />
          <div className="text-left">
            <p className="text-2xl font-semibold italic">154</p>
            <p className="text-green-300">Happy customers</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-12 bg-white"></div>

        {/* Expert Farmers */}
        <div className="flex items-center space-x-2">
          <GiFarmer className="text-4xl" />
          <div className="text-left">
            <p className="text-2xl font-semibold italic">163</p>
            <p className="text-green-300">Expert farmers</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-12 bg-white"></div>

        {/* New Products */}
        <div className="flex items-center space-x-2">
          <GiPlantSeed className="text-4xl" />
          <div className="text-left">
            <p className="text-2xl font-semibold italic">360</p>
            <p className="text-green-300">New products</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-12 bg-white"></div>

        {/* Awards Winning */}
        <div className="flex items-center space-x-2">
          <FaAward className="text-4xl" />
          <div className="text-left">
            <p className="text-2xl font-semibold italic">22</p>
            <p className="text-green-300">Awards winning</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default StatsSection;
