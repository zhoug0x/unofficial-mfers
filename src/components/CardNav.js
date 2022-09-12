import React, { useState } from 'react'
import { Container, Card, Nav } from 'react-bootstrap'
import ImgQueue from './ImgQueue'
import MferHeads from './MferHeads'

const CardNav = ({ handleDeleteImg, handleSetImage, images, flipImage }) => {
	const [mferHeads, setMferHeads] = useState([])
	const [currentTab, setCurrentTab] = useState(0)

	const handleTabChange = tabIdx => {
		setCurrentTab(tabIdx)
	}

	const renderTabContent = tabIdx => {
		const tabs = [
			<ImgQueue
				images={images}
				handleDeleteImg={handleDeleteImg}
				flipImage={flipImage}
			></ImgQueue>,
			<MferHeads handleSetImage={handleSetImage} images={images}></MferHeads>,
		]

		return tabs[tabIdx]
	}

	return (
		<Container>
			<Card>
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey="#first">
						<Nav.Item onClick={() => handleTabChange(0)}>
							<Nav.Link href="#first">Images</Nav.Link>
						</Nav.Item>
						<Nav.Item onClick={() => handleTabChange(1)}>
							<Nav.Link href="#link">Mfer Heads</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Header>
				{renderTabContent(currentTab)}
			</Card>
		</Container>
	)
}

export default CardNav
