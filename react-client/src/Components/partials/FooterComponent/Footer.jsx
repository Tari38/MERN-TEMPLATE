import React from "react";
import "./Footer.css";

const CURRENTYEAR = new Date().getFullYear();

function Footer() {
  return (
    <>
    <footer id="footer">
      <p>Copyright © {CURRENTYEAR} by (your_name)</p>
    </footer>
    </>
  )
};

export default Footer;
