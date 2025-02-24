import React from "react";
import { RxCross1 } from "react-icons/rx";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const Table = ({ data, onRemove, onQuantityChange }) => {
  // Calculate totals
  const subtotal = data.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = subtotal > 0 ? 5.99 : 0; // Shipping fee only if items exist
  const total = subtotal + shippingCost;

  return (
    <div className="md:max-w-6xl mx-auto lg:py-28 md:py-20 py-14 p-2">
      {/* Table */}
      <table className="w-full border-b border-spacing-y-2">
        <thead className="border-b border-spacing-y-2">
          <tr className="text-green-950 md:text-[20px] text-[18px] lg:text-[22px]">
            <th className="py-2 md:px-4 px-1 text-left">Item</th>
            <th className="py-2 md:px-4 px-1 text-left">Price</th>
            <th className="py-2 md:px-4 px-1 text-left">Quantity</th>
            <th className="py-2 md:px-4 px-1 text-left">Total</th>
            <th className="py-2 md:px-4 px-1 text-left">Remove</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              {/* Item Image + Name */}
              <td className="py-8 md:px-4">
                <div className="flex md:flex-row flex-col gap-2 md:gap-4 items-center">
                  <div className="md:w-28 md:h-28 w-10 h-10 border md:p-4 rounded-md overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-medium text-green-950 md:text-[18px] text-[16px] lg:text-[20px]">{item.name}</span>
                </div>
              </td>

              {/* Price */}
              <td className="py-2 px-4">${item.price.toFixed(2)}</td>

              {/* Quantity Selector */}
              <td className="py-2 md:px-4 px-2">
                <div className="flex flex-row items-center border rounded-md px-3 py-1 md:w-20 w-16 bg-gray-100">
                  <span className="text-lg font-medium border-r p-1 md:p-2">{item.quantity}</span>
                  <div className="flex flex-col ml-auto">
                    <button
                      onClick={() => onQuantityChange(index, item.quantity + 1)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <GoPlus size={16} />
                    </button>
                    <button
                      onClick={() => onQuantityChange(index, Math.max(1, item.quantity - 1))}
                      className="text-red-500 hover:text-red-700"
                    >
                      <LuMinus size={16} />
                    </button>
                  </div>
                </div>
              </td>

              {/* Total */}
              <td className="py-2 px-4">${(item.price * item.quantity).toFixed(2)}</td>

              {/* Remove Button */}
              <td className="py-2 px-4">
                <button onClick={() => onRemove(index)} className="">
                  <RxCross1 size={28} className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="md:flex-row flex flex-col justify-between">
      {/* Coupon Section - Left Side */}
      <div className="flex flex-row  gap-4 mt-10 p-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="border border-gray-300 p-2 bg-gray-100 rounded-md w-[160px] md:w-[200px] lg:w-[300px] h-[50px] focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="px-4 py-2 bg-yellow-400 text-white rounded-full w-[150px] md:w-[150px] lg:w-[200px] h-[50px] hover:bg-green-600">
            Apply Coupon
          </button>
        </div>
      {/* Summary Section */}
      <div className="flex flex-col  mt-6">
        {/* Prices */}
        <div className=" text-lg p-4">
          <div className="flex flex-row lg:gap-28 md:gap-24 gap-24 py-1">
            <span className="text-green-950 font-bold text-[20px] ml-auto">Subtotal</span>
            <span className="text-gray-500">${subtotal.toFixed(2)+" USD"}</span>
          </div>
          <div className="flex flex-row lg:gap-28 md:gap-24 gap-24 py-1 pt-3">
            <span className="text-green-950 font-bold text-[20px] ml-auto">Shipping Cost</span>
            <span className="text-gray-500">${shippingCost.toFixed(2)+" USD"}</span>
          </div>
          <div className="flex flex-row lg:gap-28 md:gap-24 gap-24 font-bold  pt-3 ">
            <span className="text-green-950 font-bold text-[20px] ml-auto">Total</span>
            <span className="text-green-600">${total.toFixed(2)+" USD"}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row lg:gap-4 md:gap-3 gap-4 mt-4 mx-auto">
          <button className="lg:px-6 px-6 md:px-4 py-2 w-[150px] lg:w-[170px] h-[50px] bg-green-950 text-white rounded-full hover:bg-green-700">
            Update 
          </button>
          <Link to='/checkout'>
          <button className="lg:px-6 px-6 md:px-3 py-2 w-[150px] lg:w-[170px] h-[50px] bg-yellow-400 text-white rounded-full hover:bg-green-700">
            Checkout
          </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Table;
