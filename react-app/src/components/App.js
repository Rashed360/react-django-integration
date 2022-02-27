import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Department from './Department'
import Employee from './Employee'

const App = () => {
	return (
		<>
			<Navigation />
			<div className='container mt-3'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/department' element={<Department />} />
					<Route path='/employee' element={<Employee />} />
				</Routes>
			</div>
		</>
	)
}

export default App
