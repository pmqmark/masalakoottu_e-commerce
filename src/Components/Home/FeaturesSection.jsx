import FeatureItem from "./FeatureItem";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { BiStore } from "react-icons/bi";

export default function FeaturesSection() {
  return (
    <div className="w-full bg-white flex justify-center py-8 overflow-hidden">
      <div className="flex items-center border border-gray-200 rounded-[6px] shadow-md px-[70px] py-[32px] gap-[80px] bg-white w-[1170px] h-[143px]">
        {/* Return Policy */}
        <FeatureItem
          icon={MdOutlineAssignmentReturn}
          title="Return Policy"
          description="Money back guarantee"
        />

        {/* Divider Line */}
        <div className="h-[64px] w-px bg-gray-300"></div>

        {/* Free Shipping */}
        <FeatureItem
          icon={FaShippingFast}
          title="Free shipping"
          description="On all orders over $60.00"
        />

        {/* Divider Line */}
        <div className="h-[64px] w-px bg-gray-300"></div>

        {/* Store Locator */}
        <FeatureItem
          icon={BiStore}
          title="Store locator"
          description="Find your nearest store"
        />
      </div>
    </div>
  );
}
