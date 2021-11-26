import axios from 'axios';
import API_URL from '../utils/API_URL';

export const verifyUser = async (values) => {
	return await axios.post(`${API_URL}/admin/verifyuser`, values, {
		headers: {
			'Content-Type': 'application/json',
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getAllUsers = async () => {
	return await axios.get(`${API_URL}/users`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getUserById = async (id) => {
	return await axios.get(`${API_URL}/user/${id}`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};
