import React from 'react'
import { Container } from 'semantic-ui-react'
import '../../assets/sass/main.scss'
import Logo from '../../components/reuseable/Logo'

const Home = () => {
	return (
		<Container  className='home'>
			<Logo/>
		</Container>
	)
}

export default Home
