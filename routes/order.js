import { getNameAndPath, host } from "./endpoints.js";
import axios from "axios";

export const orderSingleGetHandler = async (req, res) => {
	const order = await axios
		.get(`http://${host}:8000/order/${req.query.id}`)
		.then((result) => {
			return result.data;
		});
    if(req.user_data._id !== order.user_id) {
        res.redirect("/profile/order");
        return;
    }
	res.render("order", {
		title: "Pinus Sylvestris",
		endpoints: getNameAndPath(),
		user: req.user_data,
		order,
	});
};
