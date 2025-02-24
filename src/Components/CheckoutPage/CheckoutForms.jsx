import React from "react";
import { TiTick } from "react-icons/ti";

const CheckoutForms = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 mt-14">
      <div className="flex lg:flex-row flex-col lg:gap-10 md:gap-6 gap-5">
        {/* Billing Details Form */}
        <div className="lg:w-1/2 p-2">
        <div className="flex flex-col gap-4">
        <h1>Returning customer? <span className="text-green-600 cursor-pointer">Click here to Login</span></h1>
          <h2 className="lg:text-[30px] md:text-[28px] text-[26px] font-bold mb-4 text-green-900">Billing Details</h2>
          </div>
          <form className="space-y-4">
            {/* Country Dropdown */}
            <select className="w-full p-3 border rounded-md bg-gray-100" defaultValue="">
              <option value="" disabled>
                Select Country
              </option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
            </select>

            {/* First & Last Name */}
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 p-3 border rounded-md bg-gray-100" />
              <input type="text" placeholder="Last Name" className="w-1/2 p-3 border rounded-md bg-gray-100" />
            </div>

            {/* Company */}
            <input type="text" placeholder="Company (optional)" className="w-full p-3 border rounded-md bg-gray-100" />

            {/* Address & Apartment */}
            <input type="text" placeholder="Street Address" className="w-full p-3 border rounded-md bg-gray-100" />
            <input type="text" placeholder="Apartment, Unit, etc. (optional)" className="w-full p-3 border rounded-md bg-gray-100" />
            <input type="text" placeholder="Town / City" className="w-full p-3 border rounded-md bg-gray-100" />

            {/* Town/City, State, Zip */}
            <div className="flex gap-4">
              
              <input type="text" placeholder="State" className="w-1/2 p-3 border rounded-md bg-gray-100" />
              <input type="text" placeholder="Zip code" className="w-1/2 p-3 border rounded-md bg-gray-100" />
            </div>

            {/* Email & Phone */}
            <div className="flex gap-4">
              <input type="email" placeholder="Email Address" className="w-1/2 p-3 border rounded-md bg-gray-100" />
              <input type="tel" placeholder="Phone Number" className="w-1/2 p-3 border rounded-md bg-gray-100" />
            </div>

            {/* Unique Field - Create an Account */}
            <div>
  <label htmlFor="createAccount" className="flex items-center cursor-pointer">
    <input type="checkbox" id="createAccount" className="hidden peer" />
    <div className="w-5 h-5 border-2 border-gray-600 rounded-full flex items-center justify-center peer-checked:bg-yellow-400 peer-checked:border-yellow-500 transition-all">
      <TiTick className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
    </div>
    <span className="ml-2">Create an account?</span>
  </label>
</div>

          </form>
        </div>

        {/* Shipping Details Form */}
        <div className="lg:w-1/2 p-2">
          <h2 className="lg:text-[30px] md:text-[28px] text-[26px] text-green-900 font-bold mb-4 mt-10">Ship to a Different Address</h2>
          <form className="space-y-4">
            {/* Country Dropdown */}
            <select className="w-full p-3 border rounded-md bg-gray-100" defaultValue="">
              <option value="" disabled>
                Select Country
              </option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
            </select>

            {/* First & Last Name */}
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 p-3 border rounded-md bg-gray-100" />
              <input type="text" placeholder="Last Name" className="w-1/2 p-3 border rounded-md bg-gray-100" />
            </div>

            {/* Company */}
            <input type="text" placeholder="Company (optional)" className="w-full p-3 border rounded-md bg-gray-100" />

            {/* Address & Apartment */}
            <input type="text" placeholder="Street Address" className="w-full p-3 border rounded-md bg-gray-100" />
            <input type="text" placeholder="Apartment, Unit, etc. (optional)" className="w-full p-3 border rounded-md bg-gray-100" />
            <input type="text" placeholder="Town/City" className="w-full p-3 border rounded-md bg-gray-100" />

            {/* Town/City, State, Zip */}
            <div className="flex gap-4">
              
              <input type="text" placeholder="State" className="w-1/2 p-3 border rounded-md bg-gray-100" />
              <input type="text" placeholder="Zip code" className="w-1/2 p-3 border rounded-md bg-gray-100" />
            </div>
            {/* Email & Phone */}
            <div className="flex gap-4">
              <input type="email" placeholder="Email Address" className="w-1/2 p-3 border rounded-md bg-gray-100" />
              <input type="tel" placeholder="Phone Number" className="w-1/2 p-3 border rounded-md bg-gray-100" />
            </div>

            {/* Unique Field - Notes About Order */}
            <textarea placeholder="Notes about order " className="w-full p-3 border rounded-md bg-gray-100"></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForms;
