import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Hotel from './HotelCard'
import hotelCardJson from '../../json/hotel-card-json.json'
import { IHotel } from '../../types/hotel-card-type'
const HotelGellary = () => {
	return (
		<Grid>
			<Grid.Row className='gap-y-10'>
				{hotelCardJson.map((value: IHotel) => (
					<Hotel hotel={value} />
				))}
			</Grid.Row>
		</Grid>
	)
}

export default HotelGellary
