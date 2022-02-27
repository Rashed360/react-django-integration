import axios from 'axios'

// Action :: Types
export const DEPARTMENT_LOAD = 'DEPARTMENT_LOAD'
export const DEPARTMENT_LOADING = 'DEPARTMENT_LOADING'
export const DEPARTMENT_LOAD_FAILED = 'DEPARTMENT_LOAD_FAILED'

export const EMPLOYEE_LOAD = 'EMPLOYEE_LOAD'
export const EMPLOYEE_LOADING = 'EMPLOYEE_LOADING'
export const EMPLOYEE_LOAD_FAILED = 'EMPLOYEE_LOAD_FAILED'

// Action :: Creators
export const loadDepartment = data => {
	return {
		type: DEPARTMENT_LOAD,
		payload: data,
	}
}
export const loadDepartmentFailed = () => {
	return {
		type: DEPARTMENT_LOAD_FAILED,
	}
}

export const fetchDepartment = () => dispatch => {
	axios
		.get(process.env.REACT_APP_API + 'department')
		.then(response => {
			dispatch(loadDepartment(response.data))
		})
		.catch(error => {
			dispatch(loadDepartmentFailed())
		})
}
