import { Link } from 'react-router-dom'
import {
	Button,
	Checkbox,
	Form,
	Header,
	InputOnChangeData,
} from 'semantic-ui-react'
import '../../assets/sass/main.scss'
import { Routes } from '../../types/routes.type'
import loginJson from '../../json/login.json'
import { IForm } from '../../types/forms.type'
import { useState } from 'react'
import { createInitialState } from '../../utils/createInitialState'

const Login = () => {
	const [formState, setFormState] = useState<any>(
		createInitialState(loginJson)
	)

	return (
		<Form className='p-10 mx-auto mt-20'>
			<Header
				as='h2'
				textAlign='center'>
				Login Your Account
			</Header>

			{loginJson.map((inputField: IForm) => {
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
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>,
								data: InputOnChangeData
							) => {
								setFormState({
									...formState,
									[inputField.name]: data.value,
								})
							}}
							type={inputField.type}
							label={inputField.label}
							name={inputField.name}
							placeholder={inputField.placeholder}
							id={inputField.id}
						/>
					</Form.Field>
				)
			})}

			<Form.Field>
				<Checkbox label='Remember me' />
			</Form.Field>
			<Button
				type='submit'
				color='violet'
				size='large'
				fluid>
				Login
			</Button>
			<Header as='h6'>
				<span className='text-gray-500 mr-2'>
					Don't have an account?
				</span>
				<Link to={Routes.SignUp}>Sigup</Link>
			</Header>
		</Form>
	)
}

export default Login
