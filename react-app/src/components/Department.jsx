import { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchDepartment } from '../redux/actions'
import Loader from './Loader'
import Toast from './Toast'
import DepartmentAddModal from './DepartmentAddModal'

const mapStateToProps = state => {
	return {
		department: state.DEPARTMENT,
		loading: state.DEPARTMENT_LOADING,
		loadingError: state.DEPARTMENT_LOADING_ERROR,

		addResponse: state.DEPARTMENT_ADD_MSG,
		addFailed: state.DEPARTMENT_ADD_FAILED,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDepartment: () => dispatch(fetchDepartment()),
	}
}

const Department = ({ fetchDepartment, department, loading, loadingError, addResponse, addFailed }) => {
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		fetchDepartment()
	}, [fetchDepartment, addResponse])

	const department_data = (
		<>
			<h4>List of Departments</h4>
			<div className='my-3'>
				<p>Add New Department</p>
				<Button className='btn-sm' onClick={() => setShowModal(true)}>
					Add Department
				</Button>
				{addResponse === null ? (
					addFailed ? (
						<Toast variant='danger' msg='Internal Server Error' />
					) : null
				) : (
					<Toast variant={addFailed ? 'danger' : 'success'} msg={addResponse} />
				)}
			</div>
			<Table bordered className='w-500'>
				<thead>
					<tr>
						<th>Department Id</th>
						<th>Department Name</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{department.map(dept => (
						<tr key={dept.department_id}>
							<td>{dept.department_id}</td>
							<td>{dept.department_name}</td>
							<td>Edit/Delete</td>
						</tr>
					))}
				</tbody>
			</Table>
			<DepartmentAddModal showModal={showModal} setShowModal={setShowModal} />
		</>
	)

	return loading ? <Loader /> : loadingError ? <div>Error Loading</div> : department_data
}

export default connect(mapStateToProps, mapDispatchToProps)(Department)
