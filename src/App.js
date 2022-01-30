import React from 'react';
//components
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar'
//pages
import Home from './pages/Home';
import Promos from './pages/Promos';
import Series from './pages/Series';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
