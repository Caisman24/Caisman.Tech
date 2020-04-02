import React, { Component } from 'react';
import '../../static/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center">
                <h1>
                  &copy; {new Date().getFullYear()} Caisman Tech - All Right
                  Reserved
                </h1>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/caisman_24">
                        <i>
                          <FontAwesomeIcon icon={faInstagram} />
                        </i>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.facebook.com/caius.suciu">
                        <i>
                          <FontAwesomeIcon icon={faFacebookF} />
                        </i>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/caius-alexandru-suciu">
                        <i>
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </i>
                      </a>
                    </li>

                    <li>
                      <a href="https://github.com/Caisman24">
                        <i>
                          <FontAwesomeIcon icon={faGithub} />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
