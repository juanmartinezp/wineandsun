import React from "react";
import Maps from "../Maps/Maps";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer-info">
        <h1>Melina Maccio</h1>
        <p>Based in Buenos Aires</p>
      </div> */}
      <div className="footer-contact">
        {/* <h3>Contact me</h3>
        <p>And let's get down to work</p> */}
      </div>
      <div className="footer-sns">
        <div className="design-by">¡Síguenos en Nuestras Redes!</div>
        <div className="sns-links">
          <a
            href="https://www.instagram.com/wineandsun_mza/?igshid=ZDdkNTZiNTM%3D"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100090310946706&mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook facebook"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5492612077921&text=Hola%20Wine and Sun!"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp whatsapp"></i>
          </a>
        </div>
      </div>
      <div>
        <Maps/>
      </div>
    </footer>
  );
}

export default Footer;
