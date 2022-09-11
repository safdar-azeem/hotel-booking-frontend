import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, InputOnChangeData } from 'semantic-ui-react'
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
			setError('')
			navigate(Routes.Hotels)
		} else {
			return setError('Please enter location!')
		}
	}

	return (
		<>
			<Form className='flex md:flex-row flex-col justify-between p-3 w-11/12 rounded-md flex-wrap absolute top-3/4 bg-white gap-x-7 gap-y-5 items-start'>
				<div className='flex-1 w-full'>
					<Form.Input
						icon='map marker alternate'
						className='w-full'
						iconPosition='left'
						placeholder='Where are you going?'
						value={distination}
						error={
							error
								? {
										content: 'Please enter your first name',
								  }
								: false
						}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>,
							data: InputOnChangeData
						) => {
							setDistination(data.value)
						}}
					/>
				</div>

				<div className='relative flex-1 w-full'>
					<DatePicker />
				</div>
				<div className='relative flex-1 w-full'>
					<Button
						onClick={() => setOpenOptions(!openOptions)}
						icon='user'
						iconPosition='left'
						className='w-full text-left md:text-center'
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

				<Button
					onClick={handleSearch}
					content='Search'
					className='flex-1 w-full'
					color='violet'
				/>
			</Form>
		</>
	)
}

export default SearchComponent
