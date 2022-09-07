import React from 'react'
import { Icons } from 'react-toastify'
import {
	Card,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
} from 'semantic-ui-react'
import SingleHotelFeature from '../../components/reusable/Single-Hotel-Feature'

const SingleHotel = () => {
	const src =
		'https://images.unsplash.com/photo-1611892441796-ae6af0ec2cc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
	return (
		<Header className='relative object-cover'>
			<Image
				src={src}
				className='w-full h-screen '
			/>

			<Header className='absolute top-9 right-9 bg-white p-1 text-large rounded-lg  bg-opacity-25 '>
				<Icon
					name='heart outline'
					className='outline-none mt-2 m-auto'
				/>
			</Header>
			<Header className='absolute top-[30%] left-6 text-white'>
				Sarena Hotel
			</Header>

			<Header className='flex items-center text-base absolute top-[35%] left-6 text-white'>
				<span className='font-bold text-2xl mr-3'>4.5</span>
				<Icon
					name='star outline'
					className=' outline-none'
					color='yellow'
				/>
			</Header>
			<Header className='text-white absolute top-[35%] text-base right-9 font-normal'>
				<span>24+</span>
			</Header>
			{/* Card section  */}
			<Header className='bg-white absolute bottom-0 w-full sm:rounded-t-3xl'>
				<Header className='text-base flex justify-between items-center text-center m-5'>
					<Header
						as={'h4'}
						className='mb-0'>
						Per Night
					</Header>
					<Header
						as={'h4'}
						className='mt-0'>
						<span className='text-base'>$140</span>
						<span>$120$</span>
					</Header>
				</Header>
				<Divider />
				<Header className='text-base flex justify-between items-center text-center ml-5'>
					<Header
						as={'h4'}
						className='mb-0'>
						4.5/5- Good
					</Header>
					<a className='text-base'>
						1298 reviews <Icon name='angle right' />{' '}
					</a>
				</Header>
				<Divider />

				<Header className='flex justify-between flex-wrap items-center m-4'>
					<SingleHotelFeature />
					<SingleHotelFeature />
					<SingleHotelFeature />
					<SingleHotelFeature />
					<SingleHotelFeature />
					<SingleHotelFeature />
				</Header>
				<Divider />
				<Header
					as={'span'}
					className='text-base text-gray-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
					enim ea possimus labore aliquam blanditiis! Eum expedita
					itaque voluptatibus repudiandae consectetur illum fuga nam
					libero! Aut cumque repellat modi fuga.
				</Header>
			</Header>
		</Header>
	)
}

export default SingleHotel
