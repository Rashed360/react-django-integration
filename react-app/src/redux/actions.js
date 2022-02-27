import axios from 'axios'

// Action :: Types
export const DEPARTMENT_LOAD = 'DEPARTMENT_LOAD'
export const DEPARTMENT_LOADING = 'DEPARTMENT_LOADING'
export const DEPARTMENT_LOAD_FAILED = 'DEPARTMENT_LOAD_FAILED'

export const DEPARTMENT_ADDING = 'DEPARTMENT_ADDING'
export const DEPARTMENT_ADD_FAILED = 'DEPARTMENT_ADD_FAILED'
export const DEPARTMENT_ADD_RESPONSE = 'DEPARTMENT_ADD_RESPONSE'

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
		.get(process.env.REACT_APP_API + 'department/')
		.then(response => {
			dispatch(loadDepartment(response.data))
		})
		.catch(error => {
			dispatch(loadDepartmentFailed())
		})
}

export const addingDepartment = mode => {
	return {
		type: DEPARTMENT_ADDING,
		payload: mode,
	}
}
export const addDepartmentResponse = msg => {
	return {
		type: DEPARTMENT_ADD_RESPONSE,
		payload: msg,
	}
}
export const addDepartmentFailed = () => {
	return {
		type: DEPARTMENT_ADD_FAILED,
	}
}
export const postDepartment = name => dispatch => {
	dispatch(addingDepartment(true))
	const department = {
		department_name: name,
	}
	axios
		.post(process.env.REACT_APP_API + 'department/', department)
		.then(response => {
			dispatch(addingDepartment(false))
			dispatch(addDepartmentResponse(response.data))
		})
		.catch(error => {
			dispatch(addingDepartment(false))
			dispatch(addDepartmentFailed())
		})
}
