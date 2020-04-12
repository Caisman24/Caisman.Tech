import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

class MobileNav extends Component {
  closeMenu = () => {
    this.props.closeMenu();
  };

  updatePredicate = () => {
    if (window.innerWidth >= 768) {
      this.closeMenu();
    }
  };

  render() {
    window.addEventListener('resize', this.updatePredicate);
    return (
      <Router>
        <div className="mobile-page">
          <div className="mobile-exit-icon">
            <i className="icon-exit" onClick={this.closeMenu}>
              <Link to="/">
                <FontAwesomeIcon icon={faTimesCircle} size="lg" color="white" />
              </Link>
            </i>
          </div>
          <div className="mobile-container">
            <div className="mobile-menu">
              <ul className="mobile-nav">
                <li onClick={this.closeMenu}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={this.closeMenu}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={this.closeMenu}>
                  <Link to="/resume">Resume</Link>
                </li>
                <li onClick={this.closeMenu}>
                  <Link to="/subscribe">Subscribe</Link>
                </li>
                <li onClick={this.closeMenu}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="mobile-social-icons">
              <ul className="social-icons">
                <a href="https://www.instagram.com/caisman_24">
                  <i>
                    <FontAwesomeIcon icon={faFacebookF} color="white" />
                  </i>
                </a>
                <a href="https://www.facebook.com/caius.suciu">
                  <i>
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </i>
                </a>

                <a href="https://www.linkedin.com/in/caius-alexandru-suciu">
                  <i>
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" />
                  </i>
                </a>

                <a href="https://github.com/Caisman24">
                  <i>
                    <FontAwesomeIcon icon={faGithub} color="white" />
                  </i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default MobileNav;
