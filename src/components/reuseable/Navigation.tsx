import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'


const Navigation = () => {
  const [activeItem, setActiveItem]= useState({})
  const handleItemClick = (_e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }: any) => setActiveItem({ activeItem: name })
  return (
    <div>
       <Menu secondary>
          <Menu.Item
            name='Home'
            className='border-r-4 border-indigo-500'
            active={activeItem === 'Home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Hotels'
            active={activeItem === 'Hotels'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Rooms'
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