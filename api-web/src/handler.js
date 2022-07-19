// GYM Capstone
const testimonial = require("./libraries/Testimonial/testimonial.json");
const { user } = require("./data.js");

// GYM Capstone
const getTestimonial = async (request, h) => {
	return h.response({ status: "success", data: testimonial }).code(200);
};

const loginAdmin = async (request, h) => {
	let { email, password } = request.payload;
	email = email.toLowerCase();

	const result = user.map((item) => {
		if (item.email == email && item.password == password) {
			return true;
		}
	});

	const data = user.filter((item) => {
		if (item.email == email && item.password == password) {
			return item;
		}
	});

	if (result.includes(true)) {
		return h
			.response({
				status: "success",
				token: "admin-" + password + "_token",
				data,
			})
			.code(200);
	}

	return h
		.response({
			status: "failed",
			message: "Authentication failed, please try again",
		})
		.code(400);
};

const updateAdmin = async (request, h) => {
	let { id, name, email, handphone, password } = request.payload;
	email = email.toLowerCase();

	const result = user.map((item) => {
		if (item.id == id) {
			item.name = name;
			item.email = email;
			item.handphone = handphone;
			item.password = password;
		}
	});

	return h.response({
		status: "sucess",
		user,
	});
};

const getAdmin = async (request, h) => {
	let { id } = request.query;

	let result = user.map((item) => {
		if (item.id == id) {
			return item;
		}
	});

	result = result.filter((item) => {
		return item !== undefined;
	});

	return h.response({
		status: "success",
		result,
	});
};

const getAllAdmin = async (request, h) => {
	return h.response({
		status: "success",
		user,
	});
};

const addAdmin = async (request, h) => {
	let { name, email, handphone, password } = request.payload;
	email = email.toLowerCase();
	let id = user.length + 1;

	let result = user.map((item) => {
		if (item.email == email) {
			return true;
		}
	});

	if (result.includes(true)) {
		return h.response({
			status: "failed",
			message: "Email exists, email must be an unique",
		});
	}

	user.push({
		id: id,
		name: name,
		email: email,
		handphone: handphone,
		password: password,
	});

	return h.response({ status: "success", user }).code(200);
};

const deleteAdmin = async (request, h) => {
	const { id } = request.query;

	let result = user.map((item, index) => {
		if (item.id == id) {
			user.splice(index, 1);
		}
	});

	return h
		.response({
			status: "success",
			user,
		})
		.code(200);
};

module.exports = {
	// GYM Capstone
	getTestimonial,
	loginAdmin,
	updateAdmin,
	getAdmin,
	addAdmin,
	deleteAdmin,
	getAllAdmin,
};
