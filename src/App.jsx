import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { CartProvider } from './Components/CartPage/CartContext';  
import Home from './Pages/home/Home';
import Layout from './Components/common/Layout';
import CartPage from './Pages/cart/CartPage';
import Checkout from './Pages/checkout/Checkout';
import ContactPage from './Pages/Contact/ContactPage';
import TeamPage from './Pages/Team/TeamPage';
import ProductPage from './Pages/product/ProductPage';
import AboutPage from './Pages/about/AboutPage';

const App = () => {
  return (
    <CartProvider> {/* Wrap everything with CartProvider */}
      <Router> 
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<ContactPage />} /> 
            <Route path="/team" element={<TeamPage />} /> 
            <Route path="/products" element={<ProductPage />} /> 
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
