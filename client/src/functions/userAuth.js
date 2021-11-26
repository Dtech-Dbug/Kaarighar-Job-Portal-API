import axios from 'axios';

import API_URL from '../utils/API_URL';
export const registerUser = async (values) => {
	return await axios.post(`${API_URL}/register`, { values });
};

export const loginUser = async (values) => {
	return await axios.post(`${API_URL}/login`, { values });
};

export const forgotPassword = async (values) => {
	return await axios.post(`${API_URL}/forgot-password`, {
		values,
	});
};
