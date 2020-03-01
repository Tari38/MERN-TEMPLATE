import React from "react";

const CURRENTYEAR = new Date().getFullYear();

function Footer() {
  return (
    <>
    <footer className="footer">
      <p>Copyright © {CURRENTYEAR} by (your_name)</p>
    </footer>
    </>
  )
};

export default Footer;
