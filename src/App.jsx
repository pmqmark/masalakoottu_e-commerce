
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/home/Home';
import Layout from './Components/common/Layout';
import CartPage from './Pages/cart/CartPage';
import Checkout from './Pages/checkout/Checkout';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


