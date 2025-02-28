import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
  };

  // Update Quantity
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Remove from Cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Cart Table Component
export const CartTable = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = subtotal > 0 ? 50.00 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="max-w-6xl mx-auto py-14 p-4">
      <table className="w-full border-b">
        <thead className="border-b">
          <tr className="text-left">
            <th className="py-2 px-4">Item</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Total</th>
            <th className="py-2 px-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 px-4 flex items-center gap-2">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover" />
                {item.name}
              </td>
              <td className="py-2 px-4">₹{item.price.toFixed(2)}</td>
              <td className="py-2 px-4 flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </td>
              <td className="py-2 px-4">₹{(item.price * item.quantity).toFixed(2)}</td>
              <td className="py-2 px-4">
                <button onClick={() => removeFromCart(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-6">
        <div>
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>Shipping: ₹{shippingCost.toFixed(2)}</p>
          <p>Total: ₹{total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};