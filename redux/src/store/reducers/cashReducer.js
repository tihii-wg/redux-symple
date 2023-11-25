import { ADD__CASH, GET__CASH } from "../constantes";

const initialState = {
	cash: 0
}

export const cashReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD__CASH:
			return { ...state, cash: state.cash + action.payload }
		case GET__CASH:
			return { ...state, cash: state.cash - action.payload }
		default:
			return state;
	}
}

export const addcashAction = (payload) => ({ type: ADD__CASH, payload })
export const getcashAction = (payload) => ({ type: GET__CASH, payload })