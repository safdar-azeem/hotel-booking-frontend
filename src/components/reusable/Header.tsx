import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Grid, Icon } from 'semantic-ui-react'
import Logo from '../../components/reusable/Logo'
import Navigation from '../../components/reusable/Navigation'
import { Routes } from '../../types/routes.type'

const Header = () => {
	const [isToggleActive, setIsToggleActvie] = React.useState(false)

	const handleToggleActive = () => setIsToggleActvie(!isToggleActive)

	return (
		<Container className=''>
			<Grid
				columns={3}
				padded>
				<Grid.Column
					mobile={16}
					tablet={4}
					computer={4}>
					<Grid columns={2}>
						<Grid.Column
							mobile={8}
							computer={16}>
							<Logo />
						</Grid.Column>
						<Grid.Column textAlign='right'>
							<div className='md:hidden block'>
								<Button
									icon
									onClick={handleToggleActive}>
									<Icon name='bars' />
								</Button>
							</div>
						</Grid.Column>
					</Grid>
				</Grid.Column>
				<Grid.Column
					mobile={16}
					tablet={6}
					computer={6}
					className={`md:block  ${
						isToggleActive ? 'block' : 'hidden'
					}`}>
					<Navigation />
				</Grid.Column>
				<Grid.Column
					mobile={16}
					tablet={6}
					computer={6}
					className={`md:text-right md:block  ${
						isToggleActive ? 'block' : 'hidden'
					}`}>
					<Button
						as={NavLink}
						color='violet'
						to={Routes.Login}>
						Sign in
					</Button>
					<Button
						as={NavLink}
						color='violet'
						to={Routes.SignUp}>
						Sign Up
					</Button>
				</Grid.Column>
			</Grid>
		</Container>
	)
}

export default Header
