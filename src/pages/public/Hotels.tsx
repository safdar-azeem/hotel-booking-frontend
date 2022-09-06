import {
	Container,
	HeaderContent,
	HeaderSubheader,
	Icon,
	Image,
} from 'semantic-ui-react'
import Header from '../../components/reusable/Header'
import Hotel from '../../components/reusable/Hotel'

const Hotels = () => {
	const src =
		'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
	return (
		<HeaderContent className='  bg-gray-100'>
			<Header />
			<Container className='flex gap-5 justify-between flex-wrap'>
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
				<Hotel />
			</Container>
		</HeaderContent>
	)
}

export default Hotels
