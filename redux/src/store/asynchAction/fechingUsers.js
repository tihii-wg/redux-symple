import { addManyUsersAction } from "../reducers/usersReducer"

export const fechingUsers = () => {
	return dispatch => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(users => users.json())
			.then(json => dispatch(addManyUsersAction(json)))
	}
}