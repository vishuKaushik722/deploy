import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import { saveProduct, listProductsMe, deleteProdcut } from '../actions/productAction';
import NavbarComponent from '../components/NavbarComp';
import FooterComp from '../components/FooterComponent';
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function ProductsScreen(props) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const productList = useSelector(state => state.productList);
  const { loading, products, error } = productList;

  const productSave = useSelector(state => state.productSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = productSave;

  const productDelete = useSelector(state => state.productDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductsMe());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({
      _id: id,
      name, price, image, category,
      countInStock
    }));
  }
  const openModal = (product) => {
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setCategory(product.category);
    setCountInStock(product.countInStock);
  };
  const deleteHandler = (product) => {
    dispatch(deleteProdcut(product._id));
  }
  return loading ? <div>Loading......</div> :
    error ? <div>{error}</div> :
  (
    <>
    <NavbarComponent />
    <Jumbotron>
    <Container>
  <div className="content content-margined">

    <div className="product-header">
    </div>
    {
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2 id="margin-stuff">Create Product</h2>
            </li>
            <li>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>You need to be admin to do this</div>}
            </li>

            <li>
              <Label htmlFor="name">
                Name
          </Label>
              <Input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
              </Input>
            </li>

            <li>
              <Label htmlFor="image">
                Image
          </Label>
              <Input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}>
              </Input>
            </li>

            <li>
              <Label htmlFor="price">
                Price
          </Label>
              <Input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
              </Input>
            </li>

            <li>
              <Label htmlFor="name">
                Category
          </Label>
              <Input type="text" name="category" value={category} id="category" onChange={(e) => setCategory(e.target.value)}>
              </Input>
            </li>

            <li>
              <Label htmlFor="countInStock">
                CountInStock
          </Label>
              <Input type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}>
              </Input>
            </li>

            <li>
              <Button style={{marginTop: "1rem"}} type="submit" className="btn btn-info">{id ? "Update" : "Create"}</Button>
            </li>
          </ul>
        </form>
      </div>
    }
  </div>

  <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                   <button className="btn btn-sm btn-warning" onClick={() => openModal(product)}>
                      Edit
                  </button>{' '}
                  <Button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


  </Container>
  </Jumbotron>
  <FooterComp />
  </>
  )
}
export default ProductsScreen;