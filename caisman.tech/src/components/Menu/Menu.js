import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../static/menu.css';
import MobileNav from './MobileNav';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isMobileMenuVisible: false,
    };
  }

  updatePredicate = () => {
    this.setState({ isMobile: window.innerWidth < 768 });
  };

  openMenu = () => {
    this.setState({ isMobileMenuVisible: true });
  };

  closeMenu = () => {
    this.setState({ isMobileMenuVisible: false });
  };

  isFooterVisible = () => {
    return !this.state.isMobileMenuVisible;
  };

  render() {
    const isMobile = this.state.isMobile;
    window.addEventListener('resize', this.updatePredicate);
    if (this.state.isMobileMenuVisible) {
      return (
        <MobileNav
          closeMenu={this.closeMenu}
          isMobile={this.state.isMobile}
        ></MobileNav>
      );
    }

    return (
      <div className="header-menu">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
