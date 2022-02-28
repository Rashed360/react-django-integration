import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
	DEPARTMENT_LOAD,
	DEPARTMENT_LOAD_FAILED,
	DEPARTMENT_ADDING,
	DEPARTMENT_ADD_RESPONSE,
	DEPARTMENT_ADD_FAILED,
	DEPARTMENT_UPDATE_RESPONSE,
	DEPARTMENT_UPDATE_FAILED,
	DEPARTMENT_DELETE_RESPONSE,
	DEPARTMENT_DELETE_FAILED,
} from './actions'

const initialState = {
	DEPARTMENT: [],
	DEPARTMENT_LOADING: true,
	DEPARTMENT_LOADING_ERROR: false,

	DEPARTMENT_ADD_LOADING: false,
	DEPARTMENT_ADD_MSG: null,
	DEPARTMENT_ADD_FAILED: false,

	DEPARTMENT_UPDATE_MSG: null,
	DEPARTMENT_UPDATE_FAILED: false,

	DEPARTMENT_DELETE_MSG: null,
	DEPARTMENT_DELETE_FAILED: false,

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
				DEPARTMENT_LOADING: false,
			}
		case DEPARTMENT_LOAD_FAILED:
			return {
				...state,
				DEPARTMENT_LOADING_ERROR: true,
				DEPARTMENT_LOADING: false,
			}
		case DEPARTMENT_ADDING:
			return {
				...state,
				DEPARTMENT_ADD_LOADING: action.payload,
			}
		case DEPARTMENT_ADD_RESPONSE:
			return {
				...state,
				DEPARTMENT_ADD_LOADING: false,
				DEPARTMENT_ADD_MSG: action.payload,
				DEPARTMENT_ADD_FAILED: false,
			}
		case DEPARTMENT_ADD_FAILED:
			return {
				...state,
				DEPARTMENT_ADD_FAILED: true,
			}
		case DEPARTMENT_UPDATE_RESPONSE:
			return {
				...state,
				DEPARTMENT_ADD_LOADING: false,
				DEPARTMENT_UPDATE_MSG: action.payload,
				DEPARTMENT_UPDATE_FAILED: false,
			}
		case DEPARTMENT_UPDATE_FAILED:
			return {
				...state,
				DEPARTMENT_UPDATE_FAILED: true,
			}
		case DEPARTMENT_DELETE_RESPONSE:
			return {
				...state,
				DEPARTMENT_ADD_LOADING: false,
				DEPARTMENT_DELETE_MSG: action.payload,
				DEPARTMENT_DELETE_FAILED: false,
			}
		case DEPARTMENT_DELETE_FAILED:
			return {
				...state,
				DEPARTMENT_DELETE_FAILED: true,
			}
		default:
			return state
	}
}

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
