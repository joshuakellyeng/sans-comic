import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
//pages
import Home from './pages/Home';
import Promos from './pages/Promos';
import Series from './pages/Series';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';

const App = () => {
	//sets comics array
	const [promoComics, setPromoComics] = useState([]);
	//sets state cart items
	const [cartItems, setCartItems] = useState([]);
	//sets loading state
	const [loading, setLoading] = useState(false)
	
	//list of promo articles
	// https://comicvine.gamespot.com/api/promos/?&filter=api_key=4f8f8990ab1697df27672bcbdf1d0da1b794916b&format=json

	// https://gateway.marvel.com/v1/public/comics?format=comic&ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c
	// https://gateway.marvel.com/v1/public/comics?format=comic&ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c

	//initial fetch request with array of 100 comics
	const fetchComics = async () => {
		try {
			const res = await axios.get(
				'https://gateway.marvel.com/v1/public/comics?format=comic&startYear=2022&orderBy=onsaleDate&limit=100ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c'
			);
			setPromoComics(res.data.data.results);
		} catch (error) {
			console.log(error);
		}
	};

	//handleAddToCart function

	const handleAddToCart = (comic) => {
		const exist = cartItems.find((item) => item.id === comic.id);
		if (exist) {
			setCartItems(
				cartItems.map((item) =>
					item.id === comic.id ? { ...exist, qty: exist.qty + 1 } : item
				)
			);
		} else {
			setCartItems([...cartItems, { ...comic, qty: 1 }]);
		}
	};

	const handleRemoveFromCart = (comic) => {
		const exist = cartItems.find((item) => item.id === comic.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((item) => item.id !== comic.id));
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.id === comic.id ? { ...exist, qty: exist.qty - 1 } : item
				)
			);
		}
	};

	useEffect(() => {
		fetchComics();
	}, []);

	return (
		<div>
			<NavBar countCartItems={cartItems.length}/>
			<Routes>
				<Route path="/" element={<Home promoComics={promoComics} />} />
				<Route
					path="promos"
					element={
						<Promos
							promoComics={promoComics}
							handleAddToCart={handleAddToCart}
						/>
					}
				/>
				<Route path="series" element={<Series />} />
				<Route path="contact" element={<Contact />} />
				<Route
					path="checkout"
					element={
						<Checkout setCartItems={setCartItems} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart} cartItems={cartItems} />
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
