import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
	const { all_Products, cartItems, removeFromCart, getTotalCartAmount } =
		useContext(ShopContext);
	return (
		<div className="cart-items">
			<div className="cart-items-main">
				<p>Products</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr />
			{all_Products.map((e) => {
				if (cartItems[e.id] > 0) {
					return (
						<div>
							<div className="cart-items-format cart-items-main">
								<img
									src={e.image}
									alt=""
									className="cart-items-product-image"
								/>
								<p className="cart-items-name">{e.name}</p>
								<p className="cart-items-new">${e.new_price}</p>
								<button className="cart-items-quantity">
									{cartItems[e.id]}
								</button>
								<p className="cart-items-total">
									${e.new_price * cartItems[e.id]}
								</p>
								<img
									src={remove_icon}
									alt=""
									onClick={() => {
										removeFromCart(e.id);
									}}
									className="cart-items-remove-image"
								/>
							</div>
							<hr />
						</div>
					);
				}
				return null;
			})}
			<div className="cart-items-down">
				<div className="cart-items-totals">
					<h1>Item Total</h1>
					<div>
						<div className="cart-items-total-items">
							<p>SubTotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr />
						<div className="cart-items-total-items">
							<p>Shipping Fee</p>
							<p>$10</p>
						</div>
						<hr />
						<div className="cart-items-total-items">
							<p>Total</p>
							<p>${getTotalCartAmount()+10}</p>
						</div>
					</div>
					<button>Proceed To Checkout</button>
				</div>
				<div className="cart-items-promocode">
					<p>If you have a promo code enter it here</p>
					<div className="cart-items-promo-box">
						<input type="text" placeholder="Enter code here" />
						<button>submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItems;
