import { getNameAndPath } from "./endpoints.js";
import axios from "axios";

export const loginGetHandler = (req, res) => {
    res.render("login", { title: "Pinus Sylvestris", endpoints: getNameAndPath() });
}

export const loginPostHandler = (req, res) => {
    axios.post("http://localhost:8000/auth/login", req.body)
    // res.redirect("/");
}
