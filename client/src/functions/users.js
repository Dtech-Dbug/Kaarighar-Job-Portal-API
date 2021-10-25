import axios from 'axios';
const url = 'http://localhost:8000/api/';

export const verifyUser = async (values) => {
	return await axios.post(`${url}admin/verifyuser`, values, {
		headers: {
			'Content-Type': 'application/json',
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getAllUsers = async () => {
	return await axios.get(`${url}users`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getUserById = async (id) => {
	return await axios.get(`${url}user/${id}`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};
