import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComp';
import FooterComp from '../components/FooterComponent';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';


const CartScreen = (props) => {

	const cart = useSelector(state => state.cart);

	const {cartItems} = cart;

	const productId = props.match.params.id;
	const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
	const dispatch = useDispatch();
	const removeFromCartHandler = (productId) => {
		dispatch(removeFromCart(productId));
	}

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
		<div>
      		<Link to={'/me'}>Add more items..?</Link>
    	</div>
		<Row>

		<Col md={8}>
			<div className="cart-list">
				<ul className="cart-list-container">
					<li>
						<h2 style={{marginBottom: "4rem"}}>
							Shopping Cart
						</h2>
					</li>
					{
						cartItems.length === 0 ? 
						<div>
							Cart is empty
						</div>
						:
						cartItems.map( item => 
							<Row style={{marginBottom: "1.5rem"}}>
								<Col md={4}>
								<img width="40%" src={item.image} alt="product" />
								</Col>
								<Col md={8}>
								<div className="cart-name">
									<div>
										{item.name}
									</div>
									<div>
										Qty : 
										 <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
										<button type="button" onClick={() => removeFromCartHandler(item.product)} className="btn btn-sm btn-danger">Delete</button>
									</div>
								</div>
								<div>
									{item.price}
								</div>
								</Col>
							</Row>
						)
					}
				</ul>
			</div>
			</Col>
			<Col style={{padding: "3rem", marginTop: "2rem"}} md={4}>
			<div className="text-center">
		    	<b>
		        	Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
		        	:
		        	₹ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
		        </b>
		     			<button onClick={checkoutHandler} style={{marginTop: "1rem"}} className="btn btn-success" disabled={cartItems.length === 0}>
		        			Proceed to Checkout
		      			</button>
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

export default CartScreen;