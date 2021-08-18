import axios from 'axios';

import API_URL from '../utils/constant/API_URL';
const url = `${API_URL}/api`;
export const getAllJobs = async () => {
	return await axios.get(`${url}/jobs`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getJobInfo = async (id) => {
	return await axios.get(`${url}/job/${id}`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};
