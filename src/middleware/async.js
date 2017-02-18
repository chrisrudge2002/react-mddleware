export default function({dispatch}) {
	return next => action => {
		if (!action.users || !action.users.then) {
			return next(action);
		} else {
			action.users.then(response => dispatch({ ...action, users: response }));
		}
	};
}
