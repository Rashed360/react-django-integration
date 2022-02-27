import { Table } from 'react-bootstrap'

const Department = () => {
	const loading = true
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
				{department.map(dept => (
					<tr key={dept.department_id}>
						<td>{dept.department_id}</td>
						<td>{dept.department_name}</td>
						<td>Edit/Delete</td>
					</tr>
				))}
			</tbody>
		</Table>
	)

	return loading ? <div>Loading</div> : department_data
}

export default Department
