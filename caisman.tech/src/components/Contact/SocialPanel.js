import React, { Component } from 'react';
import '../../static/socialPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

class SocialPanel extends Component {
  render() {
    return (
      <div className="social-panel">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-8 py-5">
              <div className="images-social-media">
                <a
                  href="https://www.facebook.com/caius.suciu"
                  className="facebook"
                >
                  <i>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </i>
                </a>

                <a
                  href="https://www.instagram.com/caisman_24"
                  className="instagram"
                >
                  <i>
                    <FontAwesomeIcon icon={faInstagram} />
                  </i>
                </a>

                <a
                  href="https://www.linkedin.com/in/caius-alexandru-suciu"
                  className="linkedin"
                >
                  <i>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialPanel;
