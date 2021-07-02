import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons">
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/perpetually_quasi_trippy/"
              target="_blank"
              //aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://twitter.com/OroroTheUnicorn"
              target="_blank"
              //aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/in/ororo-the-unicorn/"
              target="_blank"
              //aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
