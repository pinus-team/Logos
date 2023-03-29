import { getNameAndPath, host } from "./endpoints.js";
import axios from "axios";

export const loginGetHandler = (req, res) => {
	if (req.user_data) return res.redirect("/");
	res.render("login", {
		title: "Pinus Sylvestris",
		endpoints: getNameAndPath(),
		user: req.user_data,
	});
};

export const loginPostHandler = (req, res) => {
	axios.post(`http://${host}:8000/auth/login`, req.body).then(
		(response) => {
			res.cookie("pinus_jwt", response.data, {
				maxAge: 900000,
				httpOnly: true,
			});
			res.redirect("/profile");
		},
		(error) => {
			console.log(error);
			res.redirect("/login");
		}
	);
};

export const logoutHandler = (req, res) => {
    res.clearCookie("pinus_jwt");
    res.redirect("/");
}
