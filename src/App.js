import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
//imports
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/about-us" exact  component={AboutUs}/>
        <Route path="/services" exact  component={Services}/>
        <Route path="/login" exact  component={Login}/>
        <Route path="/sign-up" exact  component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
