import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addcashAction, getcashAction } from './store/reducers/cashReducer';
import uuid from 'react-uuid';
import { addUsersAction, removeUsersAction } from './store/reducers/usersReducer';
import { fechingUsers } from './store/asynchAction/fechingUsers';


function App() {

	const cash = useSelector(state => state.cash.cash);
	const users = useSelector(state => state.users.users);
	const dispatch = useDispatch();

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
	const removeUser = (id) => {
		dispatch(removeUsersAction(id))
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
				<button onClick={() => { dispatch(fechingUsers()) }}>Add users from base.</button>
			</div>
			{users.length > 0 ?
				<div className='users-container'>
					{users.map(u => <div className='users' key={u.id} onClick={() => { removeUser(u.id) }}>{u.name}</div>)}
				</div> :
				<h2 className='empty-logo'>No users.</h2>
			}
		</div >
	)
}

export default App

