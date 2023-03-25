import home from "./home.js";
import not_found from "./not-found.js";
import support from "./support.js";

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
