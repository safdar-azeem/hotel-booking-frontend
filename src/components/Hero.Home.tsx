import React from 'react'
import { Button, Header, Icon, Image } from 'semantic-ui-react'
import '../assets/sass/main.scss'
const HeroHome = () => {
	const src = 'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  return (
    <>
    <section className='hero-section'>
  <section className='first-section'>
   <Header as={'h1'}>Find your perfect
   <br/>
place to stay</Header>
<Header className='desc-text' as='span'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic aspernatur, sint quos id quaerat.</Header>
<Button secondary><Icon name='play circle'/> Watch Video</Button>
  </section>
  <section className='second-section'>
    <Image size='massive' className='rounded-lg' src={src}/>
  </section>
    </section>
    </>
  )
}


export default HeroHome