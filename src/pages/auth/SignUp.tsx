import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Checkbox, Form, Header, Image } from 'semantic-ui-react'
import '../../assets/sass/main.scss'
import { Routes } from '../../types/routes.type'
import signupJson from '../../json/signup.json'
import { IForm } from '../../types/forms.type'

const SignUp = () => {
	return (
		<Form className='p-10 mx-auto mt-20'>
			<Header
				as='h2'
				textAlign='center'>
				Sign Up Your Account
			</Header>
			{signupJson.map((inputField: IForm) => {
				return (
					<Form.Field>
						<Form.Input
							error={
								false && {
									content: inputField.ErrorMessage,
									pointing: 'below',
								}
							}
							fluid
							size='large'
							type={inputField.type}
							label={inputField.label}
							placeholder={inputField.placeholder}
							id={inputField.id}
						/>
					</Form.Field>
				)
			})}

			<Button
				type='submit'
				color='violet'
				size='large'
				fluid>
				Login
			</Button>
			<Header as='h6'>
				<span className='text-gray-500 mr-2'>
					Already have an account?
				</span>
				<Link to={Routes.Login}>Login</Link>
			</Header>
		</Form>
	)
}

export default SignUp
