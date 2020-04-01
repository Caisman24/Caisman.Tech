import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <p>
          &copy;{new Date().getFullYear()} Caisman Tech - All Right Reserved
        </p>
      </div>
    );
  }
}

export default Footer;
