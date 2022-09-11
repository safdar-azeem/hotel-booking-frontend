import { Link } from 'react-router-dom'
import { Card, Grid, Header, Icon, Image } from 'semantic-ui-react'
import { Routes } from '../../types/routes.type'
import { IHotel } from '../../types/hotel-card-type'

interface IHotelProps {
	hotel: IHotel
}

const Hotel = ({ hotel }: IHotelProps) => {
	return (
		<Grid.Column
			largeScreen={4}
			computer={5}
			tablet={8}
			mobile={16}>
			{hotel && (
				<Card className='border-0 outline-none shadow-lg rounded-lg md:w-full mx-auto'>
					<Card.Content>
						<Link to={Routes.Hotel}>
							<Image
								className='rounded-md w-full h-40'
								src={hotel.imgSrc}
								wrapped
								ui={false}
							/>
						</Link>
						<Card.Meta className='my-3'>
							<Icon name='map marker alternate' />
							<span className='location'>{hotel.location}</span>
						</Card.Meta>
						<Card.Content
							extra
							className='flex  justify-between mb-0 items-center'>
							<Link to={Routes.Hotel}>
								<Header
									as='h3'
									className='mb-0'>
									{hotel.hotelTitle}
								</Header>
							</Link>
							<div className='flex items-center'>
								<Icon
									name='star'
									color='yellow'
									className='mb-2'
								/>
								<Header
									size='tiny'
									className='flex-grow my-0'>
									{hotel.rating}
								</Header>
							</div>
						</Card.Content>
					</Card.Content>
					<Card.Content
						extra
						className='flex justify-between pb-0'>
						<Header
							size='tiny'
							className='flex-grow'>
							{hotel.price}
							<span className='text-gray-400'>/Night</span>
						</Header>
						<Icon
							name='bookmark outline'
							className='ml-0 outline-none cursor-pointer'
						/>
					</Card.Content>
				</Card>
			)}
		</Grid.Column>
	)
}

export default Hotel
