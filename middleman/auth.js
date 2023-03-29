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
			return endpoint.path.startsWith(req.originalUrl);
		});
	if (!endpoint) {
		return next();
	}
	if (endpoint.auth_required) {
		if (req.user_data) {
            return next();
		} else {
			return res.redirect("/login");
		}
	} else {
		return next();
	}
};
