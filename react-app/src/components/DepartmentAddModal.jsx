import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { postDepartment } from '../redux/actions'
import Loader from './Loader'

const mapStateToProps = state => {
	return {
		addLoading: state.DEPARTMENT_ADD_LOADING,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		postDepartment: name => dispatch(postDepartment(name)),
	}
}

const DepartmentAddModal = ({
	showModal,
	setShowModal,
	postDepartment,
	addLoading,
}) => {
	const [departmentName, setDepartmentName] = useState('')
	const [departmentError, setDepartmentError] = useState(false)

	const postDepartmentHandle = () => {
		if (departmentName === '') {
			setDepartmentError(true)
		} else {
			postDepartment(departmentName)
			setShowModal(false)
            setDepartmentName('')
		}
	}

	const handleChange = event => {
		setDepartmentName(event.target.value)
	}

	return (
		<>
			<Modal size='lg' show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title id='modal-add'>Large Modal</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{addLoading ? (
						<Loader />
					) : (
						<Form>
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
							<Button variant='primary' onClick={postDepartmentHandle}>
								Add Department
							</Button>
						</Form>
					)}
				</Modal.Body>
			</Modal>
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentAddModal)
