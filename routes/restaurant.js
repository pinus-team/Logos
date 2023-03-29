import { getPrivateNameAndPath } from "./endpoints.js";
import order from "../mock_data/order.js";


export default (req, res) => {
    res.render("restaurant", { title: "Pinus Sylvestris", endpoints: getPrivateNameAndPath(), order });
};
