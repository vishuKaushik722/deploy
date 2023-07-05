import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const MiddleComp = () => {
	return (
		<div>
			<Jumbotron id="middle">
				<Container>
				<div className="text-center">
					<Row className="center-text">
						<Col xs={12} md={6}>
						<div className="justify-content-center">
							<h2>CS/IT CANTEEN</h2>
							<p>This Is For Test Purpose Only. Here you can buy online sitting in your classroom so have some fun and don't forget to visit here again.... Thank You!!!</p>
							<Link className="btn btn-info" to={'/cs-it'}>CS/IT Canteen</Link>
						</div>						
						</Col>
						<Col xs lg="6" className="image-zoom">
							<Link to={'/cs-it'}><img src="./images/Burger.jpg" alt="Photu" width="100%" /></Link>
						</Col>
					</Row>
					<Row style={{marginTop: "4rem"}} className="center-text">
						<Col xs={12} md={6} className="image-zoom">
							<Link to={'me'}><img src="./images/chaiBun.jpg" alt="Photu" width="100%" height="350px" /></Link>
						</Col>
						<Col xs lg="6">
						<div>
							<h2>ME CANTEEN</h2>
							<p>This Is For Test Purpose Only. Here you can buy online sitting in your classroom so have some fun and don't forget to visit here again.... Thank You!!!</p>
							<Link className="btn btn-info" to={'/me'}>ME Canteen</Link>
						</div>						
						</Col>
					</Row>
					</div>
				</Container>
			</Jumbotron>
		</div>
	)
}

export default MiddleComp;