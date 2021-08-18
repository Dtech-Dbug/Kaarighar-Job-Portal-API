import axios from 'axios';
import store from '../store';
import { LOGOUT } from '../actions/types';

import API_URL from '../utils/constant/API_URL';

const API = axios.create({
	baseURL: `${API_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
	},
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

API.interceptors.response.use(
	(res) => res,
	(err) => {
		if (err.response.status === 401) {
			store.dispatch({ type: LOGOUT });
		}
		return Promise.reject(err);
	},
);

export default API;
