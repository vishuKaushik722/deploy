import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComp';
import FooterComp from '../components/FooterComponent';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container, Jumbotron } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { listProductsCsit } from '../actions/productAction';
import classnames from 'classnames';
 



const CsitScreen = (props) => {
	  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

	const productList = useSelector(state => state.productList);
	const { products, loading, error} = productList;
	const dispatch = useDispatch();

	useEffect(() => {

		dispatch(listProductsCsit());
		return () => {
			//
		};

	}, []);


	return loading ? <div>Loading......</div> :
		error ? <div>{error}</div>:
		
	(
		<>
		<NavbarComponent />
			<div>
			<Jumbotron>
				<Container>
		        <h1 style={{margin: "2rem"}} className="text-center">CS/IT Canteen</h1>
		        <p style={{marginBottom: "3rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  			<Nav tabs className="text-center">
      <Row id="product-nav-tabs-row">
      	<Col>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Snacks
          </NavLink>
        </NavItem>
        </Col>
        <Col>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Breakfast
          </NavLink>
        </NavItem>
        </Col>
        <Col>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Lunch
          </NavLink>
        </NavItem>
        </Col>
        </Row>
      </Nav>			
  				<ul>
					{products.map((product) => (
		           		<li key={product._id}>		           			
			                	<div className="product">
			                	
				            <TabContent activeTab={activeTab} className="text-center">
				            { product.category === "snacks" ? 
						        <TabPane tabId="1">
									<Row>
				                		<Col>
					                		<div className="product-name">
								                 <Link to={'/product/' + product._id}>{product.name}</Link>
						               		</div>
				                		</Col>
				                		<Col>
					                		<div className="product-price">₹{product.price}</div>
				                		</Col>

				                		<Col><Link style={{borderRadius: "3rem"}} className="btn btn-sm btn-outline-success" to={'/product/' + product._id}>Checkout</Link></Col>
					                </Row>
					                <hr />
						        </TabPane> : <div></div>
						    }
						    { product.category === "breakfast" ?

						        <TabPane tabId="2">
									<Row>
				                		<Col>
					                		<div className="product-name">
								                 <Link to={'/product/' + product._id}>{product.name}</Link>
						               		</div>
				                		</Col>
				                		<Col>
					                		<div className="product-price">${product.price}</div>
				                		</Col>
				                		<Col><Link style={{borderRadius: "3rem"}} className="btn btn-sm btn-outline-success" to={'/product/' + product._id}>Checkout</Link></Col>				              
					                </Row>
					                <hr />
						        </TabPane> : <div></div>
						    }
						    { product.category === "lunch" ?

						        <TabPane tabId="3">
									<Row>
				                		<Col>
					                		<div className="product-name">
								                 <Link to={'/product/' + product._id}>{product.name}</Link>
						               		</div>
				                		</Col>
				                		<Col>
					                		<div className="product-price">${product.price}</div>
				                		</Col>

				                		<Col><Link tyle={{borderRadius: "3rem"}} className="btn btn-sm btn-outline-success" to={'/product/' + product._id}>Checkout...</Link></Col>				              
					                </Row>
					                <hr />
						        </TabPane> : <div></div>
						    }
						        </TabContent>

			              	</div>	
			            </li>
		          ))}
				</ul>
					</Container>
				</Jumbotron>
			</div>
		<FooterComp />
		</>
	)
}

export default CsitScreen;