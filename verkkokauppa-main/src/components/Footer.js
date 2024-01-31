import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
    </footer>
  );
};
