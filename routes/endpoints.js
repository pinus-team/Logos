import home from "./home.js";
import not_found from "./not-found.js";
import support from "./support.js";
import story from "./story.js";
import delivery from "./delivery.js";
import { loginGetHandler, loginPostHandler } from "./login.js";
import { registerGetHandler, registerPostHandler } from "./register.js";
import { menuGetHandler } from "./menu.js";
import dotenv from "dotenv";

dotenv.config();

export const host = process.env.HOST || "127.0.0.1";


export const endpoints = [
	{
		name: "Home",
		on_navbar: false,
		auth_required: false,
		path: "/",
		method: "get",
		handler: home,
	},
	{
		name: "Menu",
		on_navbar: true,
		auth_required: false,
		path: "/menu",
		method: "get",
		handler: menuGetHandler,
	},
	{
		name: "Support",
		on_navbar: true,
		auth_required: false,
		path: "/support",
		method: "get",
		handler: support,
	},
	{
		name: "Story",
		on_navbar: true,
		auth_required: false,
		path: "/story",
		method: "get",
		handler: story,
	},
	{
		name: "Delivery",
		on_navbar: false,
		auth_required: false,
		path: "/N59Zg7/delivery",
		method: "get",
		handler: delivery,
  },
  {
		name: "Login",
		on_navbar: false,
		auth_required: false,
		path: "/login",
		method: "get",
		handler: loginGetHandler,
	},
	{
		name: "Login",
		on_navbar: false,
		auth_required: false,
		path: "/login",
		method: "post",
		handler: loginPostHandler,
	},
	{
		name: "Register",
		on_navbar: false,
		auth_required: false,
		path: "/register",
		method: "get",
		handler: registerGetHandler,
	},
	{
		name: "Register",
		on_navbar: false,
		auth_required: false,
		path: "/register",
		method: "post",
		handler: registerPostHandler,
	},
	{
		name: "Page Not Found",
		on_navbar: false,
		auth_required: false,
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
