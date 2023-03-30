import { getPrivateNameAndPath } from "./endpoints.js";
// import order from "../mock_data/order.js";
import axios from "axios";
import { host } from "./endpoints.js";

export default async (req, res) => {
	const orders = await axios
		.get(`http://${host}:8000/order/`)
		.then((result) => {
			return result.data;
		});
	// console.log(orders)
	res.render("restaurant", {
		title: "Pinus Sylvestris",
		endpoints: getPrivateNameAndPath(),
		orders,
		user: req.user_data,
	});
};

export async function restaurantUpdateOrderStatus(req, res) {
	const { _id, status } = req.body;
	// console.log(_id, status)
	await axios
		.post(`http://${host}:8000/order/${_id}/`, { status })
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
}
