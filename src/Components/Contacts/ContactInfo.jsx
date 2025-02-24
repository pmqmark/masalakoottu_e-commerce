import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter, FaFacebookF, FaPinterest, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-white-100 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-x-3 mb-4 sm:mb-0 sm:justify-start justify-center">
          <FaPhoneAlt className="text-yellow-500 text-xl" />
          <div className="ml-3 text-center sm:text-left">
            <p className="text-gray-600 text-sm">Have question?</p>
            <p className="text-lg font-semibold text-gray-800">+92 (307) 68 - 06860</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start space-x-3 mb-4 sm:mb-0 sm:justify-start justify-center">
          <FaEnvelope className="text-orange-500 text-xl" />
          <div className="ml-3 text-center sm:text-left">
            <p className="text-gray-600 text-sm">Write email</p>
            <p className="text-lg font-semibold text-gray-800">needhelp@company.com</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start space-x-3 mb-4 sm:mb-0 sm:justify-start justify-center">
          <FaMapMarkerAlt className="text-yellow-500 text-xl" />
          <div className="ml-3 text-center sm:text-left">
            <p className="text-gray-600 text-sm">Visit store</p>
            <p className="text-lg font-semibold text-gray-800">Valentin, Street Road 24, New York</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
            <FaTwitter className="text-gray-800" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
            <FaFacebookF className="text-gray-800" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
            <FaPinterest className="text-gray-800" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
            <FaInstagram className="text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
