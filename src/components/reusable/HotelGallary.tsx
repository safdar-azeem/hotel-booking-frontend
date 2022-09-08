import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Hotel from './HotelCard'

const HotelGellary = () => {
	return (
		<Grid>
			<Grid.Row className='gap-y-10'>
				{[...Array(10)].map((_, i) => (
					<Hotel />
				))}
			</Grid.Row>
		</Grid>
	)
}

export default HotelGellary
