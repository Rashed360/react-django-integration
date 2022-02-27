import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchDepartment } from '../redux/actions'

const mapStateToProps = state => {
	return {
		department: state.DEPARTMENT,
		loading: state.DEPARTMENT_LOADING,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDepartment: () => dispatch(fetchDepartment()),
	}
}

const Department = props => {
	useEffect(() => {
		props.fetchDepartment()
	})

	const department_data = (
		<Table bordered>
			<thead>
				<tr>
					<th>Department Id</th>
					<th>Department Name</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{props?.department.map(dept => (
					<tr key={dept.department_id}>
						<td>{dept.department_id}</td>
						<td>{dept.department_name}</td>
						<td>Edit/Delete</td>
					</tr>
				))}
			</tbody>
		</Table>
	)

	return props.loading ? <div>Loading</div> : department_data
}

export default connect(mapStateToProps, mapDispatchToProps)(Department)
