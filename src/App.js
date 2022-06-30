import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    
} from 'react-router-dom';
import Admin from './Admin';
import Zoo from './Zoo';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/Admin">Admin Page</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Zoo />
        </Route>
        <Route exact path="/Admin">
          <Admin />
        </Route>
      </Switch>
    </Router>

  );
}
