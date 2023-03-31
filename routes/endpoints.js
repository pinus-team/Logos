import home from "./home.js";
import not_found from "./not-found.js";
import support from "./support.js";
import story from "./story.js";
import delivery from "./delivery.js";
import restaurant, { restaurantUpdateOrderStatus } from "./restaurant.js";
import history from "./history.js";
import summary from "./summary.js";

import { loginGetHandler, loginPostHandler, logoutHandler } from "./login.js";
import { registerGetHandler, registerPostHandler } from "./register.js";
import { menuGetHandler, menuPostHandler } from "./menu.js";
import dotenv from "dotenv";
import {
	addressGetHandler,
	orderGetHandler,
	profileGetHandler,
	profilePostHandler,
} from "./profile.js";
import { bagDelHandler, bagGetHandler, bagPostHandler } from "./bag.js";
import { orderSingleGetHandler } from "./order.js";
import newsGetHandler from "./news.js";

dotenv.config();

export const host = process.env.HOST || "127.0.0.1";
console.log(`Host: ${host}`);

export const endpoints = [
	{
		name: "Home",
		on_navbar: false,
		auth_required: 0,
		on_private_navbar: false,
		path: "/",
		method: "get",
		handler: home,
	},
	{
		name: "News",
		on_navbar: false,
		auth_required: 0,
		on_private_navbar: false,
		path: "/news",
		method: "get",
		handler: newsGetHandler,
	},
	{
		name: "Menu",
		on_navbar: true,
		auth_required: 0,
		on_private_navbar: false,
		path: "/menu",
		method: "get",
		handler: menuGetHandler,
	},
	{
		name: "Menu",
		on_navbar: false,
		auth_required: 1,
		on_private_navbar: false,
		path: "/menu",
		method: "post",
		handler: menuPostHandler,
	},
	{
		name: "Story",
		on_navbar: true,
		auth_required: 0,
		on_private_navbar: false,
		path: "/story",
		method: "get",
		handler: story,
	},
	{
		name: "Support",
		on_navbar: true,
		auth_required: 0,
		on_private_navbar: false,
		path: "/support",
		method: "get",
		handler: support,
	},
	{
		name: "Delivery",
		on_navbar: false,
		auth_required: 2,
		on_private_navbar: true,
		path: "/restaurant/delivery",
		method: "get",
		handler: delivery,
	},
	{
		name: "Today",
		on_navbar: false,
		auth_required: 2,
		on_private_navbar: true,
		path: "/restaurant",
		method: "get",
		handler: restaurant,
	},
	{
		name: "Update Order Status",
		on_navbar: false,
		auth_required: 2,
		on_private_navbar: false,
		path: "/restaurant",
		method: "post",
		handler: restaurantUpdateOrderStatus,
	},
	{
		name: "History",
		on_navbar: false,
		auth_required: 2,
		on_private_navbar: true,
		path: "/restaurant/history",
		method: "get",
		handler: history,
	},
	{
		name: "Summary",
		on_navbar: false,
		auth_required: 2,
		on_private_navbar: true,
		path: "/restaurant/summary",
		method: "get",
		handler: summary,
	},
	{
		name: "Login",
		on_navbar: false,
		auth_required: 0,
		on_private_navbar: false,
		path: "/login",
		method: "get",
		handler: loginGetHandler,
	},
	{
		name: "Login",
		on_navbar: false,
		auth_required: 0,
		on_private_navbar: false,
		path: "/login",
		method: "post",
		handler: loginPostHandler,
	},
	{
		name: "Logout",
		on_navbar: false,
		auth_required: 1,
		on_private_navbar: false,
		path: "/logout",
		method: "get",
		handler: logoutHandler,
	},
	{
		name: "Register",
		on_navbar: false,
		auth_required: 0,
		on_private_navbar: false,
		path: "/register",
		method: "get",
		handler: registerGetHandler,
	},
	{
		name: "Register",
		on_navbar: false,
		auth_required: 0,
		on_private_navbar: false,
		path: "/register",
		method: "post",
		handler: registerPostHandler,
	},
	{
		name: "Order",
		on_navbar: false,
		auth_required: 1,
		path: "/order",
		method: "get",
		handler: orderSingleGetHandler,
	},
	{
		name: "Profile",
		on_navbar: false,
		auth_required: 1,
		path: "/profile",
		method: "get",
		handler: profileGetHandler,
	},
	{
		name: "Address",
		on_navbar: false,
		auth_required: 1,
		path: "/profile/address",
		method: "get",
		handler: addressGetHandler,
	},
	{
		name: "Order",
		on_navbar: false,
		auth_required: 1,
		path: "/profile/orders",
		method: "get",
		handler: orderGetHandler,
	},
	{
		name: "Change Profile",
		on_navbar: false,
		auth_required: 1,
		path: "/profile*",
		method: "post",
		handler: profilePostHandler,
	},
	{
		name: "Bag",
		on_navbar: false,
		auth_required: 1,
		on_private_navbar: false,
		path: "/bag",
		method: "get",
		handler: bagGetHandler,
	},
	{
		name: "Place Order",
		on_navbar: false,
		auth_required: 1,
		on_private_navbar: false,
		path: "/bag",
		method: "post",
		handler: bagPostHandler,
	},
	{
		name: "Delete Bag Item",
		on_navbar: false,
		auth_required: 1,
		on_private_navbar: false,
		path: "/bag/del",
		method: "post",
		handler: bagDelHandler,
	},
	{
		name: "Page Not Found",
		on_navbar: false,
		auth_required: 0,
		on_private_navbar: false,
		path: "*",
		method: "get",
		handler: not_found,
	},
];

export function getNameAndPath() {
	return endpoints
		.filter((endpoint) => {
			return endpoint.on_navbar;
		})
		.map((endpoint) => {
			return {
				name: endpoint.name,
				path: endpoint.path,
			};
		});
}

export function getPrivateNameAndPath() {
	return endpoints
		.filter((endpoint) => {
			return endpoint.on_private_navbar;
		})
		.map((endpoint) => {
			return {
				name: endpoint.name,
				path: endpoint.path,
			};
		});
}
