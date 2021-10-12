import React from 'react';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Home/Nav/Nav';
import About from './Components/ABOUT/About/About';
import Contact from './Components/CONTACT/Contact/Contact';
import Projects from './Components/PROJECTS/Projects/Projects';
const App = () => {
  return (

    <Router>
      <Switch>

        <Route path="/about">
          <About />
        </Route>


        <Route path="/projects">
          <Projects />
        </Route>


        <Route path="/contact">
          <Contact />
        </Route>

        <Route path='/'>
          <Home />
        </Route>


      </Switch>
    </Router>
  );
};

export default App;