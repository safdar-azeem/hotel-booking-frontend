import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import '../../assets/sass/main.scss'
import HeroHome from '../../components/Hero.Home'
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
			<HeroHome/>
			
		</Container>
	)
}

export default Home
