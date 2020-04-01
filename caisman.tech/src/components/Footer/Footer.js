import React, { Component } from 'react';
import '../../static/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          &copy;{new Date().getFullYear()} Caisman Tech - All Right Reserved
        </p>
      </div>
    );
  }
}

export default Footer;
