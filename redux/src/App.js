import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addcashAction, getcashAction } from './store/reducers/cashReducer';
import { ADD__USERS } from './store/constantes';
import uuid from 'react-uuid';
import { addUsersAction } from './store/reducers/usersReducer';


function App() {

	const cash = useSelector(state => state.cash.cash);
	const users = useSelector(state => state.users.users);
	const dispatch = useDispatch();
	console.log(cash);
	console.log(users);

	const addCash = (cash) => {
		dispatch(addcashAction(cash))
	}
	const getCash = (cash) => {
		dispatch(getcashAction(cash))
	}
	const addUsers = (name) => {
		const user = {
			id: uuid(),
			name,
		}
		dispatch(addUsersAction(user))
	}

	return (
		<div className='wraper'>
			<h1 className='logo'>
				Redux.
			</h1>
			<div className='cash'>
				{cash}
			</div>
			<div className='container'>
				<button onClick={() => { addCash(Number(prompt())) }}>Add.</button>
				<button onClick={() => { getCash(Number(prompt())) }}>Get.</button>
				<button onClick={() => { addUsers(prompt()) }}>Add users.</button>
				<button>Remove users.</button>
			</div>
			{users.length === 0 ?
				<h2 className='empty-logo'>No users.</h2> :
				<div>{users.name}</div>}

		</div>
	)
}

export default App

