import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
	DEPARTMENT: [],
	DEPARTMENT_LOADING: true,
	EMPLOYEE: [],
	EMPLOYEE_LOADING: true,
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export const store = createStore(reducer, applyMiddleware(thunk))
