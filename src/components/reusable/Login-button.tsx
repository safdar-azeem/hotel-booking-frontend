import React from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { Routes } from '../../types/routes.type'

const LoginButton = () => {
	return (
		<div>
			<Button
				secondary
				as={NavLink}
				to={Routes.Login}>
				Sign in
			</Button>
			<Button
				secondary
				as={NavLink}
				to={Routes.SignUp}>
				Sign Up
			</Button>
		</div>
	)
}

export default LoginButton
