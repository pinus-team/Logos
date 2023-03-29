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

export const profilePostHandler = async (req, res) => {
	if (req.body.address) {
		if (!req.body.change_latlon) {
            console.log("Requesting Geolocation service.")
			const locationString = `${req.body.address}, ${req.body.city}, ${req.body.province} ${req.body.postal_code}`;
			console.log(locationString);
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
	await axios.post(`http://${host}:8000/user/`, req.body).catch((err) => {
		console.log(
			util.inspect(err.response.data.errInfo.details, { depth: 10 })
		);
		// console.table(err.response.data.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0]);
	});
	res.redirect(req.originalUrl);
};
