import React from 'react';
import cleanjpg from '../../assets/clean.jpg'

const Card = ({comic}) => {
	// console.log(comic)
	let renderImg = comic.images[0]?.path + '.'+ comic.images[0]?.extension
	
	let forSale = comic.prices[0].price
	/* Conditional rendering brought to you by Carmen */
	return (
		<div className="card rounded-none text-center shadow mx-1 my-1 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-full">
			<figure>
				{/* Conditional rendering brought to you by Carmen */}
				<img src={ (renderImg != "undefined.undefined" ) ? renderImg : cleanjpg }/>
			</figure>
			<div className="card-body justify-between">
				<h2 className="card-title">
					{comic.title}
					<div className="badge mx-2 badge-primary">NEW</div>
					{/* Carmen showed me conditional rendering */}
					<div className="badge mx-2 badge-primary">Price: {comic.prices[0].price ? comic.prices[0].price : 'Sold Out'}</div>
				</h2>
				<p className='overflow-auto max-h-40'>{comic.textObjects[0]?.text ? comic.textObjects[0]?.text  : "Coming Soon!" }
				</p>
				<div className="justify-end card-actions">
					{(forSale > "0")?
					<button className="btn btn-primary rounded-none">Add to Cart</button>:
					<button className="btn btn-disabled rounded-none">Sold Out</button>
					}
				</div>
			</div>
		</div>
	);
};

export default Card;
