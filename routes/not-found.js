import { getNameAndPath } from "./endpoints.js";

export default (req, res) => {
    res.render("page-not-found", { title: "Pinus Sylvestris", endpoints: getNameAndPath(), user: req.user_data });
};
