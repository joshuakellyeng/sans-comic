import React from 'react';
import Card from '../../components/Card';

const Promos = ({ promoComics, handleAddToCart }) => {
	
	return (
		<div className="flex flex-col items-center">
			<h1 className="m-4 lg:text-6xl sm:text-2xl font-black">
				Pre-Order Upcoming Releases
			</h1>
			<div className="flex justify-center flex-wrap my-1 px-1">
				{promoComics.map((comic) => {
					return <Card key={comic.id} comic={comic} handleAddToCart={handleAddToCart} />;
				})}
			</div>
		</div>
	);
};

export default Promos;
