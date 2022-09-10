import { Link } from 'react-router-dom'
import { Card, Grid, Header, Icon, Image } from 'semantic-ui-react'
import { Routes } from '../../types/routes.type'
import { IHotelCard } from '../../types/routes.type'

const Hotel = ({ hotelCard }) => {
	return (
		<Grid.Column
			largeScreen={4}
			computer={5}
			tablet={8}
			mobile={16}>
			<Card className='border-0 outline-none shadow-lg rounded-lg md:w-full mx-auto'>
				<Card.Content>
					<Link to={Routes.Hotel}>
						<Image
							src={hotelCard.imgSrc}
							wrapped
							ui={false}
						/>
					</Link>
					<Card.Meta className='my-3'>
						<Icon name='map marker alternate' />
						<span className='date'>{hotelCard.location}</span>
					</Card.Meta>
					<Card.Content
						extra
						className='flex  justify-between mb-0 items-center'>
						<Link to={Routes.Hotel}>
							<Header
								as='h3'
								className='mb-0'>
								{hotelCard.hotelTitle}
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
								{hotelCard.rating}
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
						{hotelCard.price}
						<span className='text-gray-400'>/Night</span>
					</Header>
					<Icon
						name='bookmark outline'
						className='ml-0 outline-none cursor-pointer'
					/>
				</Card.Content>
			</Card>
		</Grid.Column>
	)
}

export default Hotel
