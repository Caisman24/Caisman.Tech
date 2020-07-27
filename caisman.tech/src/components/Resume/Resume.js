import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <Menu ref={this.menuRef}></Menu>
        <div>On resume page</div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Resume;
