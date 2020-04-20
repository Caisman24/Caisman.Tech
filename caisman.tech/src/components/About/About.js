import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class About extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
  }

  render() {
    return (
      <div className="content-on-page">
        <Menu ref={this.menuRef}></Menu>
        <div>On about page</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default About;
