import { Container, HeaderContent } from 'semantic-ui-react'
import Header from '../../components/reusable/Header'
import HotelGellary from '../../components/reusable/HotelGallary'

const Hotels = () => {
	return (
		<HeaderContent className='  bg-gray-100'>
			<Header />
			<Container>
				<HotelGellary />
			</Container>
		</HeaderContent>
	)
}

export default Hotels
