import { host, getNameAndPath } from "./endpoints.js";
import axios from "axios";

export default async (req, res) => {
    if(req.query._id == undefined) res.redirect("/")
	let news = await axios
		.get(`http://${host}:8000/news/${req.query._id}`)
		.then((result) => {
			return result.data;
		});
	res.render("news", {
		title: "Pinus Sylvestris",
		endpoints: getNameAndPath(),
		news,
		user: req.user_data,
	});
};
