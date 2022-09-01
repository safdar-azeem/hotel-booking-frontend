import React, { useState } from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { Routes } from '../../types/routes.type'

const Navigation = () => {
	const [activeItem, setActiveItem] = useState({})

	const handleItemClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		data: MenuItemProps
	) => setActiveItem({ activeItem: data.name })

	return (
		<div>
			<Menu secondary className='md:flex block'>
				<Menu.Item
					name='Home'
					as={NavLink}
					to={Routes.Home}
					active={activeItem === 'Home'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Hotels'
					as={NavLink}
					to={Routes.Hotels}
					active={activeItem === 'Hotels'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Rooms'
					as={NavLink}
					to={Routes.Rooms}
					active={activeItem === 'Rooms'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Reservation'
					active={activeItem === 'Reservation'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='About'
					active={activeItem === 'About'}
					onClick={handleItemClick}
				/>
			</Menu>
		</div>
	)
}

export default Navigation
