import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../static/menu.css';
import Home from '../Home/Home';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Subscribe from '../Subscribe/Subscribe';
import Contact from '../Contact/Contact';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };

    this.updatePredicate = () => {
      this.setState({ isMobile: window.innerWidth < 768 });
    };
  }

  openMenu = () => {};

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  render() {
    const isMobile = this.state.isMobile;
    return (
      <div className="header-menu">
        <Router>
          <div className="container">
            <div className="tie-alightleft">
              <nav>
                <div className="menu-center">
                  {isMobile ? (
                    <ul className="mobile-header">
                      <Link to="/">
                        <img
                          onClick={this.openMenu}
                          className="first-img"
                          src={require('../../static/icon.svg')}
                          alt=""
                        ></img>
                      </Link>

                      <img
                        className="rightImage"
                        src={require('../../static/bars.svg')}
                        alt=""
                      ></img>
                    </ul>
                  ) : (
                    <ul className="menu-list">
                      <li>
                        <Link to="/">
                          <img
                            className="desktopImage"
                            src={require('../../static/icon.svg')}
                            alt=""
                          ></img>
                        </Link>
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
                  )}
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
          </div>
        </Router>
      </div>
    );
  }
}

export default Menu;
