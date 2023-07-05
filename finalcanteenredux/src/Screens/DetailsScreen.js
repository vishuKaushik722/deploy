import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComp';
import FooterComp from '../components/FooterComponent';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';


const DetailsScreen = (props) => {

	const cart = useSelector(state => state.cart);

	const {cartItems} = cart;

	const productId = props.match.params.id;
	const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
	const dispatch = useDispatch();

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty))
		}
	}, []);
  const checkoutHandler = () => {
    props.history.push("/signin?redirect=details");
  }
	return (
		<>
		<NavbarComponent />
		<Jumbotron id="jumbo">
		<Container>
		
		<Row>

		<Col md={8}>
			<div className="cart-list">
				<ul className="cart-list-container">
					<li>
						<h2 className="text-center" style={{marginBottom: "4rem"}}>
							You Successfully placed your order
						</h2>
					</li>
					{
					
						cartItems.map( item => 
							<Row style={{marginBottom: "1.5rem"}}>
								<Col md={6}>
								<img width="40%" src={item.image} alt="product" />
								</Col>
								<Col md={6}>
								<div className="cart-name">
									<div>
										{item.name}
									</div>
								</div>
								<div>
									₹{item.price}
								</div>
								</Col>
							</Row>
						)
					}
				</ul>
			</div>
			</Col>
			
    		</Row>
    		<hr />
		</Container>
		</Jumbotron>
		<FooterComp />
		</>
	)
}

export default DetailsScreen;