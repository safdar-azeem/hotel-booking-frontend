import React from 'react'
import ReactPlayer from 'react-player'
import Header from './Header'

const HotelVideo = () => {
	return (
		<>
			<Header />
			<div className='w-full'>
				<ReactPlayer
					controls
					muted
					className=' w-4/5 h-screen mx-auto'
					url={'https://www.youtube.com/watch?v=1fDn7a4TvwI'}
				/>
			</div>
		</>
	)
}

export default HotelVideo
