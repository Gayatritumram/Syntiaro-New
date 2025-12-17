import React from "react";
import Img1 from "../../assets/Agriculture/5.png";
import "./Banking.css";
import GetInTouch from "../GetInTouch";

const Banking = () => {
  return (
    <div className="banking-section">
      <h2>Banking Solutions</h2>
      <div className="banking-content">
        <div className="banking-text">
          <p>
            In the fast-evolving world of banking and finance, digital transformation is key to staying competitive. Our banking software solutions are designed to streamline operations, enhance security, and deliver an outstanding customer experience.
          </p>
          <p>
            We provide smart, secure, and scalable banking systems that help institutions manage transactions, customer relationships, risk, and compliance with ease.
          </p>
          <ul>
            <li>Core Banking Systems Integration</li>
            <li>Secure Mobile and Online Banking Platforms</li>
            <li>Automated Loan Management Systems</li>
            <li>Payment Gateway & UPI Integration</li>
            <li>Real-time Fraud Detection and Security</li>
            <li>Regulatory Compliance & Reporting Tools</li>
          </ul>
        </div>
        <div className="banking-images">
          <img src={Img1} alt="Banking Solution 1" />
        </div>
      </div>

      <div className="get">
        {/* Get in Touch Section */}
      <section>
        <GetInTouch />
      </section>
       </div>
    </div>
  );
};

export default Banking;
