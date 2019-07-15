import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import brands from "@fortawesome/fontawesome-free-brands";
// import solid from "@fortawesome/fontawesome-free-solid";
import logo from "../style/Images/Background-Images/Logo.png";
import {
  faFacebookF,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faInstagram), faGithub;

const Footer = () => {
  return (
    <div className="footer">
      <div className="return-to-top">
        <img className="logo" src={logo} />
      </div>
      <div className="social-media">
        <a
          className="facebook"
          href="https://www.facebook.com/pat.devincentis"
          target="blank"
        >
          <FontAwesomeIcon
            className="facebook-icon"
            icon={["fab", "facebook-f"]}
          />
        </a>
        <a href="https://www.instagram.com/jiujitsukiddevo/" target="blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.github.com/pjdevo" target="blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="copyright">Patrick DeVincentis &copy; 2018</div>
    </div>
  );
};

export default Footer;
