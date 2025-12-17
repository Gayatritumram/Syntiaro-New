import React, { useEffect } from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgMail, CgPhone } from "react-icons/cg";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section" >
          <h2 className="blue-text">SYNTIARO</h2>
          <p>
            We are a dynamic and innovative IT services company ready to transform
            the technology landscape. We were founded to provide businesses with IT solutions.
          </p>
          <p>CIN U72900PN2022PTC207371</p>

          <h2 className="blue-text">Address</h2>
          <p>
            First Floor No-101, Gurudwara chowk, Shree Ganesh Building, near Akurdi Railway Station Rd,
            Akurdi, Pune-411033
          </p>
        </div>

        <div className="footer-section" >
          <h2 className="blue-text">Service</h2>
          <ul>
            <li><Link to="/agriculture" className="footer-link">Agriculture</Link></li>
            <li><Link to="/education" className="footer-link">Education</Link></li>
            <li><Link to="/healthcare" className="footer-link">Health Care</Link></li>
            <li><Link to="/banking"  className="footer-link">Banking</Link></li>
            <li><Link to="/hrms" className="footer-link">HRMS</Link></li>
            <li><Link to="/crm" className="footer-link">CRM</Link></li>
            <li><Link to="/dropshipping" className="footer-link">Drop Shipping</Link></li>
            <li><Link to="/itconsulting" className="footer-link">IT Consulting</Link></li>
            <li><Link to="/desktopsupport" className="footer-link">Desktop Support</Link></li>
            <li><Link to="/cloudservices" className="footer-link">Cloud Services</Link></li>
          </ul>
        </div>

        <div className="footer-section" >
          <h2 className="blue-text">Legal</h2>
          <ul>
            <li><Link to="/mission" className="footer-link">Mission</Link></li>
            <li><Link to="/vision" className="footer-link">Vision</Link></li>
            <li><Link to="/privacypolicy" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/terms&condition" className="footer-link">Terms & Conditions</Link></li>
            <li><Link to="/returnpolicy" className="footer-link">Return Policy</Link></li>
            <li><Link to="/" className="footer-link">Landing Page</Link></li>
            {/* <li><Link to="/" className="footer-link">Admin Panel</Link></li> */}
          </ul>
        </div>
        

        <div className="footer-section" >
          <h2 className="blue-text">Quick Links</h2>
          <ul>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/Aboutus" className="footer-link">About Us</Link></li>
            <li><Link to="/" className="footer-link">Product</Link></li>
            <li><Link to="/Innovation" className="footer-link">Innovation</Link></li>
            <li><Link to="/StaffAugmentation" className="footer-link">Staff Augmentation</Link></li>
            <li><Link to="/service" className="footer-link">Services</Link></li>
            <li><a 
                href="https://sg2plzcpnl508788.prod.sin2.secureserver.net:2096/" 
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"> Webmail </a></li>
          </ul>
        </div>

        <div className="footer-section contact" >
          <h2 className="blue-text">Contact</h2>
          <br />
          <p>
            <a href="tel:+918888214460" className="orange-text" style={{ textDecoration: "none", fontSize: '18px' }}>
              <CgPhone style={{ fontSize: "24px" }} /> +91 911 211 4422 <br />
            </a>
          </p>
          <a href="mailto: info@syntiaro.com" className="orange-text-mail" style={{ textDecoration: "none", fontSize: '18px', cursor: 'pointer' }}>
              <CgMail style={{ fontSize: "24px" }} />  info@syntiaro.com <br />
            </a>
          <br /><br /><br />

          <div className="social-icons">
            <div>
              <h2 className="blue-text">Follow Us</h2>
            </div>
            <div className="logos">
              <a href="https://www.linkedin.com/company/syntiaro/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="orange-text" data-aos="zoom-in-up" />
              </a>
              <a href="https://www.instagram.com/_syntiaro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="orange-text" data-aos="zoom-in-up" data-aos-delay="100" />
              </a>
              <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="orange-text" data-aos="zoom-in-up" data-aos-delay="200" />
              </a>
              <a href="https://www.youtube.com/@Syntiaro" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="orange-text" data-aos="zoom-in-up" data-aos-delay="300" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p style={{ letterSpacing: "2px", color: "white" }}>
          All Rights Reserved By { ' ' }
          <a href="https://www.syntiaro.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
            ©SYNTIARO
          </a>{" "}
           
        </p>
      </div>
    </footer>
  );
};

export default Footer;
