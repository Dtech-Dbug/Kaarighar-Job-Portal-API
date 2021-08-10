import {
	GET_USER,
	GET_USERS,
	USERS_ERROR,
	CLEAR_USERS,
	VERIFY_USER,
} from '../actions/types';

const initialState = {
	users: [],
	user: null,
	loading: false,
	error: {},
	verified: false,
};

function userReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_USER:
			return {
				...state,
				user: payload,
				loading: false,
			};
		case GET_USERS:
			return {
				...state,
				users: payload,
				loading: false,
			};
		case VERIFY_USER:
			return {
				...state,
				users: payload,
				loading: false,
			};
		case USERS_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
				user: null,
			};
		case CLEAR_USERS:
			return {
				...state,
				users: null,
			};
		default:
			return state;
	}
}

export default userReducer;
