import { getPrivateNameAndPath } from "./endpoints.js";

export default (req, res) => {
    res.render("history", { title: "Pinus Sylvestris", endpoints: getPrivateNameAndPath() });
};