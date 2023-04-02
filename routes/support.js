import article from "../mock_data/article.js";
import { getNameAndPath } from "./endpoints.js";

export default (req, res) => {
    res.render("support", { title: "Pinus Sylvestris", endpoints: getNameAndPath(), article, user: req.user_data });
};

