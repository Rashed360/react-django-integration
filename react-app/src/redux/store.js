import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
	DEPARTMENT_LOAD,
	DEPARTMENT_LOADING,
	DEPARTMENT_LOAD_FAILED,
	DEPARTMENT_ADDING,
	DEPARTMENT_ADD_RESPONSE,
	DEPARTMENT_ADD_FAILED,
	DEPARTMENT_UPDATE_RESPONSE,
	DEPARTMENT_UPDATE_FAILED,
	DEPARTMENT_DELETE_RESPONSE,
	DEPARTMENT_DELETE_FAILED,
	EMPLOYEE_LOAD,
	EMPLOYEE_LOADING,
	EMPLOYEE_LOAD_FAILED,
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
	EMPLOYEE_LOADING_ERROR: false,

}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case DEPARTMENT_LOAD:
			let department = action.payload
			return {
				...state,
				DEPARTMENT: department,
			}
		case DEPARTMENT_LOADING:
			return {
				...state,
				DEPARTMENT_LOADING: action.payload,
			}
		case DEPARTMENT_LOAD_FAILED:
			return {
				...state,
				DEPARTMENT_LOADING_ERROR: true,
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
		case EMPLOYEE_LOAD:
			return {
				...state,
				EMPLOYEE: action.payload,
			}
		case EMPLOYEE_LOADING:
			return {
				...state,
				EMPLOYEE_LOADING: action.payload,
			}
		case EMPLOYEE_LOAD_FAILED:
			return {
				...state,
				EMPLOYEE_LOAD_FAILED: true,
			}
		default:
			return state
	}
}

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
