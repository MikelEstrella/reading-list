import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p className="copyright">
        &copy; Michael Lafua
        <span id="date"> {new Date().getFullYear()}</span> all rights reserved
      </p>
    </div>
  );
};

export default Footer;
