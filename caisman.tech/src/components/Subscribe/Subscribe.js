import React, { Component, Fragment } from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
  }

  render() {
    return (
      <Fragment>
        <Menu ref={this.menuRef}></Menu>
        <div>On subscribe page</div>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default Subscribe;
