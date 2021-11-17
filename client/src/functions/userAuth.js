import axios from 'axios';

import API_URL from '../utils/API_URL';
const url = `${API_URL}/api`;
export const registerUser = async (values) => {
	return await axios.post(`${url}/register`, { values });
};

export const loginUser = async (values) => {
	return await axios.post(`${url}/login`, { values });
};

export const forgotPassword = async (values) => {
	return await axios.post(`${url}/forgot-password`, {
		values,
	});
};
