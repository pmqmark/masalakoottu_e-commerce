import React from "react";
import { useNavigate } from "react-router-dom";
import TopBanner from "../../Components/common/TopBanner";
import Table from "../../Components/CartPage/Table";
import { useCart } from "../../Components/CartPage/CartContext";
import grapesbanner from "../../assets/common/grapesbanner.jpg";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to Checkout
  };

  return (
    <div>
      <TopBanner title="Cart" image={grapesbanner} smallhead="Home / Shop" />
      <Table data={cart} onRemove={removeFromCart} onQuantityChange={updateQuantity} />
      <div className="flex justify-end mt-5">
        <button 
          onClick={handleCheckout} 
          className="bg-green-600 text-white px-5 py-2 rounded-md"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
