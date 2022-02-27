import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { DEPARTMENT_LOAD, DEPARTMENT_LOAD_FAILED } from './actions'

const initialState = {
	DEPARTMENT: [],
	DEPARTMENT_LOADING: true,
	EMPLOYEE: [],
	EMPLOYEE_LOADING: true,
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case DEPARTMENT_LOAD:
			let department = action.payload
			return {
				...state,
				DEPARTMENT: department,
			}
		default:
			return state
	}
}

export const store = createStore(reducer, applyMiddleware(thunk))
