import React, { useState } from 'react'
import { Button, Container, Input } from 'semantic-ui-react'
import DatePicker from './Date-Picker'
import SearchOptions from './Search-Options'

type Options = {
	adult: number
	room: number
}
const SearchComponent = () => {
	const [openOptions, setOpenOptions] = useState(false)
	const [options, setOptions] = useState<Options>({
		adult: 1,
		room: 1,
	})

	return (
		<Container className='flex justify-between p-3 w-11/12 rounded-md flex-wrap absolute top-3/4 bg-white '>
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
					onClick={() => setOpenOptions(!openOptions)}
					icon='user'
					iconPosition='left'
					content={`${options.adult} adult--${options.room} room`}
					basic
				/>
				{openOptions && (
					<SearchOptions
						options={options}
						setOptions={setOptions}
					/>
				)}
			</div>
			<div>
				<Button
					content='Search'
					secondary
				/>
			</div>
		</Container>
	)
}

export default SearchComponent
