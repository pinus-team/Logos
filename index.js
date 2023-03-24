const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(
	express.static(path.join(__dirname, "/node_modules/tw-elements/dist/js"))
);

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
