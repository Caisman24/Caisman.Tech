import React, { Component, Fragment } from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
  }

  render() {
    return (
      <Fragment>
        <Menu></Menu>
        <div>Home page</div>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default Home;
