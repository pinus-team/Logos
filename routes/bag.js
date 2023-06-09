import { getNameAndPath } from "./endpoints.js";
import axios from "axios";
import { categories } from "./menu.js";
import { host } from "./endpoints.js";

export const bagGetHandler = async (req, res) => {
	const bag_content = await axios
		.get(`http://${host}:8000/bag/${req.user_data._id}`)
		.then((result) => {
			return result.data;
		});
	const totalPrice =
		bag_content.length > 0
			? bag_content
					.reduce((sum, item) => sum + Number(item.price), 0)
					.toFixed(2)
			: Number(0).toFixed(2);
	res.render("bag", {
		title: "Pinus Sylvestris",
		endpoints: getNameAndPath(),
		user: req.user_data,
		bag_content,
		categories,
		totalPrice,
	});
};

export const bagPostHandler = async (req, res) => {
	const bag_content = await axios
		.get(`http://${host}:8000/bag/${req.user_data._id}`)
		.then((result) => {
			return result.data;
		});
	const totalPrice =
		bag_content.length > 0
			? bag_content
					.reduce((sum, item) => sum + Number(item.price), 0)
					.toFixed(2)
			: Number(0).toFixed(2);
	req.body.items = bag_content;
	req.body.totalPrice = totalPrice;
	req.body.user_id = req.user_data._id;
	await axios.post(`http://${host}:8000/order`, req.body);
	res.redirect("/bag");
};

export const bagDelHandler = async (req, res) => {
	await axios.post(`http://${host}:8000/bag/del/${req.body._id}`);
	res.redirect("/bag");
};
