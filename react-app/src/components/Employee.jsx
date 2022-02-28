import { connect } from 'react-redux'
import { fetchEmployee } from '../redux/actions'
import Loader from './Loader'
import { Table, Button } from 'react-bootstrap'
import { useEffect } from 'react'

const mapStateToProps = state => {
	return {
		employee: state.EMPLOYEE,
		loading: state.EMPLOYEE_LOADING,
		loadingError: state.EMPLOYEE_LOADING_ERROR,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchEmployee: () => dispatch(fetchEmployee()),
	}
}

const Employee = props => {
	const { employee, fetchEmployee } = props
	useEffect(() => {
		if (employee.length === 0) {
			fetchEmployee()
		}
	}, [employee?.length, fetchEmployee])

	return (
		<>
			{props.loading ? (
				<Loader />
			) : (
				<Table bordered>
					<thead>
						<tr>
							<th>Profile</th>
							<th>Employee Id</th>
							<th>Employee Name</th>
							<th>Department</th>
							<th>Date of Join</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{props.employee.map(emp => (
							<tr key={emp.employee_id}>
								<td>{emp.profile_photo}</td>
								<td>{emp.employee_id}</td>
								<td>{emp.employee_name}</td>
								<td>{emp.department}</td>
								<td>{emp.join_date}</td>
								<td>
									<Button
										size='sm'
										variant='warning'
										// onClick={() => {
										// 	setShowEditModal({
										// 		show: true,
										// 		id: emp.employee_id,
										// 		name: emp.employee_name,
										// 	})
										// }}
									>
										Edit
									</Button>{' '}
									<Button
										size='sm'
										variant='danger'
										// onClick={() => {
										// 	setShowDeleteModal({
										// 		show: true,
										// 		id: emp.employee_id,
										// 		name: emp.employee_name,
										// 	})
										// }}
									>
										Delete
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee)
