import { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchDepartment } from '../redux/actions'
import Loader from './Loader'
import Toast from './Toast'
import DepartmentAddModal from './DepartmentAddModal'
import DepartmentEditModal from './DepartmentEditModal'
import DepartmentDeleteModal from './DepartmentDeleteModal'

const mapStateToProps = state => {
	return {
		department: state.DEPARTMENT,
		loading: state.DEPARTMENT_LOADING,
		loadingError: state.DEPARTMENT_LOADING_ERROR,

		addResponse: state.DEPARTMENT_ADD_MSG,
		addFailed: state.DEPARTMENT_ADD_FAILED,

		updateResponse: state.DEPARTMENT_UPDATE_MSG,
		updateFailed: state.DEPARTMENT_UPDATE_FAILED,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDepartment: () => dispatch(fetchDepartment()),
	}
}

const Department = ({
	fetchDepartment,
	department,
	loading,
	loadingError,
	addResponse,
	addFailed,
	updateResponse,
	updateFailed,
}) => {
	const [showAddModal, setShowAddModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState({ show: false, id: '', name: '' })
	const [showDeleteModal, setShowDeleteModal] = useState({ show: false, id: '', name: '' })

	useEffect(() => {
		fetchDepartment()
	}, [fetchDepartment, addResponse, updateResponse])

	const department_data = (
		<>
			<h4>List of Departments</h4>
			<div className='my-3'>
				<p>Add New Department</p>
				<Button size='sm' onClick={() => setShowAddModal(true)}>
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
							<td>
								<Button
									size='sm'
									variant='warning'
									onClick={() => {
										setShowEditModal({
											show: true,
											id: dept.department_id,
											name: dept.department_name,
										})
									}}
								>
									Edit
								</Button>{' '}
								<Button
									size='sm'
									variant='danger'
									onClick={() => {
										setShowDeleteModal({
											id: dept.department_id,
											name: dept.department_name,
										})
									}}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<DepartmentAddModal showAddModal={showAddModal} setShowAddModal={setShowAddModal} />
			<DepartmentEditModal showEditModal={showEditModal} setShowEditModal={setShowEditModal} />
			<DepartmentDeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} />
		</>
	)

	return loading ? <Loader /> : loadingError ? <div>Error Loading</div> : department_data
}

export default connect(mapStateToProps, mapDispatchToProps)(Department)
