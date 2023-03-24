import express from "express";
import ejs from "ejs";
import { join } from "path";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("views", "views");
app.set("view engine", "ejs");

import { endpoints } from "./routes/endpoints.js";

app.use(express.static("public"));
app.use(express.static("/node_modules/tw-elements/dist/js"));

for (const endpoint of endpoints) {
	app[endpoint.method](endpoint.path, endpoint.handler);
}

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
