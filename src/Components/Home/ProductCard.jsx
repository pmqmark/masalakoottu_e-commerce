import React, { useState } from "react";
import { useCart } from "../../Components/CartPage/CartContext";
import { useNavigate } from "react-router-dom"; // For redirection

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Add product with selected quantity
    navigate("/cartpage"); // Redirect to cart page
  };

  return (
    <div className="border p-4 rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">₹{product.price}</p>

      {/* Quantity Selector */}
      <div className="mt-2">
        <label htmlFor={`quantity-₹{product.id}`} className="mr-2">Quantity:</label>
        <select
          id={`quantity-₹{product.id}`}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border px-2 py-1 rounded"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
