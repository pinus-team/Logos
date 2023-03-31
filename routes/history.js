import { getPrivateNameAndPath } from "./endpoints.js";
import axios from "axios";
import { host } from "./endpoints.js";

export default async (req, res) => {
	let orders = await axios
		.get(`http://${host}:8000/order/`)
		.then((result) => {
			return result.data;
		});
	//Filter Done
	orders = orders.filter((order) => order.status === 2);
	//Group by date
	const groups = orders.reduce((groups, order) => {
		const date = order.timestamp.split("T")[0];
		if (!groups[date]) {
			groups[date] = [];
		}
		groups[date].push(order);
		return groups;
	}, {});
	//Turn to array
	const orders_grouped = Object.keys(groups).map((date) => {
		return {
			date,
			orders: groups[date],
		};
	});
	//Sort by date
	orders_grouped.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});
	// console.log(orders_grouped)
	res.render("history", {
		title: "Pinus Sylvestris",
		endpoints: getPrivateNameAndPath(),
		user: req.user_data,
		orders: orders_grouped,
	});
};
