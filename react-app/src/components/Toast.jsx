import { useState } from 'react'
import { Alert } from 'react-bootstrap'

const Toast = ({ variant, msg }) => {
	const [show, setShow] = useState(true)

	setTimeout(() => {
		setShow(false)
	}, 5000)

	return (
		<div className={show ? 'toasty' : 'toasty hide'}>
			<Alert className='mt-2 w-500' variant={variant}>
				{msg}
			</Alert>
		</div>
	)
}

export default Toast
