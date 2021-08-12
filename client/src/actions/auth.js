import API from '../utils/api';
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	USER_LOADED,
	LOGOUT,
	AUTH_ERROR,
} from './types';

// Load User
export const loadUser = () => async (dispatch) => {
	try {
		const res = await API.get('/me');

		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

// Login User
export const login = (values) => async (dispatch) => {
	const body = values;

	try {
		const res = await API.post('/login', body);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});

		dispatch(loadUser());
	} catch (err) {
		// const errors = err.response.data.errors;

		if (err) {
			console.log('errors->', err.message);
		}

		dispatch({
			type: LOGIN_FAIL,
		});
	}
};

// Logout
export const logout = () => ({ type: LOGOUT });
