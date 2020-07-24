import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    // <footer>
      <div className="footerin">
        <Logo />
        <p>
          &copy; {fullYear}. All Rights Reserved. |{" "}
         Privacy Policy
        </p>
      </div>
    // </footer>
  );
};

export default Footer;
