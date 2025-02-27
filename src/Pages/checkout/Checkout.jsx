import React from "react";
import { useCart } from "../../Components/CartPage/CartContext";
import TopBanner from "../../Components/common/TopBanner";
import grapesbanner from "../../assets/common/grapesbanner.jpg";
import CheckoutForms from "../../Components/CheckoutPage/CheckoutForms";
import OrderSection from "../../Components/CheckoutPage/OrderSection";

const Checkout = () => {
  const { cart } = useCart();  

  return (
    <div>
      <TopBanner title="Checkout" smallhead="Home / Shop" image={grapesbanner}/>
      <CheckoutForms />
      <OrderSection cart={cart} /> 
    </div>
  );
};

export default Checkout;
