import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import NavbarComponent from '../components/NavbarComp';
import FooterComp from '../components/FooterComponent';
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
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
    dispatch(register(name, email, password));

  }
  return(
  <>
  <NavbarComponent />
  <Jumbotron>
  <Container>
  <div className="form">
    <Form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>Account already exists, Please Sign In</div>}
        </li>
        <FormGroup>
          <Label htmlFor="name">
            Name
          </Label>
          <Input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">
            Email
          </Label>
          <Input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </Input>
          <small>We will not share this information with anyone..</small>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="rePassword">Re-Enter Password</Label>
          <Input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </Input>
        </FormGroup>
        <FormGroup>
          <Button type="submit" className="btn btn-info">Register</Button>
        </FormGroup>
        <li>
          Already have an account? 
          <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center" > Sign-in</Link>
        </li>

      </ul>
    </Form>
  </div>
  </Container>
  </Jumbotron>
  <FooterComp />
  </>
  )


}
export default RegisterScreen;