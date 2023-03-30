import order from "../mock_data/order.js";
import { getPrivateNameAndPath } from "./endpoints.js";

export default (req, res) => {
	res.render("delivery", {
		title: "To Delivery",
		endpoints: getPrivateNameAndPath(),
		order,
		user: req.user_data,
	});
};
