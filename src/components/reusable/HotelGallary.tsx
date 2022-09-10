import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Hotel from './HotelCard'
import hotelCardJson from '../../json/hotel-card-json.json'
import { IHotelCard } from '../../types/routes.type'
const HotelGellary = () => {
	return (
		<Grid>
			<Grid.Row className='gap-y-10'>
				{hotelCardJson.map((hotelCard) => (
					<Hotel hotelCard={hotelCard} />
				))}
			</Grid.Row>
		</Grid>
	)
}

export default HotelGellary
