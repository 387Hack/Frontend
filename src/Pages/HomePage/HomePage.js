import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//import App from ''
export default function HomePage() {
	return (
		<div>
			<h1>Welcome to HomePage</h1>
			<img
				className="center"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRT81yYbSSdvk-8orr_JHfVz-Acw55ym50A&usqp=CAU"
				alt="Home"
			/>
			<h1 className="center">Get started with the games</h1>

			<br />
			<Container class="container">
				<Row>
					<Col>
						<Card border="primary" style={{ width: '20em' }}>
							<Card.Header style={{alignText:"center"}}>Game 1</Card.Header>
							<Card.Body style={{fontFamily:"monospace"}}>
               
								<Card.Title style={{fontFamily:"monospace", color:"red"}}>The Age Quiz</Card.Title>
								<Card.Text>
									Answer some of the interesting questions from your generation and earn points!!!!!!
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card border="secondary" style={{ width: '20em' }}>
							<Card.Header>Game 2</Card.Header>
							<Card.Body style={{fontFamily:"monospace"}}>
								<Card.Title  style={{fontFamily:"monospace", color:"red"}}>The Bell Game</Card.Title>
								<Card.Text>
									Listen to the bell count and guess it correctly to move to the next round!!!!!
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card border="primary" style={{ width: '20em' }}>
							<Card.Header>Game 3</Card.Header>
							<Card.Body style={{fontFamily:"monospace"}}>
								<Card.Title  style={{fontFamily:"monospace", color:"red"}}>The Sight Game</Card.Title>
								<Card.Text>
									Some quick guesses here will make you score points and also test your vision.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
