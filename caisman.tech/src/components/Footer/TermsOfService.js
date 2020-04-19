import React, { Component } from 'react';
import Modal from 'react-modal';
import '../../static/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
  },
};

class TermsOfService extends Component {
  closeModal = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <Modal
        isOpen={true}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Terms of Service"
      >
        <div className="page-modal">
          <div className="header-modal">
            <i className="icon-exit" onClick={this.closeModal}>
              <FontAwesomeIcon icon={faTimesCircle} size="lg" color="white" />
            </i>
            <h1>Terms and conditions</h1>
          </div>

          <div className="text-container">
            <p>
              1. Introduction Welcome to Caisman (“Company”, “we”, “our”, “us”)!
              These Terms of Service (“Terms”, “Terms of Service”) govern your
              use of our website located at caisman.tech (together or
              individually “Service”) operated by Caisman. Our Privacy Policy
              also governs your use of our Service and explains how we collect,
              safeguard and disclose information that results from your use of
              our web pages. Your agreement with us includes these Terms and our
              Privacy Policy (“Agreements”). You acknowledge that you have read
              and understood Agreements, and agree to be bound of them. If you
              do not agree with (or cannot comply with) Agreements, then you may
              not use the Service, but please let us know by emailing at
              support@mywebsite.com so we can try to find a solution. These
              Terms apply to all visitors, users and others who wish to access
              or use Service.
            </p>
            <p>
              2. Communications By using our Service, you agree to subscribe to
              newsletters, marketing or promotional materials and other
              information we may send. However, you may opt out of receiving
              any, or all, of these communications from us by following the
              unsubscribe link or by emailing at support@mywebsite.com.
            </p>
            <p>
              3. Contests, Sweepstakes and Promotions Any contests, sweepstakes
              or other promotions (collectively, “Promotions”) made available
              through Service may be governed by rules that are separate from
              these Terms of Service. If you participate in any Promotions,
              please review the applicable rules as well as our Privacy Policy.
              If the rules for a Promotion conflict with these Terms of Service,
              Promotion rules will apply.
            </p>
          </div>

          <div className="accept-button">
            <button onClick={this.closeModal}>I Agree the Terms</button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TermsOfService;
