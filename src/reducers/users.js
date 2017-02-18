import * as types from '../actions/types';

export default function (state = [], action) {
	switch (action.type) {
		case types.FETCH_USERS:
			return [...state, ...action.users.data];
		default:
			return state;
	}
}
