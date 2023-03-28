import { getNameAndPath } from "./endpoints.js";

export const registerGetHandler = (req, res) => {
    res.render("register", { title: "Pinus Sylvestris", endpoints: getNameAndPath() });
}
