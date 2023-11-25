import {combineReducers, createStore} from 'redux';
import { cashReducer } from './reducers/cashReducer';
import { usersReducer } from './reducers/usersReducer';


const rootReducer = combineReducers({
	cash:cashReducer,
	users:usersReducer,
})

export const store = createStore(rootReducer);