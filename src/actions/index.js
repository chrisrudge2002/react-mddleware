import axios from 'axios';

import * as types from './types';

export function fetchUsers() {
	const request = axios.get('https://jsonplaceholder.typicode.com/users');

	return {
		type: types.FETCH_USERS,
		users: request
	};
}
