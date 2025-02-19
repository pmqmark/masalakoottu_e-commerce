
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/home/Home';
import Layout from './Components/common/Layout';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


