import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import drop_down from "../Assets/dropdown_icon.png"
const Navbar = () => {
	const [menu, setMenu] = useState("shop");
	const { getTotalCartItems } = useContext(ShopContext);
	const menuRef = useRef();

	const dropDownToggle =(e) =>{
		menuRef.current.classList.toggle('nav-menu-visible');
		e.target.classList.toggle('open')
	}

	return (
		<div className="navbar">
			<div className="nav-logo">
				<img src={logo} alt="logo" />
				<p>YARN</p>
			</div>
			<img
				className="nav-drop-down"
				src={drop_down}
				alt=""
				onClick={dropDownToggle}
			/>
			<ul ref={menuRef} className="nav-menu">
				<li
					onClick={() => {
						setMenu("shop");
					}}
				>
					<Link className="link" to="/">
						Shop
					</Link>

					{menu === "shop" ? <hr /> : <></>}
				</li>

				<li
					onClick={() => {
						setMenu("mens");
					}}
				>
					<Link className="link" to="/mens">
						Men
					</Link>
					{menu === "mens" ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu("women");
					}}
				>
					<Link className="link" to="/womens">
						Women
					</Link>
					{menu === "women" ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu("kids");
					}}
				>
					<Link className="link" to="/kids">
						Kids
					</Link>
					{menu === "kids" ? <hr /> : <></>}
				</li>
			</ul>
			<div className="nav-login-cart">
				<Link to="/login">
					<button>Login</button>
				</Link>
				<Link to="/cart">
					<img src={cartIcon} alt="" />
				</Link>
				<div className="nav-cart-count">{getTotalCartItems()}</div>
			</div>
		</div>
	);
};

export default Navbar;
