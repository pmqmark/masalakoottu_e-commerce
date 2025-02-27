import React from "react";
import TopBanner from "../../Components/common/TopBanner";
import Table from "../../Components/CartPage/Table";
import { useCart } from "../../Components/CartPage/CartContext";
import grapesbanner from "../../assets/common/grapesbanner.jpg";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div>
      <TopBanner title="Cart" image={grapesbanner} smallhead="Home / Shop" />
      <Table data={cart} onRemove={removeFromCart} onQuantityChange={updateQuantity} />
    </div>
  );
};

export default CartPage;
