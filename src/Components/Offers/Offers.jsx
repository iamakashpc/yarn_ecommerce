import React from 'react'
import "./Offer.css"
import exclusive_image from "../Assets/exclusive2.png";
const Offers = () => {
  return (
		<div className="offers">
			<div className="offers-left">
				<h1>Exclusive</h1>
				<h1>Offer For You</h1>
				<p>Only On Best selling Products</p>
				<button>Check Now </button>
			</div>
			<div className="offers-right">
				<img src={exclusive_image} alt="" />
			</div>
		</div>
	);
}

export default Offers