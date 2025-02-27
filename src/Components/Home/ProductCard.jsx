import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:w-[270px] h-[400px] w-full border border-gray-200 flex flex-col justify-between">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Product Details */}
      <div className="text-center">
        {/* Star Rating */}
        <div className="flex justify-center mb-1">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-500 text-lg">★</span>
          ))}
        </div>

        {/* Product Name */}
        <h2 className="text-lg font-bold text-green-900">{product.name}</h2>
        
        {/* Price */}
        <p className="text-gray-700 text-lg font-semibold">₹{product.price}</p>
      </div>

      {/* Quantity Selector & Add to Cart in One Line */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button
            className="bg-green-700 text-white px-3 py-1"
            onClick={handleDecrease}
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-8 text-center border-l border-r border-gray-300"
          />
          <button
            className="bg-green-700 text-white px-3 py-1"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <Link to="/cartpage">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
