import axios from 'axios';

//CRUD
const url = 'http://localhost:8000/api/admin';

export const createCategory = async (values) => {
	return await axios.post(
		`${url}/category`,
		{ values },
		{
			headers: {
				'auth-token': localStorage.getItem('token'),
			},
		},
	);
};

export const getAllCategories = async () => {
	return await axios.get(`${url}/categories`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};
