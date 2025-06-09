import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto border-top shadow-sm">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {/* Left: Logo or Title */}
        <div className="mb-2 mb-md-0 d-flex align-items-center">
          <span role="img" aria-label="logo" className="me-2 fs-4">🧠</span>
          <h5 className="mb-0">Tile Match</h5>
        </div>

        {/* Center: Copyright */}
        <div className="mb-2 mb-md-0 text-center flex-grow-1">
          <small className="text-muted d-block">
            &copy; {new Date().getFullYear()} Tile Match. All rights reserved.
          </small>
        </div>

        {/* Right: Social Icons */}
        <div className="mb-2 mb-md-0 text-end">
          <a
            href="https://twitter.com"
            className="text-light me-3 fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="text-light me-3 fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            className="text-light fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
