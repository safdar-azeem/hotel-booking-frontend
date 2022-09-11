import React from 'react'
import { Grid, Header, HeaderContent, Icon, Message } from 'semantic-ui-react'
import { IFeature } from '../../types/feature.type'

interface IFeatureProps {
	feature: IFeature
}

const Feature = ({ feature }: IFeatureProps) => {
	return (
		<Message
			icon
			size='mini'
			className='border-none outline-none shadow-none bg-transparent flex items-start'>
			<Icon name={feature.icon} />
			<Message.Content>
				<Message.Header className='text-2xl'>
					{feature.title}
				</Message.Header>
				<p className='font-normal text-base mt-3'>
					{feature.description}
				</p>
			</Message.Content>
		</Message>
	)
}

export default Feature
