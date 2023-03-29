import express from "express";
import auth from "./middleman/auth.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT ? process.env.PORT: 3000

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(auth);
app.set("views", "views");
app.set("view engine", "ejs");

import { endpoints } from "./routes/endpoints.js";

app.use(express.static("public"));
app.use(express.static("node_modules/tw-elements/dist/js"));

for (const endpoint of endpoints) {
	app[endpoint.method](endpoint.path, endpoint.handler);
}


app.listen(port, function () {
	console.log(`Server started on port ${port}`);
});
