import React from 'react';
import logo from '../../assets/sans-comic-logo.png';

const Footer = () => {
	return (
		<footer className="p-4 footer bg-neutral-focus text-neutral-content footer-center absolute bottom-0">
			<div className="flex">
				<img className="w-12" src={logo} alt="Sans Comic" />
				<p>Copyright © 2023 - All right reserved by Sans Comic</p>
			</div>
		</footer>
	);
};

export default Footer;
