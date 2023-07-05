import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import CsitScreen from './Screens/CsitScreen';
import MeScreen from './Screens/MeScreen';
import SigninScreen from './Screens/SigninScreen';
import ProductScreen from './Screens/productScreen';
import CartScreen from './Screens/CartScreen';
import RegisterScreen from './Screens/RegisterScreen';
import DetailsScreen from './Screens/DetailsScreen';
import ProductsScreen from './Screens/ProductsScreen';
import './App.css';

function App() {
  return (
  	<BrowserRouter>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/cs-it" component={CsitScreen} />
      <Route path="/me" component={MeScreen} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/signin" component={SigninScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/details" component={DetailsScreen} />
      <Route path="/products" component={ProductsScreen} />
    </BrowserRouter>
  );
}

export default App;