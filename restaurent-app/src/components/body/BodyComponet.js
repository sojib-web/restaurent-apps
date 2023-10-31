//bo
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
        <Route path="/home"  exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Redirect from='/' to='/home'/>
      </Switch>
    </div>
  )
}

export default BodyComponet;