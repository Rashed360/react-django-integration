import axios from 'axios'

// Action :: Types
export const DEPARTMENT_LOAD = 'DEPARTMENT_LOAD'
export const DEPARTMENT_LOADING = 'DEPARTMENT_LOADING'
export const DEPARTMENT_LOAD_FAILED = 'DEPARTMENT_LOAD_FAILED'

export const DEPARTMENT_ADDING = 'DEPARTMENT_ADDING'
export const DEPARTMENT_ADD_FAILED = 'DEPARTMENT_ADD_FAILED'
export const DEPARTMENT_ADD_RESPONSE = 'DEPARTMENT_ADD_RESPONSE'

export const DEPARTMENT_UPDATE_RESPONSE = 'DEPARTMENT_UPDATE_RESPONSE'
export const DEPARTMENT_UPDATE_FAILED = 'DEPARTMENT_UPDATE_FAILED'

export const DEPARTMENT_DELETE_RESPONSE = 'DEPARTMENT_DELETE_RESPONSE'
export const DEPARTMENT_DELETE_FAILED = 'DEPARTMENT_DELETE_FAILED'

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
export const loadingDepartment = mode => {
	return {
		type: DEPARTMENT_LOADING,
		payload: mode,
	}
}
export const loadDepartmentFailed = () => {
	return {
		type: DEPARTMENT_LOAD_FAILED,
	}
}

export const fetchDepartment = () => dispatch => {
	dispatch(loadingDepartment(true))
	axios
		.get(process.env.REACT_APP_API + 'department/')
		.then(response => {
			dispatch(loadDepartment(response.data))
			dispatch(loadingDepartment(false))
		})
		.catch(error => {
			dispatch(loadDepartmentFailed())
			dispatch(loadingDepartment(false))
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
			dispatch(addDepartmentResponse(response.data))
			dispatch(addingDepartment(false))
		})
		.catch(error => {
			dispatch(addDepartmentFailed())
			dispatch(addingDepartment(false))
		})
}

export const updateDepartmentResponse = msg => {
	return {
		type: DEPARTMENT_UPDATE_RESPONSE,
		payload: msg,
	}
}
export const updateDepartmentFailed = () => {
	return {
		type: DEPARTMENT_UPDATE_FAILED,
	}
}
export const updateDepartment = (id, name) => dispatch => {
	dispatch(addingDepartment(true))
	const department = {
		department_id: id,
		department_name: name,
	}
	axios
		.put(process.env.REACT_APP_API + 'department/', department)
		.then(response => {
			dispatch(updateDepartmentResponse(response.data))
			dispatch(addingDepartment(false))
		})
		.catch(error => {
			dispatch(updateDepartmentFailed())
			dispatch(addingDepartment(false))
		})
}

export const deleteDepartmentResponse = msg => {
	return {
		type: DEPARTMENT_DELETE_RESPONSE,
		payload: msg,
	}
}
export const deleteDepartmentFailed = () => {
	return {
		type: DEPARTMENT_DELETE_FAILED,
	}
}
export const deleteDepartment = id => dispatch => {
	dispatch(addingDepartment(true))
	axios
		.delete(process.env.REACT_APP_API + 'department/' + id)
		.then(response => {
			dispatch(deleteDepartmentResponse(response.data))
			dispatch(addingDepartment(false))
		})
		.catch(error => {
			dispatch(updateDepartmentFailed())
			dispatch(addingDepartment(false))
		})
}

export const loadEmployee = data => {
	return {
		type: EMPLOYEE_LOAD,
		payload: data,
	}
}
export const loadingEmployee = mode => {
	return {
		type: EMPLOYEE_LOADING,
		payload: mode,
	}
}
export const loadEmployeeFailed = () => {
	return {
		type: EMPLOYEE_LOAD_FAILED,
	}
}

export const fetchEmployee = () => dispatch => {
	dispatch(loadingEmployee(true))
	axios
		.get(process.env.REACT_APP_API + 'employee/')
		.then(response => {
			dispatch(loadEmployee(response.data))
			dispatch(loadingEmployee(false))
		})
		.catch(error => {
			dispatch(loadEmployeeFailed())
			dispatch(loadingEmployee(false))
		})
}
