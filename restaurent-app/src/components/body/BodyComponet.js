import React from "react";
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import { Route, Redirect , Switch } from "react-router-dom";




const BodyComponet = () => {
  return (
    <div>
      <Switch>
        <Route path="/home"  exact Component={<Home/>} />
        <Route path="/menu" exact Component={<Menu/>} />
        <Route path="/contact" exact Component={<Contact/>} />
        <Route path="/about" exact Component={<About/>} />
        <Redirect from='/' to='/home'/>
      </Switch>
    </div>
  )
}

export default BodyComponet;