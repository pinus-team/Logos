import { getNameAndPath } from "./endpoints.js";

export default (req, res) => {
    res.render("story", { title: "Pinus Sylvestris", endpoints: getNameAndPath() });
};

