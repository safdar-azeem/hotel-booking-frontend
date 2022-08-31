import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'


const Navigation = () => {
  const [activeItem, setActiveItem]= useState({})
  const handleItemClick = (_e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }: any) => setActiveItem({ activeItem: name })
  return (
    <div>
       <Menu secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>

    </div>
  )
}

export default Navigation