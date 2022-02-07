import React from 'react';

const Checkout = ({ setCartItems, cartItems, handleAddToCart, handleRemoveFromCart }) => {
	const itemsPrice = cartItems.reduce(
		(a, c) => a + c.prices[0].price * c.qty,
		0
	);
	const taxPrice = itemsPrice * 0.14;
	const shippingPrice = itemsPrice > 20 ? 0 : 2.95;
	const totalPrice = itemsPrice + taxPrice + shippingPrice;

	const handleCheckout = () => {
		alert(
			`Thank you for Shopping at The Cobalt Soul! Your Total is $${totalPrice.toFixed(
				2
			)} dollars.`
		)
		setCartItems([])
	}

	return (
		<div>
			<div id='checkout' className="flex">
				<div className="card-container grow">
					<div>{cartItems === 0 && <div>Cart is Empty</div>}</div>
					{cartItems.map((comic) => (
						<div id='checkout-card'
							key={comic.id}
							className="card shadow rounded-none lg:card-side my-2 mx-2"
						>
							<figure>
								<img id='checkout-img'
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
								<div className="col-2 text-right">
									Total: $
									{(comic.qty * comic.prices[0].price.toFixed(2)).toFixed(2)}
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="shrink min-w-[20%] px-2 flex flex-col">
					{cartItems.length !== 0 && (
						<>
							<h1 className="text-center text-4xl">Cart</h1>
							<hr />
							<div>
								<div className="flex flex-col justify-between">
									<div className="flex justify-between w-full">
										<p>Items Price</p>
										<p>$ {itemsPrice.toFixed(2)}</p>
									</div>
								
								<div className="flex justify-between w-full">
									<p>Tax</p>
									<p>$ {taxPrice.toFixed(2)}</p>
								</div>
								<div className="flex justify-between w-full">
									<p>Shipping</p>
									<p>$ {shippingPrice.toFixed(2)}</p>
								</div>
							</div>
							<hr />
							<div className="flex justify-between w-full font-bold">
								<p>Total</p>
								<p>$ {totalPrice.toFixed(2)}</p>
							</div>
							<hr />
							<div className="row">
								<button
									className="btn btn-primary rounded-none w-full"
									onClick={handleCheckout}
								>
									CheckOut
								</button>
							</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Checkout;
