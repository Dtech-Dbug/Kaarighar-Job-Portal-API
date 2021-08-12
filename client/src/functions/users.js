import axios from 'axios';

export const verifyUser = async (values) => {
	return await axios.post(
		'http://localhost:8000/api/admin/verifyuser',
		values,
		{
			headers: {
				'Content-Type': 'application/json',
				'auth-token': localStorage.getItem('token'),
			},
		},
	);
};

export const getAllUsers = async () => {
	return await axios.get('http://localhost:8000/api/users', {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
};

export const getUserById = async(id) =>{
	return await axios.get(`http://localhost:8000/api/user/${id}`, {
		headers: {
			'auth-token': localStorage.getItem('token'),
		},
	});
}