import axios from 'axios';

export const getAllJobs = async () => {
	return await axios.get('http://localhost:8000/api/jobs', {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getJob = async (slug) => {
	return await axios.get(`http://localhost:8000/api/job/${slug}`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};
