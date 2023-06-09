import { getNameAndPath } from "./endpoints.js";
import axios from "axios";
import { host } from "./endpoints.js";
import dotenv from "dotenv";
import util from "util";

dotenv.config();

const API_KEY = process.env.GEOLOC_API_KEY;

export const profileGetHandler = async (req, res) => {
	const user = await axios
		.get(`http://${host}:8000/user/${req.user_data._id}`)
		.then((result) => {
			return result.data;
		});
	res.render("profile", {
		title: "Pinus Sylvestris",
		endpoints: getNameAndPath(),
		user,
	});
};

export const addressGetHandler = async (req, res) => {
	const user = await axios
		.get(`http://${host}:8000/user/${req.user_data._id}`)
		.then((result) => {
			return result.data;
		});
	if (!user.address) user.address = {};
	res.render("address", {
		title: "Pinus Sylvestris",
		endpoints: getNameAndPath(),
		user,
	});
};

export const orderGetHandler = async (req, res) => {
	const orders = await axios
		.get(`http://${host}:8000/order/user/${req.user_data._id}`)
		.then((result) => {
			return result.data;
		});
	res.render("userorder", {
		title: "Pinus Sylvestris",
		endpoints: getNameAndPath(),
		user: req.user_data,
		orders,
	})
};
export const profilePostHandler = async (req, res) => {
	if (req.body.address) {
		if (!req.body.change_latlon) {
			const locationString = `${req.body.address}, ${req.body.city}, ${req.body.province} ${req.body.postal_code}`;
			const geoloc = await axios
				.get(
					`http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${locationString}`
				)
				.then((result) => {
					return result.data.data[0];
				});
			if (geoloc) {
				req.body.latitude = geoloc.latitude;
				req.body.longitude = geoloc.longitude;
			}
		}
		req.body = {
			address: req.body,
		};
	}
	req.body._id = req.user_data._id;
	await axios.post(`http://${host}:8000/user/`, req.body);
	res.redirect(req.originalUrl);
};
