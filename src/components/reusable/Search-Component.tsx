import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Input, InputOnChangeData } from 'semantic-ui-react'
import { Routes } from '../../types/routes.type'
import DatePicker from './Date-Picker'
import SearchOptions from './Search-Options'

type Options = {
	adult: number
	room: number
}
const SearchComponent = () => {
	const [distination, setDistination] = useState<String>('')
	const [error, setError] = useState<String>('')
	const [openOptions, setOpenOptions] = useState(false)
	const [options, setOptions] = useState<Options>({
		adult: 1,
		room: 1,
	})
	const navigate = useNavigate()

	const handleSearch = () => {
		if (distination !== '') {
			navigate(Routes.Hotels)
		} else {
			return setError('Please enter location!')
		}
	}

	return (
		<>
			<Container className='flex justify-between p-3 w-11/12 rounded-md flex-wrap absolute top-3/4 bg-white '>
				<div className='flex-2'>
					<Input
						icon='map marker alternate'
						iconPosition='left'
						placeholder='Search users...'
						value={distination}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>,
							data: InputOnChangeData
						) => {
							setDistination(data.value)
						}}
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
						onClick={handleSearch}
						content='Search'
						secondary
					/>
				</div>
			</Container>
			<div className=' text-rose-600'>{error}</div>
		</>
	)
}

export default SearchComponent
