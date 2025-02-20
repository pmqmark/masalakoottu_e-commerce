import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import paypal from '../../assets/cart/paypal.png'

const OrderSection = () => {
  // Sample order data
  const [data, setData] = useState([

    { name: "Product Name", price: 29.99 },
  ]);
  const [selected, setSelected] = useState("paypal"); 

  const handleToggle = (method) => {
    setSelected(method);
  };
  // Calculate totals
  const subtotal = data.reduce((acc, item) => acc + item.price, 0);
  const shippingCost = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="max-w-6xl mx-auto flex lg:flex-row  flex-col gap-5 lg:gap-10 py-10 mb-20 p-2">
      {/* Left Section - Order Summary */}
      <div className="lg:w-1/2">
        <h2 className="lg:text-[30px] md:text-[28px] text-[26px] text-green-900 font-bold mb-4">Your Order</h2>
        <table className="w-full">
            <thead className="border-t border-b text-green-900 font-bold text-[20px]">
                <td className="py-6 ">Product</td>
                <td className="text-right py-6"> Price</td>
            </thead>
          <tbody >
            {data.map((item, index) => (
              <tr key={index} className="text-lg ">
                <td className="py-4 text-gray-500">{item.name}</td>
                <td className="py-2 text-right text-gray-500">${item.price.toFixed(2)+" USD"}</td>
              </tr>
            ))}
            <tr className="text-lg ">
              <td className="py-4 text-gray-500">Subtotal</td>
              <td className="py-2 text-right text-gray-500">${subtotal.toFixed(2)+" USD"}</td>
            </tr>
            <tr className="text-lg ">
              <td className="py-4 text-gray-500">Shipping</td>
              <td className="py-2 text-right text-gray-500">${shippingCost.toFixed(2)+" USD"}</td>
            </tr>
            <tr className="text-lg font-bold text-green-600 border-b ">
              <td className="py-4">Total</td>
              <td className="py-2 text-right">${total.toFixed(2)+" USD"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Section - Payment Options */}
      <div className="lg:w-1/2 flex flex-col">
      <div className="p-6 border rounded-md bg-gray-100 mt-14">
      <h2 className="md:text-2xl text-xl font-bold mb-4 text-green-900">Payment Method</h2>

      {/* Direct Bank Transfer */}
      <div className="border-b py-2">
        <label
          className="flex items-center gap-3 font-bold text-green-900 cursor-pointer"
          onClick={() => handleToggle("bank")}
        >
          <input
            type="radio"
            name="payment"
            value="bank"
            className="w-5 h-5"
            checked={selected === "bank"}
            readOnly
          />
          Direct Bank Transfer
        </label>
        <AnimatePresence>
          {selected === "bank" && (
            <motion.p
              className="text-gray-600 text-sm mt-2 mx-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              Transfer your payment directly to our bank account. Your order will
              not be shipped until the funds have cleared.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* PayPal Payment (Initially Open) */}
      <div className="py-2">
        <div className="flex flex-row gap-4">
        <label
          className="flex items-center gap-3 font-bold text-green-900 cursor-pointer"
          onClick={() => handleToggle("paypal")}
        >
          <input
            type="radio"
            name="payment"
            value="paypal"
            className="w-5 h-5"
            checked={selected === "paypal"}
            readOnly
          />
          PayPal Payment
        </label>
        <img src={paypal} className="w-10 h-10"></img>
        </div>
        <AnimatePresence>
          {selected === "paypal" && (
            <motion.p
              className="text-gray-600 text-sm mt-2 mx-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              Pay securely via PayPal. You can pay with your credit card if you
              don’t have a PayPal account.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
        </div>
        <div className="ml-auto">
        <button className="w-[200px] mt-6 py-3 h-[50px] bg-yellow-400 text-white font-bold rounded-full hover:bg-green-700 ">
          Place Your Order
        </button>
        </div>
        </div>
    </div>
  );
};

export default OrderSection;
