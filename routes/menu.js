import { getNameAndPath, host } from "./endpoints.js";
import axios from "axios";

const categories = [
	{ name: "Main", id: 0 },
	{ name: "Side", id: 1 },
	{ name: "Appetizer", id: 2 },
	{ name: "Sweet", id: 3 },
	{ name: "Snack", id: 4 },
	{ name: "Drink", id: 5 },
];

export const menuGetHandler = async (req, res) => {
	if (req.query.category) {
		const food_list = await axios
			.get(`http://${host}:8000/dish/${req.query.category}`)
			.then((result) => {
				return result.data;
			});
		res.render("menu", {
			title: "Pinus Sylvestris",
			endpoints: getNameAndPath(),
			categories,
			food_list,
		});
	} else {
		const food_list = await axios
			.get(`http://${host}:8000/dish/`)
			.then((result) => {
				return result.data;
			});
		res.render("menu", {
			title: "Pinus Sylvestris",
			endpoints: getNameAndPath(),
			categories,
			food_list,
		});
	}
};

export const menuPostHandler = async (req, res) => {
	console.log(req.body);
	res.status(200).send("OK")
};
