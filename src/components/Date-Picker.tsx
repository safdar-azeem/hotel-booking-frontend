import React, { useState } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { DateRange, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'

const DatePicker = () => {
	const [openDate, setOpenDate] = useState(false)
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	])
	const handleSelect = (ranges: RangeKeyDict) => {
		setDate(ranges.selection)
	}

	return (
		<>
			<Button
				icon='calendar '
				content={`${
					date
						? `${format(
								date[0].startDate,
								'MM/dd/yyyy'
						  )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`
						: 'Check-in - Check-out'
				}
        
    `}
				basic
				onClick={() => setOpenDate(!openDate)}
				iconPosition='left'
			/>
			{openDate && (
				<DateRange
					className='absolute left-0 top-12'
					editableDateInputs={true}
					onChange={(item) => setDate([item.selection])}
					moveRangeOnFirstSelection={false}
					ranges={date}
				/>
			)}
		</>
	)
}

export default DatePicker
