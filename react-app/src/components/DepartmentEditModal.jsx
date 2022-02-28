import { useEffect } from 'react'
import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchDepartment, updateDepartment } from '../redux/actions'
import Loader from './Loader'

const mapStateToProps = state => {
	return {
		addLoading: state.DEPARTMENT_ADD_LOADING,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateDepartment: (id, name) => dispatch(updateDepartment(id, name)),
		fetchDepartment: () => dispatch(fetchDepartment()),
	}
}

const DepartmentEditModal = ({
	showEditModal,
	setShowEditModal,
	fetchDepartment,
	updateDepartment,
	addLoading,
}) => {
	const [departmentName, setDepartmentName] = useState('')
	const [departmentError, setDepartmentError] = useState(false)

	useEffect(() => {
		setDepartmentName(showEditModal.name)
	}, [showEditModal.name])

	const updateDepartmentHandle = () => {
		if (departmentName === '') {
			setDepartmentError(true)
		} else {
			updateDepartment(showEditModal.id, departmentName)
			setShowEditModal({ ...showEditModal, show: false })
			setDepartmentName('')
			fetchDepartment()
		}
	}

	const handleChange = event => {
		setDepartmentName(event.target.value)
	}

	return (
		<>
			<Modal
				size='md'
				show={showEditModal.show}
				onHide={() => setShowEditModal({ ...showEditModal, show: false })}
			>
				<Modal.Header closeButton>
					<Modal.Title id='modal-add'>Update Department Name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{addLoading ? (
						<Loader />
					) : (
						<Form>
							<Form.Group className='mb-3'>
								<Form.Label>Department Id</Form.Label>
								<Form.Control name='id' type='text' disabled={true} value={showEditModal.id} />
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Department Name</Form.Label>
								<Form.Control
									name='name'
									type='text'
									className={departmentError ? 'is-invalid' : null}
									value={departmentName}
									onChange={handleChange}
									placeholder='Enter Department Name'
								/>
								<Form.Text className='text-muted'>Department name must be valid.</Form.Text>
							</Form.Group>
							<Button variant='primary' onClick={updateDepartmentHandle}>
								Update Department
							</Button>
						</Form>
					)}
				</Modal.Body>
			</Modal>
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentEditModal)
