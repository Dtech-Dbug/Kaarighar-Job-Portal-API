import axios from 'axios';
import API_URL from '../utils/constant/API_URL';
const url = `${API_URL}/api`;
export const verifyUser = async (values) => {
	return await axios.post(`${url}/admin/verifyuser`, values, {
		headers: {
			'Content-Type': 'application/json',
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getAllUsers = async () => {
	return await axios.get(`${url}/users`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getUserById = async (id) => {
	return await axios.get(`${url}/user/${id}`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};
