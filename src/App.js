import React, {useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
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

  const [promoComics, setPromoComics] = useState([]);
	//list of promo articles
	// https://comicvine.gamespot.com/api/promos/?&filter=api_key=4f8f8990ab1697df27672bcbdf1d0da1b794916b&format=json

	// https://gateway.marvel.com/v1/public/comics?format=comic&ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c
	// https://gateway.marvel.com/v1/public/comics?format=comic&ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c
	const fetchComics = async () => {
		try {
			const res = await axios.get('https://gateway.marvel.com/v1/public/comics?format=comic&startYear=2022&orderBy=onsaleDate&limit=100ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c');
			setPromoComics(res.data.data.results);
			console.log(promoComics)
		} catch (error) {
			console.log(error);
		}
	};

    useEffect(() => {
        fetchComics()
    }, []);


  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home promoComics={promoComics}/>} />
        <Route path="promos" element={<Promos promoComics={promoComics}/>} />
        <Route path="series" element={<Series/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="checkout" element={<Checkout/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
