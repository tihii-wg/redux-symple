import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cashReducer } from './reducers/cashReducer';
import { usersReducer } from './reducers/usersReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
	cash: cashReducer,
	users: usersReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));