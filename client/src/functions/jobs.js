import axios from 'axios';

const url =  "http://localhost:8000/api/";
export const getAllJobs = async () => {
	return await axios.get(`${url}jobs`, {
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
