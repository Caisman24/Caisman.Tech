import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
  }

  render() {
    return (
      <div className="content-on-page">
        <Menu ref={this.menuRef}></Menu>
        <div>On subscribe page</div>
        {!(this.menuRef.current && this.menuRef.current.isFooterVisible()) && (
          <Footer></Footer>
        )}
      </div>
    );
  }
}

export default Subscribe;
