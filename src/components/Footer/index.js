import React from 'react';
import logo from '../../assets/cs-logo-white.png';

const Footer = () => {
	return (
		<footer className="p-4 footer bg-base-300 text-base-content footer-center mt-2">
			<div className='flex'>
				<img className='w-12' src={logo} alt="" />
				<p>Copyright © 2021 - All right reserved by ACME Industries Ltd</p>
			</div>
		</footer>
	);
};

export default Footer;
