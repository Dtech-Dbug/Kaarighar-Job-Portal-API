import axios from 'axios';

export const getAllJobs = async () => {
	return await axios.get('http://localhost:8000/api/jobs', {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getJobInfo = async (id) => {
	return await axios.get(`http://localhost:8000/api/job/${id}`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};
