import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import NavbarComponent from '../components/NavbarComp';
import FooterComp from '../components/FooterComponent';

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }
  return(
    <>
    <NavbarComponent />
    <Jumbotron>
    <Container>
   <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <FormGroup>
          <h2>Sign-In</h2>
        </FormGroup>
        <FormGroup>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">
            Email
          </Label>
          <Input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </Input>
        </FormGroup>
        <FormGroup>
          <Button type="submit" className="button primary">Signin</Button>
        </FormGroup>
        <li>
          New to Akgec Canteen Services?
        </li>
        <li>
          <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your Akgec Canteen Services account</Link>
        </li>
      </ul>
    </form>
  </div>
  </Container>
  </Jumbotron>
  <FooterComp />
  </>
  )
}
export default SigninScreen;