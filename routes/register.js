import { getNameAndPath, host } from "./endpoints.js";
import axios from "axios";

export const registerGetHandler = (req, res) => {
	if (req.user_data) return res.redirect("/");
	res.render("register", {
		title: "Pinus Sylvestris",
		endpoints: getNameAndPath(),
		user: req.user_data,
	});
};

export const registerPostHandler = (req, res) => {
	req.body.role = 0;
	axios.post(`http://${host}:8000/auth/register`, req.body).then(
		(response) => {
			res.redirect("/login");
		},
		(error) => {
			res.redirect("/register");
		}
	);
};
