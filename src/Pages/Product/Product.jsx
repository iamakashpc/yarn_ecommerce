import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../../Components/BreadCrums/BreadCrum";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";

const Product = () => {
	const { all_Products } = useContext(ShopContext);
	const { productId } = useParams();
	const product = all_Products.find((e) => e.id === Number(productId));
	return (
		<div>
			<BreadCrum product={product} />
			<ProductDisplay product={product} />
		</div>
	);
};

export default Product;
