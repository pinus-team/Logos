import { getPrivateNameAndPath, host } from "./endpoints.js";
import axios from "axios";

export default async (req, res) => {
	const sums = await axios
		.get(`http://${host}:8000/order/summary/income`)
		.then((result) => {
			return result.data;
		});
	const best_selling_today = await axios
		.get(`http://${host}:8000/order/summary/dish_today`)
		.then((result) => {
			return result.data;
		});
	const best_selling_all = await axios
		.get(`http://${host}:8000/order/summary/dish_all`)
		.then((result) => {
			return result.data;
		});

	res.render("summary", {
		title: "Pinus Sylvestris",
		endpoints: getPrivateNameAndPath(),
		user: req.user_data,
		sums,
		best_selling: best_selling_today.slice(0, 5),
		best_selling_all: best_selling_all.slice(0, 5),
	});
};
