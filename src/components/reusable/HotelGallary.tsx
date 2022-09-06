import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Hotel from './HotelCard'

const HotelGellary = () => {
	return (
		<Grid>
			<Grid.Row className='gap-y-10'>
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
			</Grid.Row>
		</Grid>
	)
}

export default HotelGellary
