import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
  }

  render() {
    return (
      <div className="content-on-page">
        <Menu ref={this.menuRef}></Menu>
        <div>Contact page</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Contact;
