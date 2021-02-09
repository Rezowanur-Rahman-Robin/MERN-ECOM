import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <main className='py-3'>
        <Container>
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} /> {/* here ? is use for making it optional.Like...when we direct click the cart from our header we don't have any id */}
        <Route path='/' component={HomeScreen} exact />

         
        </Container>
      </main>
      <Footer/>
      </Router>
   
    </div>
  );
}

export default App;
