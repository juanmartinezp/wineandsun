import React from "react";
//import Maps from "../Maps/Maps";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Melina Maccio</h1>
        <p>Based in Buenos Aires</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Melina Maccio</div>
        <div className="sns-links">
          <a
            href="https://github.com/MelMaccio"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/melina-maccio/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
        </div>
      </div>
      {/* <div>
        <Maps/>
      </div> */}
    </footer>
  );
}

export default Footer;


////////////////////////////////////////////// CSS ///////////////////////////////////////

// .footer {
//     width: 100%;
//     height: 100vh;
//     background-color: black;
//     color: white;
//     padding-top: 180px;
//     position: fixed;
//     z-index: -2;
//     bottom: 0;
//     left: 0;
//   }
  
//   .footer-info {
//     font-size: 35px;
//     padding: 30px 0 30px 50px;
//     width: 70%;
//     margin: 0 auto;
//   }
  
//   .footer-info > h1 {
//     padding-bottom: 15px;
//   }
  
//   .footer-contact {
//     font-size: 22px;
//     padding: 100px 0 30px 50px;
//     width: 70%;
//     margin: 0 auto;
//   }
  
//   .footer-sns {
//     width: 70%;
//     position: absolute;
//     bottom: 40px;
//     left: 0;
//     right: 0;
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: 2fr 1fr;
//     align-items: center;
//   }
  
//   .sns-links {
//     display: grid;
//     width: 100%;
//     grid-template-columns: 1fr 1fr;
//     width: 100px;
//   }
  
//   .linkedin,
//   .fa-square-github {
//     font-size: 35px;
//     color: white;
//     margin: 0 auto;
//     padding-bottom: 10px;
//     border-bottom: 4px solid transparent;
//   }
  
//   .linkedin:hover,
//   .fa-square-github:hover {
//     border-color: white;
//     transition: all 0.3s ease-out;
//   }
  
//   .design-by {
//     font-size: 18px;
//     padding-left: 50px;
//     color: white;
//   }
  
//   @media screen and (max-width: 960px) {
//     .footer-info {
//       text-align: center;
//       padding: 0;
//       font-size: 20px;
//     }
  
//     .footer-contact {
//       font-size: 16px;
//       padding: 100px 0 30px 0;
//       text-align: center;
//     }
  
//     .footer-sns {
//       grid-template-columns: 1fr;
//       text-align: center;
//     }
  
//     .design-by {
//       padding: 0 0 40px 0;
//     }
//   }
  