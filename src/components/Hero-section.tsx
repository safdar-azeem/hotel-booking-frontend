import React, { useState } from 'react'
import {
	Button,
	Container,
	Grid,
	Header,
	Icon,
	Image,
	Input,
	InputOnChangeData,
} from 'semantic-ui-react'
import '../assets/sass/main.scss'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import DatePicker from './Date-Picker'

const HeroSection = () => {
	const src =
		'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'

	const [distination, setDistination] = useState('')
	const [dates, setDates] = useState('')
	const [guest, setGuest] = useState('')
	const [room, setRoom] = useState('')
	const [openDate, setOpenDate] = useState(false)
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	])
	const navigate = useNavigate()

	const handleSearch = () => {
		navigate('/hotels', { state: { distination, date, guest, room } })
	}

	return (
		<Container className='hero-section'>
			<Grid className='p-2 pb-0'>
				<Grid.Column
					mobile={16}
					tablet={16}
					computer={8}>
					<div className='mr-80'>
						<Header
							className='mb-10'
							as={'h1'}>
							Find your perfect place to stay
						</Header>
						<Header
							className='text-gray-400 text-base font-thin hero-text mb-10'
							as={'p'}>
							Lorem ipsum dolor.heloye to your by ipsum dolorsit
							with famouse link from will to lorums
						</Header>
						<Button secondary>
							<Icon name='play circle' /> Watch Video
						</Button>
					</div>
				</Grid.Column>
				<Grid.Column
					className='hero-img-section'
					mobile={16}
					tablet={16}
					computer={8}>
					<Image
						className=' rounded-md'
						src={src}
					/>
				</Grid.Column>
			</Grid>
			<Container className='flex justify-between p-3 w-11/12 rounded-md flex-wrap absolute top-3/4 bg-white '>
				<div className='flex-2 '>
					<Input
						icon='map marker alternate'
						iconPosition='left'
						placeholder='Search users...'
					/>
				</div>

				<div>
					<Button
						icon='users'
						iconPosition='left'
						content='Check-in--Check-Out'
						basic
					/>
				</div>
				<div>
					<Button
						icon='user'
						iconPosition='left'
						content='2-Adults-- 1-Rooms'
						basic
					/>
				</div>
				<div>
					<Button
						content='Search'
						secondary
					/>
				</div>
			</Container>
		</Container>
	)
}

export default HeroSection
