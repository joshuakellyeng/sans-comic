import React from 'react';

const Checkout = ({ cartItems, handleAddToCart, handleRemoveFromCart }) => {
	const itemsPrice = cartItems.reduce((a, c) => a + c.prices[0].price * c.qty, 0);
	const taxPrice = itemsPrice * 0.14;
	const shippingPrice = itemsPrice > 20 ? 0 : 2.95;
	const totalPrice = itemsPrice + taxPrice + shippingPrice;
    console.log(totalPrice.toFixed(2))
	return (
		<div className="h-screen">
			<div className="flex md:flex-col sm:flex-col">
				<div className="card-container grow">
                    <div>{cartItems === 0 && <div>Cart is Empty</div>}</div>
					{cartItems.map((comic) => (
						<div
							key={comic.id}
							className="card shadow rounded-none lg:card-side my-2 mx-2"
						>
							<figure>
								<img
									src={comic.images[0].path + '.' + comic.images[0].extension}
									alt={comic.title}
								/>
							</figure>
							<div className="card-body items-baseline self-center">
								<h2 className="card-title">{comic.title}</h2>

								<p className="overflow-auto max-h-40">
									{comic.textObjects[0]?.text
										? comic.textObjects[0]?.text
										: 'Coming Soon!'}
								</p>
								<p>Price: {comic.prices[0].price}</p>

								<p>Qty: {comic.qty} </p>

								<div className="card-actions">
									<button
										onClick={() => handleAddToCart(comic)}
										className="btn btn-secondary"
									>
										+
									</button>
									<button
										onClick={() => handleRemoveFromCart(comic)}
										className="btn btn-primary"
									>
										-
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="shrink">
					{cartItems.length !== 0 && (
						<>
							<hr />
							<div className="row">
								<div className="col-2">Items Price</div>
								<div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
							</div>
							<div className="row">
								<div className="col-2">Tax</div>
								<div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
							</div>
							<div className="row">
								<div className="col-2">Shipping</div>
								<div className="col-1 text-right">
									${shippingPrice.toFixed(2)}
								</div>
							</div>
							<div className="row">
								<div className="col-2">
									<strong>Total</strong>
								</div>
								<div className="col-1 text-right">
									<strong>${totalPrice.toFixed(2)}</strong>
								</div>
							</div>
							<hr />
							<div className="row">
								<button className='btn btn-primary rounded-none w-full'
									onClick={() =>
										alert(
											`Thank you for Shopping at The Cobalt Soul! Your Total is $${totalPrice.toFixed(
												2
											)} dollars.`
										)
									}
								>
									CheckOut
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Checkout;
