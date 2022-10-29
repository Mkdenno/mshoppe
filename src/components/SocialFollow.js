import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <>
      <div class="social-container">
        <div className="container">
          <div className="footerthings">
            <div>
              <h5>Quick Links</h5>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Orders</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h5>Extra Links</h5>
              <ul>
                <li>Fevorites</li>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li>one</li>
              </ul>
            </div>
            <div>
              <h5>Devices Available</h5>
              <ul>
                <li>Samsung</li>
                <li>Huawei</li>
                <li>Tecno</li>
                <li>Oppo</li>
                <li>Iphone</li>
              </ul>
            </div>
            <div>
              <h5>Primary Contact</h5>
              <ul>
                <li>Email: mshpper22@gmail.com</li>

                <li>Phone: +254798210671</li>
              </ul>
            </div>
          </div>
        </div>
        <div >
          <h3>Social Follow</h3>
          <a href="https://www.youtube.com/" className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.facebook.com/" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com/" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        </div>
    </>
  );
}
