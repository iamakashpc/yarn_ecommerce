import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../Context/ShopContext";
import drop_down from "../../Components/Assets/dropdown_icon.png";
import Items from "../../Components/Item/Items";
const ShopCategory = (props) => {
	const { all_Products } = useContext(ShopContext);
	return (
		<div>
			<img src={props.banner} alt="" className="shopCategory-banner" />
			<div className="shopCategory-indexSort">
				<p>
					<span>Showing 1-12</span> out of 36 products
				</p>
				<div className="shopCategory-sort">
					Sort By <img src={drop_down} alt="" />
				</div>
			</div>
			<div className="shopCategory-products">
				{all_Products.map((item, index) => {
					if (props.category === item.category) {
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
					} else {
						return null;
					}
				})}
			</div>
			<div className="shopCategory-loadMore">Explore More</div>
		</div>
	);
};

export default ShopCategory;
