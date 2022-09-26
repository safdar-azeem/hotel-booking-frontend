import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'
import '../../assets/sass/main.scss'
import useForm from '../../hooks/useForm'
import loginJson from '../../json/login.json'
import { IForm } from '../../types/forms.type'
import { Routes } from '../../types/routes.type'
import { useLoginMutation } from '../../store/reducers/auth.reducer'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import React from 'react'

const Login = () => {
	const navigation = useNavigate()
	const { form, handleChange, doValidate, isValid } = useForm(loginJson)
	const [login, { data, error }] = useLoginMutation()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!isValid) return doValidate()
		login({
			email: form.email.value,
			password: form.password.value,
		})
	}

	React.useEffect(() => {
		error && 'data' in error && toast.error(error.data.message)
		if (data) {
			Cookies.set('token', data.token)
			toast.success('Login successful')
			navigation(Routes.Home)
		}
	}, [error, data])

	return (
		<Form
			className='p-10 mx-auto mt-20'
			onSubmit={handleSubmit}>
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
								form[inputField.name]?.error
									? { content: form[inputField.name].error }
									: false
							}
							fluid
							size='large'
							onChange={handleChange}
							type={inputField.type}
							label={`${inputField.label}${
								inputField.required ? '*' : ''
							}`}
							name={inputField.name}
							value={form[inputField.name].value}
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
