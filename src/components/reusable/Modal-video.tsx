import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ReactPlayer from 'react-player'

interface IModalVideoProps {
	setOpenVideoModal: React.Dispatch<React.SetStateAction<boolean>>
	videoUrl: string
}

const ModalVideo = ({ setOpenVideoModal, videoUrl }: IModalVideoProps) => {
	return (
		<>
			<Modal.Header>
				Watch Video
				<Button
					color='grey'
					icon='close'
					floated='right'
					onClick={() => setOpenVideoModal(false)}></Button>
			</Modal.Header>
			<Modal.Content image>
				<Modal.Description>
					<ReactPlayer
						controls
						muted
						className=' w-full mx-auto'
						url={videoUrl}
					/>
				</Modal.Description>
			</Modal.Content>
		</>
	)
}

export default ModalVideo
