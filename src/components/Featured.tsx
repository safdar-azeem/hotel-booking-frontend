import React from 'react'
import { Button, Container, Header, HeaderContent } from 'semantic-ui-react'

const Featured = () => {
	return (
		<Container>
			<Header className='flex justify-between'>
				<HeaderContent
					className='text-4xl font-extrabold'
					as={'h1'}>
					Our most popular hotels
				</HeaderContent>
				<Button content='View All' />
			</Header>
			<Header className=' w-2/5 font-thin text-gray-500 leading-10'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
				nam laboriosam illum sit similique blanditiis quod totam vel
				suscipit? Quia eum dignissimos
			</Header>
			<Header> Hotel List Here </Header>
		</Container>
	)
}

export default Featured
