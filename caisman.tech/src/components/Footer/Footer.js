import React, { Component } from 'react';
import '../../static/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import TermsOfService from './TermsOfService';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    if (this.state.showModal) {
      return <TermsOfService closeModal={this.closeModal}></TermsOfService>;
    }

    return (
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-8 py-5">
              <div className="footerBlockBottom">
                <div className="footer-title">
                  <h1>
                    The journey of a programmer trying to figure things out
                  </h1>
                </div>
                <div className="footer-block-text">
                  <p>
                    &copy; {new Date().getFullYear()} Caisman Tech - All Right
                    Reserved
                  </p>
                  <p>
                    <button onClick={this.openModal}>Terms of Service</button>
                    <button onClick={this.openModal}>Return Policy</button>
                    <button onClick={this.openModal}>Privacy Policy</button>
                  </p>
                </div>
                <div className="social-icon">
                  <a href="https://www.instagram.com/caisman_24">
                    <i>
                      <FontAwesomeIcon icon={faInstagram} />
                    </i>
                  </a>
                  <a href="https://www.facebook.com/caius.suciu">
                    <i>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </i>
                  </a>

                  <a href="https://www.linkedin.com/in/caius-alexandru-suciu">
                    <i>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </i>
                  </a>

                  <a href="https://github.com/Caisman24">
                    <i>
                      <FontAwesomeIcon icon={faGithub} />
                    </i>
                  </a>

                  <a href="mailto:caiussuciu@gmail.com">
                    <i>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                  </a>
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
