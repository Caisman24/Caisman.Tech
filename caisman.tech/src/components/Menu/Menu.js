import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../static/menu.css';
import Home from '../Home/Home';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Subscribe from '../Subscribe/Subscribe';
import Contact from '../Contact/Contact';
import MobileNav from './MobileNav';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isMobileMenuVisible: false,
    };

    this.updatePredicate = () => {
      this.setState({ isMobile: window.innerWidth < 768 });
    };
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  openMenu = () => {
    this.setState({isMobileMenuVisible: true})
    this.props.hideFooter();
  };

  closeMenu = () => {
    this.setState({isMobileMenuVisible: false})
    this.props.showFooter();
  }

  render() {
    const isMobile = this.state.isMobile;
    if(this.state.isMobileMenuVisible)
    {
      return (
        <MobileNav closeMenu={this.closeMenu}></MobileNav>
      )
    }
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
                          className="first-img"
                          src={require('../../static/icon.svg')}
                          alt=""
                        ></img>
                      </Link>

                      <img
                        onClick={this.openMenu}
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
