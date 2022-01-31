import React from 'react';


const CartCard = () => {
	return (
		<div className="card lg:card-side card-bordered my-2 mx-2">
			<figure>
				<img src="https://picsum.photos/id/1005/400/250" />
			</figure>
			<div className="card-body flex-row justify-between items-baseline self-center">
				<h2 className="card-title">Horizontal</h2>
				<p>
					Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
					sit necessitatibus veritatis sed molestiae voluptates incidunt iure
					sapiente.
				</p>
					<h1>Price:</h1>
					<h1>Qty: </h1>

				<div className="card-actions flex-col">
					<button className="btn btn-primary">Total</button>
					<button className="btn btn-ghost">More info</button>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
