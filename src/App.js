import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";

import Cart from "./Pages/Cart";

import Footer from "./Components/Footer/Footer";
import banner_mens from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import Product from "./Pages/Product/Product";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route
						path="/mens"
						element={<ShopCategory category="men" banner={banner_mens} />}
					/>
					<Route
						path="/womens"
						element={<ShopCategory category="women" banner={banner_women} />}
					/>
					<Route
						path="/kids"
						element={<ShopCategory category="kid" banner={banner_kids} />}
					/>
					<Route path="/product" element={<Product />}>
						<Route path=":productId" element={<Product />} />
					</Route>
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginSignup />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
