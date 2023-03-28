import order from "../mock_data/order.js";
import { getNameAndPath } from "./endpoints.js";

export default (req, res) => {
    res.render("delivery", { title: "To Delivery", endpoints: getNameAndPath(), order });
};

