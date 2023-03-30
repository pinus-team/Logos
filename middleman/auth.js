import jwt from "jsonwebtoken";
import { endpoints } from "../routes/endpoints.js";
import dotenv from "dotenv";

dotenv.config();

export default (req, res, next) => {
	if (req.cookies.pinus_jwt) {
		jwt.verify(
			req.cookies.pinus_jwt,
			process.env.JWT_SECRET,
			(err, decoded) => {
				if (err) {
					console.error(err.name);
					res.clearCookie("pinus_jwt");
				} else {
					req.user_data = decoded;
				}
			}
		);
	}
	const endpoint = endpoints
		.slice()
		.reverse()
		.find((endpoint) => {
			return req.originalUrl.startsWith(endpoint.path) && req.method.toLowerCase() == endpoint.method.toLowerCase();
		});
	if (!endpoint) {
		return next();
	}
	console.log(endpoint.name);
	if (endpoint.auth_required != 0) {
		if (req.user_data) {
			if (endpoint.auth_required - 1 <= req.user_data.role) {
				return next();
			} else {
				return res.redirect("/");
			}
		} else {
			return res.redirect("/login");
		}
	} else {
		return next();
	}
};
