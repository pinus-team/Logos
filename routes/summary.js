import { getPrivateNameAndPath } from "./endpoints.js";

export default (req, res) => {
    res.render("summary", { title: "Pinus Sylvestris", endpoints: getPrivateNameAndPath(), user: req.user_data });
};
