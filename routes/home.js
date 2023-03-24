import news_list from "../mock_data/news.js";
import { getNameAndPath } from "./endpoints.js";

export default (req, res) => {
    res.render("index", { title: "Pinus Sylvestris", endpoints: getNameAndPath(), news_list });
};

