import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class MobileNav extends Component {

    closeMenu = () => {
        this.props.closeMenu();
    }

    render() { 
        return ( 
            <Router>
                <ul>
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
        </Router>
        );
    }
}
 
export default MobileNav;