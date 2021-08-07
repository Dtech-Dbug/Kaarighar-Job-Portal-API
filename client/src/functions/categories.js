import axios from "axios";

//CRUD
const url = "http://localhost:8000/api/admin";

export const createCategory = async (values) => {
	return await axios.post(
		`${url}/category`,
		{ values },
		{
			headers: {
				"auth-token": localStorage.getItem("token"),
			},
		}
	);
};

export const getAllCategories = async () => {
	return await axios.get(`${url}/categories`, {
		headers: {
			"auth-token": localStorage.getItem("token"),
		},
	});
};

//read a single category
export const readCategory = async (slug) => {
	return await axios.get(`${url}/category/${slug}`, {
		headers: {
			"auth-token": localStorage.getItem("token"),
		},
	});
};

export const editCategory = async (slug, values) => {
	return await axios.put(
		`${url}/category/${slug}`,
		{ values },
		{
			headers: {
				"auth-token": localStorage.getItem("token"),
			},
		}
	);
};

export const deleteCategory = async (slug, values) => {
	return await axios.delete(`${url}/category/${slug}`, {
		headers: {
			"auth-token": localStorage.getItem("token"),
		},
	});
};
