import React, { useState } from 'react'
import { Button, Header, Icon, Image, Input } from 'semantic-ui-react'
import '../assets/sass/main.scss'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
const HeroHome = () => {
	const src = 'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  
  return (
    <>
    <section className='hero-section'>
  <section className='first-section'>
   <Header as={'h1'}>Find your perfect
   <br/>
place to stay</Header>
<div className=' mb-8'>
<span className='desc-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic aspernatur, sint quos id quaerat.</span>
</div>


<Button secondary className='mt-48'><Icon name='play circle'/> Watch Video</Button>

  </section>
  <section className='second-section'>
    <Image size='massive' className='rounded-lg' src={src}/>
  </section>
    </section>
    <section className='search'>
      <div>
      <Input icon='map marker alternate' className='mr-3' iconPosition='left' placeholder='Where are you going' />
      </div>
      <div  onClick={()=>{setOpenDate(!openDate)}}  className='input-span' >
      <span><Icon name='calendar alternate'/> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `} </span>
     {openDate &&
      <DateRange
      className='date'
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
/>}
      </div>
      <div>
      <Input icon='users' className='mr-3' iconPosition='left' placeholder='Adults' />
      </div>
      <div>
      <Input icon='bed' className='mr-3' iconPosition='left' placeholder='Rooms' />
      </div>
      <div>
      <Button className='ml-3' secondary>Search</Button>
      </div>


  </section>
    </>
  )
}


export default HeroHome