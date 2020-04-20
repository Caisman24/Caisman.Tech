import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Subscribe from './components/Subscribe/Subscribe';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/resume" component={Resume}></Route>
          <Route path="/subscribe" component={Subscribe}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
