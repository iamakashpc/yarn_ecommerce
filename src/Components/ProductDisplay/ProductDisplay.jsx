import React from "react";
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
const ProductDisplay = (props) => {
	const { product } = props;
	return (
		<div className="product-display">
			<div className="product-display-left">
				<div className="product-display-img-list">
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
				</div>
				<div className="product-display-img">
					<img
						className="product-display-img-main"
						src={product.image}
						alt=""
					/>
				</div>
			</div>
			<div className="product-display-right">
				<h1>{product.name}</h1>
				<div className="product-display-right-star">
					<img src={start_icon} alt="" />
					<img src={start_icon} alt="" />
					<img src={start_icon} alt="" />
					<img src={start_icon} alt="" />
					<img src={star_dull_icon} alt="" />
					<p>(122)</p>
				</div>
				<div className="product-display-right-prices">
					<div className="product-display-right-price-old">
						${product.old_price}
					</div>
					<div className="product-display-right-price-new">
						${product.new_price}
					</div>
				</div>
				<div className="product-display-right-description">
					Revitalize your summer wardrobe with our sleek Men's Green Bomber
					Jacket, marrying vibrant color with contemporary design. Tailored for
					comfort and style, it's the perfect choice for any occasion, from
					casual outings to evening gatherings.
				</div>
				<div className="product-display-right-size">
					<h1>Select Size</h1>
					<div className="product-display-right-sizes">
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
						<div>XXL</div>
					</div>
				</div>
				<button>ADD TO CART</button>
				<p className="product-display-right-category">
					<span>Category :</span> Women, T shirt,CropTop
				</p>
				<p className="product-display-right-category">
					<span>Tags :</span> Modern ,Latest ,Popular
				</p>
			</div>
		</div>
	);
};

export default ProductDisplay;
