import { getPrivateNameAndPath } from "./endpoints.js";
import axios from "axios";
import { host } from "./endpoints.js";

export default async (req, res) => {
	let orders = await axios
		.get(`http://${host}:8000/order/`)
		.then((result) => {
			return result.data;
		});
	//Filter Doing
	orders = orders.filter(
		(order) => order.status === 1 && order.delivery_method === "delivery"
	);
	res.render("delivery", {
		title: "To Delivery",
		endpoints: getPrivateNameAndPath(),
		orders,
		user: req.user_data,
	});
};
