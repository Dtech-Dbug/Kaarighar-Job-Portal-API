import axios from 'axios';

//CRUD
import API_URL from '../utils/API_URL';

export const createCategory = async (values) => {
	return await axios.post(`${API_URL}/admin/category`, values, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getAllCategories = async () => {
	return await axios.get(`${API_URL}/admin/categories`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

//read a single category
export const readCategory = async (slug) => {
	return await axios.get(`${API_URL}/admin/category/${slug}`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const editCategory = async (slug, values) => {
	return await axios.put(`${API_URL}/admin/category/${slug}`, values, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const deleteCategory = async (slug) => {
	return await axios.delete(`${API_URL}/admin/category/${slug}`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

// create a sub category
export const createSubCategory = async (values) => {
	return await axios.post(`${API_URL}/admin/sub-category`, values, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

// get all sub categories by slug
export const getAllSubCategories = async (id) => {
	return await axios.get(`${API_URL}/admin/${id}/sub-categories`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};
