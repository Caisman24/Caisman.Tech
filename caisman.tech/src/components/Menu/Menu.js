import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../static/menu.css';
import Home from '../Home/Home';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Subscribe from '../Subscribe/Subscribe';
import Contact from '../Contact/Contact';

class Menu extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="menu-center">
              <ul className="menu-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
                <li>
                  <Link to="/subscribe">Subscribe</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/resume" component={Resume}></Route>
            <Route path="/subscribe" component={Subscribe}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Menu;
