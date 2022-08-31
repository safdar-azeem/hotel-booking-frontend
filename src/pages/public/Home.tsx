import React from 'react'
import { Container } from 'semantic-ui-react'
import '../../assets/sass/main.scss'
import LoginButton from '../../components/reuseable/Login.Button'
import Logo from '../../components/reuseable/Logo'
import Navigation from '../../components/reuseable/Navigation'

const Home = () => {
	return (
		<Container>
			<section className='header'>
			<Logo/>
			<Navigation/>
			<LoginButton/>
			</section>
			
			
		</Container>
	)
}

export default Home
