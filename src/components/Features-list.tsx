import React from 'react'
import { Container, Header, HeaderContent, Icon } from 'semantic-ui-react'
import Features from './reusable/Features'

const Featureslist = () => {
	return (
		<>
			<Container className=''>
				<Header className='flex justify-center text-center bg-white'>
					<Header className='w-1/2'>
						<Header
							className='font-extrabold text-4xl'
							as={'h1'}>
							Why Choose Us ?
						</Header>
						<HeaderContent
							as={'p'}
							className='text-gray-500 font-light text-base '>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Minima totam obcaecati eaque autem ea veniam
						</HeaderContent>
					</Header>
				</Header>
			</Container>
			<Header className=' bg-slate-200'>
				<Container className='flex justify-between gap-3 flex-wrap pt-8 pb-8'>
					<Features />
					<Features />
					<Features />
					<Features />
				</Container>
			</Header>
		</>
	)
}

export default Featureslist
