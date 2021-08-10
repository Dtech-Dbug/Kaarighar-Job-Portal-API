import API from '../utils/api';
import { CLEAR_USERS, GET_USERS, USERS_ERROR } from './types';

// GEt all users
export const getUsers = () => async (dispatch) => {
	dispatch({ type: CLEAR_USERS });
	try {
		const res = await API.get('/users');
		dispatch({
			type: GET_USERS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: USERS_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status,
			},
		});
	}
};
