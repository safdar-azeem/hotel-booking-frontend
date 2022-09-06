import React from 'react'
import { Header, HeaderContent, Icon } from 'semantic-ui-react'

const Features = () => {
	return (
		<HeaderContent className='flex align-top items-baseline w-2/5'>
			<Icon
				name='thumbs up'
				className=' mt-0 mr-8'
			/>{' '}
			<Header>
				<HeaderContent
					as={'h1'}
					className='mb-0 text-2xl'>
					Easy and reliable online transactions
				</HeaderContent>
				<HeaderContent
					className='text-gray-500 text-base '
					as={'span'}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Blanditiis autem similique soluta reiciendis voluptatum at
					rerum culpa expedita esse laudantium.
				</HeaderContent>
			</Header>
		</HeaderContent>
	)
}

export default Features
