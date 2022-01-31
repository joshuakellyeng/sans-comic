import React from 'react';
import { Routes, Route } from 'react-router-dom';
//components
import NavBar from './components/NavBar'
import Footer from './components/Footer';
//pages
import Home from './pages/Home';
import Promos from './pages/Promos';
import Series from './pages/Series';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="promos" element={<Promos/>} />
        <Route path="series" element={<Series/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="checkout" element={<Checkout/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
