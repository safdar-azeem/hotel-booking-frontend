import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

type BtnProps = {
	handleOptions: () => void
}

const SearchOptions = ({ options, setOptions }) => {
	const handleOption = (name: any, operation: any) => {
		setOptions((prev: any) => {
			return {
				...prev,
				[name]:
					operation === 'i' ? options[name] + 1 : options[name] - 1,
			}
		})
	}

	return (
		<div className='options '>
			<div className='optionItem'>
				<span className='optionText'>Adult</span>
				<div className='optionCounter'>
					<Button
						onClick={() => handleOption('adult', 'd')}
						className='optionCounterBtn text-left md:text-center'
						content='-'
						size='tiny'
						basic
						disabled={options.adult <= 1}
					/>
					<span className='optionCounterNumber'>{options.adult}</span>
					<Button
						onClick={() => handleOption('adult', 'i')}
						className='optionCounterBtn'
						content='+'
						size='tiny'
						basic
					/>
				</div>
			</div>
			<div className='optionItem'>
				<span className='optionText'>Room</span>
				<div className='optionCounter'>
					<Button
						disabled={options.room <= 1}
						onClick={() => handleOption('room', 'd')}
						className='optionCounterBtn'
						content='-'
						size='tiny'
						basic
					/>
					<span className='optionCounterNumber'>{options.room}</span>
					<Button
						onClick={() => handleOption('room', 'i')}
						className='optionCounterBtn'
						content='+'
						size='tiny'
						basic
					/>
				</div>
			</div>
		</div>
	)
}

export default SearchOptions
