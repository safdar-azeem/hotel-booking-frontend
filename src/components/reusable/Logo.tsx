import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Logo = () => (
	<Button
		basic
		as={Link}
		to='/'
		size='large'
		icon='bed'
		content='Book-Me'
		className='shadow-none'
	/>
)

export default Logo
