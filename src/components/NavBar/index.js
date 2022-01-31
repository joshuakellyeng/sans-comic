import React from 'react';
import { Link } from 'react-router-dom';
import logoText from '../../assets/cs-logo-black.svg'
import logo from '../../assets/cs-logo-black.svg'


const NavBar = () => {
	return (
		<div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded">
			<div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
				<div className="flex-shrink-0 flex items-center">
					<Link to="/">
						<img
							className="block lg:hidden h-8 w-auto"
							src={logo}
							alt="The Cobalt Soul"
						/>
						<img
							className="hidden lg:block h-8 w-auto"
							src={logoText}
							alt="The Cobalt Soul"
						/>
					</Link>
				</div>
			</div>
			<div className="px-2 mx-2">
				<div className="items-stretch hidden lg:flex">
					<Link to="promos" className="btn btn-ghost btn-sm rounded-btn">
						Latest Releases
					</Link>
					<Link to="series" className="btn btn-ghost btn-sm rounded-btn">
						Series
					</Link>
					<Link to="contact" className="btn btn-ghost btn-sm rounded-btn">
						Contact
					</Link>
				</div>
			</div>
			<div className="flex-none">
				<Link to="checkout" className="btn btn-square btn-ghost">
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
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
