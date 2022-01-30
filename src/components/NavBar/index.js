import React from 'react';

const NavBar = () => {
	return (
		<div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded">
			<div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
				<div className="flex-shrink-0 flex items-center">
					<img
						className="block lg:hidden h-8 w-auto"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
						alt="Workflow"
					/>
					<img
						className="hidden lg:block h-8 w-auto"
						src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
						alt="Workflow"
					/>
				</div>
			</div>
			<div className="px-2 mx-2">
				<div className="items-stretch hidden lg:flex">
					<a className="btn btn-ghost btn-sm rounded-btn">Latest Releases</a>
					<a className="btn btn-ghost btn-sm rounded-btn">Series</a>
					<a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
				</div>
			</div>
			<div className="flex-none">
				<button className="btn btn-square btn-ghost">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default NavBar;
