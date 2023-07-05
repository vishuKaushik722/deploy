import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComp';
import FooterComp from '../components/FooterComponent';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productAction';
import { Container , Jumbotron, Row, Col } from 'reactstrap';

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
  }

  return <div>
  <NavbarComponent />

    <Jumbotron id="jumbotron">
    <Container>

    <div>
      <Link to={'/me'}>back to result</Link>
    </div>

    {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          
          <div className="details">
          <Row className="mt-5">
          <Col lg={4}>
            <div id="details-image">
              <img width="100%" src={product.image} alt="product" ></img>
            </div>
            </Col>
            <Col lg={4}>
            <div>
              <ul className="details-info">
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  Price: <b>₹{product.price}</b>
                </li>
              </ul>
            </div>
            </Col>
            <Col lg={4}>
            <div>
              <ul className="details-action">
                <li>
                  Price: {product.price}
                </li>
                <li>
                  Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                </li>
                <li>
                  Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                    {[...Array(product.countInStock).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 && <button onClick={handleAddToCart} className="btn btn-info" >Add to Cart</button>
                  }
                </li>
              </ul>
            </div>
            </Col>
            </Row>
          </div>
        )
    }
    </Container>
    </Jumbotron>
    <FooterComp />


  </div>
}
export default ProductScreen;