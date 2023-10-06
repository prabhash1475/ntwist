import React from "react";
// import { FaSquareTwitter } from "react-icons/ci";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <img
          className="Footer-logo"
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt="logo"
        />
      </div>
      <din className="Footer-menue">
        <div>Home</div>
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
        <div>Sitemap</div>
      </din>
      <div>
        <p>9650 20 Ave NW, Edmonton, AB, T69 1G1,Canada</p>
      </div>
      <div className="Social-logo">
        <div>
          <FaTwitter color="white" />
        </div>
        <div>
          <FaLinkedin color="white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
