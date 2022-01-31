import React from 'react';

const Card = () => {
	return (
		<div className="card card-bordered text-center mx-1 my-1  xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-full">
			<figure>
				<img src="https://picsum.photos/id/1005/400/250" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					Top image
					<div className="badge mx-2 badge-secondary">NEW</div>
				</h2>
				<p>
					Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
					sit necessitatibus veritatis sed molestiae voluptates incidunt iure
					sapiente.
				</p>
				<div className="justify-end card-actions">
					<button className="btn btn-secondary">More info</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
