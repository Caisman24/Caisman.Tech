import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import SocialPanel from './SocialPanel';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
  }

  render() {
    return (
      <div className="content-on-page">
        <Menu ref={this.menuRef}></Menu>
        <SocialPanel></SocialPanel>
        <Footer></Footer>
      </div>
    );
  }
}

export default Contact;
