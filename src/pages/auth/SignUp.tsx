import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
	Button,
	Checkbox,
	Form,
	Header,
	Image,
	Loader,
} from 'semantic-ui-react'
import '../../assets/sass/main.scss'
import { Routes } from '../../types/routes.type'
import signupJson from '../../json/signup.json'
import { IForm } from '../../types/forms.type'
import useForm from '../../hooks/useForm'
import { useSignupMutation } from '../../store/reducers/auth.reducer'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const SignUp = () => {
	const navigation = useNavigate()
	const [signup, { data, error, isLoading }] = useSignupMutation()
	const { form, handleChange, doValidate, setFormError, isValid } =
		useForm(signupJson)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!isValid) return doValidate()
		if (form.password.value !== form.confirmPassword.value) {
			return setFormError('confirmPassword', 'Passwords do not match')
		}

		signup({
			email: form.email.value,
			password: form.password.value,
			name: form.name.value,
		})
	}

	React.useEffect(() => {
		error && 'data' in error && toast.error(error.data.message)
		if (data) {
			Cookies.set('token', data.token)
			toast.success('Signup successful')
			navigation(Routes.Login)
		}
	}, [error, data])

	return (
		<Form
			className='p-10 mx-auto mt-20'
			onSubmit={handleSubmit}>
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
								form[inputField.name]?.error
									? { content: form[inputField.name].error }
									: false
							}
							fluid
							size='large'
							type={inputField.type}
							onChange={handleChange}
							name={inputField.name}
							label={`${inputField.label}${
								inputField.required ? '*' : ''
							}`}
							value={form[inputField.name].value}
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
				disabled={isLoading}
				loading={isLoading}
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
