import news_list from "../mock_data/news.js";
import { getNameAndPath } from "./endpoints.js";
import axios from "axios";
import { host } from "./endpoints.js";

export default async (req, res) => {
	let news_list = await axios
		.get(`http://${host}:8000/news/`)
		.then((result) => {
            return result.data;
        });
	news_list.sort((a, b) => {
		return new Date(b.timestamp) - new Date(a.timestamp);
	});
    news_list.forEach((item) => {
        item.timestamp = new Date(item.timestamp * 1000).toLocaleString();
    });
	res.render("index", {
		title: "Pinus Sylvestris",
		endpoints: getNameAndPath(),
		news_list,
		user: req.user_data,
	});
};
