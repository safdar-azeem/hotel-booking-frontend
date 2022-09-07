import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
	Card,
	Grid,
	Header,
	HeaderContent,
	HeaderSubheader,
	Icon,
	Image,
} from 'semantic-ui-react'

const Hotel = () => {
	const navigate = useNavigate()
	const src =
		'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
	return (
		<Grid.Column
			largeScreen={4}
			computer={5}
			tablet={8}
			mobile={16}>
			<Card
				onClick={() => {
					navigate('/hotel')
				}}>
				<Card.Content>
					<Image
						className='rounded-md'
						src={src}
						wrapped
						ui={false}
					/>
					<Card.Meta className='mt-4'>
						<span>
							<Icon name='map marker alternate' /> lahore
						</span>
					</Card.Meta>

					<Card.Header className='flex items-center justify-between mt-4'>
						<Card.Content>Matthew</Card.Content>
						<Card.Content className='text-base items-center '>
							<Icon
								name='star'
								color='yellow'
							/>
							<span>4.5</span>
						</Card.Content>
					</Card.Header>
					<Card.Content className='flex justify-between items-center'>
						<Card.Content className='flex items-center mt-4'>
							<Card.Content className=' text-xl font-bold'>
								100$/
							</Card.Content>
							<Card.Meta>
								<span>Night</span>
							</Card.Meta>
						</Card.Content>
						<Icon
							name='bookmark outline'
							size='large'
							className=' outline-none'
						/>
					</Card.Content>
				</Card.Content>
			</Card>
		</Grid.Column>
	)
}

export default Hotel
