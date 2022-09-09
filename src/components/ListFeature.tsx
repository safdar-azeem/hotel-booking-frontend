import React from 'react'
import { Container, Grid, Header, HeaderContent, Icon } from 'semantic-ui-react'
import Feature from './reusable/Feature'
import FeatureJson from '../json/Feautes.json'
import { IFeature } from '../types/feature.type'

const ListFeature = () => {
	return (
		<>
			<Container className=''>
				<Header className='flex justify-center text-center bg-white'>
					<Header className='w-1/2'>
						<Header
							className='font-extrabold text-4xl'
							as={'h1'}>
							Why Choose Us ?
						</Header>
						<HeaderContent
							as={'p'}
							className='text-gray-500 font-light text-base '>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Minima totam obcaecati eaque autem ea veniam
						</HeaderContent>
					</Header>
				</Header>
			</Container>
			<section className=' bg-gray-100 mt-14'>
				<Container>
					<Grid>
						<Grid.Row className='gap-y-12'>
							{FeatureJson.map((feature: IFeature) => (
								<Grid.Column
									mobile={16}
									tablet={8}
									computer={8}>
									<Feature feature={feature} />
								</Grid.Column>
							))}
						</Grid.Row>
					</Grid>
				</Container>
			</section>
		</>
	)
}

export default ListFeature
