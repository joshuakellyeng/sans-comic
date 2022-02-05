import React from 'react';

const Hero = ({promoComics}) => {

	

	//this variable will allow us to select a random comic from our array and display it as our hero title upon load
	let randomPromo = Math.floor(Math.random() * 101)

	let currentPromo = promoComics[randomPromo]

	// let renderImg = promoComics.images[0]?.path + '.'+ promoComics.images[0]?.extension
	// let forSale = promoComics.prices[0].price

	console.log(currentPromo)

	return (
			<div className="hero min-h-screen shadow bg-img">
				<div className="flex-col hero-content lg:flex-row-reverse bg-stone-50 z-[100]">
					<img
						src='#'
						className="max-w-sm rounded-none shadow-2xl"
					/>
					<div>
						<h1 className="mb-5 text-5xl font-bold">Promo Title</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-primary rounded-none">
							Get Started
						</button>
					</div>
				</div>
			</div>
	);
};

export default Hero;
