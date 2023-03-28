import home from "./home.js";
import not_found from "./not-found.js";
import support from "./support.js";
import story from "./story.js";
import { loginGetHandler, loginPostHandler } from "./login.js";
import { registerGetHandler } from "./register.js";

export const endpoints = [
	{
		name: "Home",
		on_navbar: false,
		path: "/",
		method: "get",
		handler: home,
	},
	{
		name: "Support",
		on_navbar: true,
		path: "/support",
		method: "get",
		handler: support,
	},
	{
		name: "Story",
		on_navbar: true,
		path: "/story",
		method: "get",
		handler: story,
	},
	{
		name: "Login",
		on_navbar: false,
		path: "/login",
		method: "get",
		handler: loginGetHandler,
	},
	{
		name: "Login",
		on_navbar: false,
		path: "/login",
		method: "post",
		handler: loginPostHandler,
	},
	{
		name: "Register",
		on_navbar: false,
		path: "/register",
		method: "get",
		handler: registerGetHandler,
	},
	{
		name: "Page Not Found",
		on_navbar: false,
		path: "*",
		method: "get",
		handler: not_found,
	},

];

export function getNameAndPath() {
	return endpoints.filter((endpoint) => {
		return endpoint.on_navbar;
	}).map((endpoint) => {
		return {
			name: endpoint.name,
			path: endpoint.path,
		};
	});
}
