import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ promoComics }) => {
	//this variable will allow us to select a random comic from our array and display it as our hero title upon load
	let randomPromo = Math.floor(Math.random() * (promoComics.length + 1));
	//this how we will store the value and display the chosen comic
	let currentPromo = promoComics[randomPromo];

	//Marvel API breaks up its image links so I'll be using string interpolation and optional chaining to get the image to display similar to the Card component
	let renderImg =
		currentPromo?.images[0].path + '.' + currentPromo?.images[0].extension;

	return (
		<div className="hero min-h-screen shadow bg-img">
			<div className="flex-col hero-content rounded lg:flex-row-reverse bg-stone-50 z-[100]">
				<img src={renderImg} className="max-w-sm rounded-none shadow-2xl" alt={currentPromo?.title} />
				<div>
					<h1 className="mb-5 text-5xl font-bold">{currentPromo?.title}</h1>
					<p className="mb-5">
						Learn more about {currentPromo?.series.name} Series below!
					</p>
					<button className="btn btn-primary rounded-none">
						<Link to="/promos">Click Here</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
