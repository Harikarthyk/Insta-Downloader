import React from "react";

function Footer() {
	return (
		<div className='Footer'>
			<div
				className='Footer__text'
				onClick={() => window.open("http://www.harikarthyk.xyz")}
			>
				&copy; hari_karthyk
			</div>
		</div>
	);
}

export default Footer;
