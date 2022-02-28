import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteDepartment } from '../redux/actions'
import Loader from './Loader'

const mapStateToProps = state => {
	return {
		addLoading: state.DEPARTMENT_ADD_LOADING,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteDepartment: id => dispatch(deleteDepartment(id)),
	}
}

const DepartmentDeleteModal = ({ showDeleteModal, setShowDeleteModal, deleteDepartment, addLoading }) => {
	const [consent, setConsent] = useState(false)
	const [consentError, setConsentError] = useState(false)

	const postDepartmentHandle = () => {
		if (consent === false) {
			setConsentError(true)
		} else {
			deleteDepartment(showDeleteModal.id)
			setShowDeleteModal({ ...showDeleteModal, show: false })
			setConsent(false)
		}
	}

	const handleChange = () => {
		setConsent(!consent)
	}

	return (
		<>
			<Modal
				size='md'
				show={showDeleteModal.show}
				onHide={() => setShowDeleteModal({ ...showDeleteModal, show: false })}
			>
				<Modal.Header closeButton>
					<Modal.Title id='modal-add'>Delete Department</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{addLoading ? (
						<Loader />
					) : (
						<Form>
							<Form.Group className='mb-3'>
								<Form.Group className='mb-3'>
									<Form.Check
										type='checkbox'
										checked={consent}
										onChange={handleChange}
										className={consentError ? 'is-invalid' : null}
										label={'Delete ' + showDeleteModal.name + '?'}
									/>
								</Form.Group>

								<Form.Text className='text-muted'>Once deleted, it can't be restored!</Form.Text>
							</Form.Group>
							<Button variant='danger' onClick={postDepartmentHandle}>
								Delete Department
							</Button>
						</Form>
					)}
				</Modal.Body>
			</Modal>
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentDeleteModal)
