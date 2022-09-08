import { Button, Container, Input } from 'semantic-ui-react'
import DatePicker from '../../components/reusable/Date-Picker'
import Header from '../../components/reusable/Header'
import SearchComponent from '../../components/reusable/Search-Component'
import SearchOptions from '../../components/reusable/Search-Options'

const Hotels = () => {
	return (
		<>
			<Header />
			<Container className='flex justify-between p-3  rounded-md flex-wrap'>
				<div className='flex-2'>
					<Input
						icon='map marker alternate'
						iconPosition='left'
						placeholder='Search users...'
					/>
				</div>
				<div className='relative'>
					<DatePicker />
				</div>
				<div className='relative'>
					<Button
						icon='user'
						iconPosition='left'
						content={`1-adult--1-room`}
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
		</>
	)
}

export default Hotels
