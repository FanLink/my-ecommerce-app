
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'
import { useState } from 'react';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

function App() {
  const [sideToggle, setsideToggle] = useState(false);
  return (
    <Router>
      {/* Navbar */}
      <Navbar handleToggle={() => setsideToggle(!sideToggle)} />
      {/* SideDrawer */}
      <SideDrawer show={sideToggle} />
      {/* Backdrop */}
      <Backdrop show={sideToggle} handleToggle={() => setsideToggle(!sideToggle)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/cart" component={CartScreen}></Route>
          <Route exact path="/login" component={LoginScreen}></Route>
          <Route exact path="/register" component={RegisterScreen}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
