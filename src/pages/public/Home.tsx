import ListFeature from '../../components/ListFeature'
import HeroSection from '../../components/Hero-section'
import Header from '../../components/reusable/Header'

const Home = () => {
	return (
		<>
			<Header />
			<HeroSection />
			<div className='mt-40'>
				<ListFeature />
			</div>
		</>
	)
}

export default Home
