import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const Navigation = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Navbar.Brand href='#home'>React dJango-REST</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<NavLink className='nav-link' to='/'>Home</NavLink>
						<NavLink className='nav-link' to='/department'>Department</NavLink>
						<NavLink className='nav-link' to='/employee'>Employee</NavLink>
						<NavDropdown title='Actions' id='basic-nav-dropdown'>
							<NavDropdown.Item>GET</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>POST</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>PUT</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>DELETE</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
