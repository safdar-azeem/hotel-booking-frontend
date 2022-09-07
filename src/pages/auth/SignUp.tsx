import React from 'react'
import {
	Button,
	Checkbox,
	Form,
	Header,
	Image,
	ImageGroup,
} from 'semantic-ui-react'
import '../../assets/sass/main.scss'

const SignUp = () => {
	const src =
		'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
	return (
		<Header className='w-full relative'>
			<Image
				src={src}
				size='huge'
				className='w-full h-screen'
			/>
			<Header className='form-header p-10'>
				<Header className='sign-up-text'>Sign Up Form</Header>
				<Form>
					<Form.Field>
						<label>Enter Your Name</label>
						<input placeholder='Enter Your Name' />
					</Form.Field>
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
			</Header>
		</Header>
	)
}

export default SignUp
