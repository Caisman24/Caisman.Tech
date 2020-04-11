import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    isFooterVisible: true,
  }

  showFooter = () => {
    this.setState({isFooterVisible: true})
  }

  hideFooter = () => {
    this.setState({isFooterVisible: false})
  }
  render() {
    return (
      <div>
        <Menu
          showFooter={this.showFooter}
          hideFooter={this.hideFooter}>
        </Menu>
        {this.state.isFooterVisible && (<Footer></Footer>)}
      </div>
    );
  }
}

export default App;
