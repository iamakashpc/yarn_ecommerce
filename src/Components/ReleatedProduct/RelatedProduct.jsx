import React from "react";
import "./RelatedProduct.css";
import data_products from "../Assets/data";
import Items from "../Item/Items";
const RelatedProduct = () => {
	return (
		<div className="related-product">
			<h1>Related Products</h1>
			<hr />
			<div className="related-products-items">
				{data_products.map((item, index) => {
					return (
						<Items
							key={index}
							id={item.id}
							name={item.name}
							image={item.image}
							new_price={item.new_price}
							old_price={item.old_price}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RelatedProduct;
