import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Header, Image } from 'semantic-ui-react'
import '../../assets/sass/main.scss'
import { loginImgSrc } from '../../utils/index'

const Login = () => {
	return (
		<Header className='w-full relative'>
			<Image
				src={loginImgSrc}
				size='huge'
				className='w-full h-screen'
			/>
			<Header className='form-header p-10 '>
				<Header className='sign-up-text'>Login Your Account</Header>
				<Form>
					<Form.Field>
						<label>Enter Your Email</label>
						<input placeholder='Enter Your Email' />
					</Form.Field>
					<Form.Field>
						<label>Enter Your Password</label>
						<input placeholder='Enter Your Password' />
					</Form.Field>
					<Button
						secondary
						type='submit'
						className='w-full mt-5'>
						Submit
					</Button>
				</Form>
				<span className='text-base'>
					Need an Account?{' '}
					<NavLink
						className={'ml-4 nav-link border-b-2 text-blue-400'}
						to={'/signup'}>
						SignUp
					</NavLink>
				</span>
			</Header>
		</Header>
	)
}

export default Login
