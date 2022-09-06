import React from 'react'
import {
	Card,
	Grid,
	HeaderContent,
	HeaderSubheader,
	Icon,
	Image,
} from 'semantic-ui-react'
import '../../assets/sass/main.scss'

const Hotel = () => {
	const src =
		'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
	return (
		<Grid.Column
			largeScreen={4}
			computer={5}
			tablet={8}
			mobile={16}>
			<HeaderContent className='hotel-card'>
				<Image
					src={src}
					className=' h-56 w-full rounded-md'
				/>
				<Card.Header>Lahore</Card.Header>
				<HeaderSubheader className='card-text-section'>
					<HeaderSubheader className='text-gray-500 mt-4'>
						<Icon name='map marker alternate' />
						<span className='text-[12px]'>Lahore</span>
					</HeaderSubheader>
					<HeaderContent className='flex justify-between'>
						<HeaderSubheader
							className='font-extrabold'
							as={'h1'}>
							Serena Hotel
						</HeaderSubheader>
						<HeaderSubheader
							as={'h1'}
							className='flex'>
							<Icon
								className=' text-yellow-400'
								name='star'
							/>
							<HeaderSubheader className=' text-gray-500 font-normal'>
								4.5
							</HeaderSubheader>
						</HeaderSubheader>
					</HeaderContent>
					<HeaderContent className='flex justify-between'>
						<HeaderContent className=' font-extrabold'>
							$100/{' '}
							<HeaderContent
								as={'span'}
								className='text-gray-500 font-normal'>
								night
							</HeaderContent>
						</HeaderContent>
						<HeaderContent>
							<Icon
								name='save'
								disabled
							/>
						</HeaderContent>
					</HeaderContent>
				</HeaderSubheader>
			</HeaderContent>
		</Grid.Column>
	)
}

export default Hotel
