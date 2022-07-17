const {
	// Gym Capstone
	getTestimonial,
	loginAdmin,
	updateAdmin,
	getAdmin,
	addAdmin,
	deleteAdmin,
	getAllAdmin,
} = require("./handler");

const routes = [
	// GYM Capstone
	{
		method: "GET",
		path: "/api/v1/testimonial",
		handler: getTestimonial,
	},
	{
		method: "POST",
		path: "/api/v1/admin/login",
		handler: loginAdmin,
	},
	{
		method: "POST",
		path: "/api/v1/admin/update",
		handler: updateAdmin,
	},
	{
		method: "GET",
		path: "/api/v1/admin/show",
		handler: getAdmin,
	},
	{
		method: "POST",
		path: "/api/v1/admin/add",
		handler: addAdmin,
	},
	{
		method: "GET",
		path: "/api/v1/admin/delete",
		handler: deleteAdmin,
	},
	{
		method: "GET",
		path: "/api/v1/admins",
		handler: getAllAdmin,
	},
];

module.exports = routes;
