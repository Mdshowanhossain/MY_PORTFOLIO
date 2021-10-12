import React from 'react';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (

    <Router>
      <Switch>


        <div>
          <Home />
        </div>
      </Switch>
    </Router>
  );
};

export default App;