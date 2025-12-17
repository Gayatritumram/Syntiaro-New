import React from "react";
import Img1 from "../../assets/Agriculture/19.png";
import "./DesktopSupport.css";
import GetInTouch from "../GetInTouch";

const DesktopSupport = () => {
  return (
    <div className="desktop-support-section">
      <h2 className="desktop-support-heading">Desktop Support Services</h2>
      <div className="desktop-support-content">
        <div className="desktop-support-text">
          <p>
            Our Desktop Support services ensure that your end-users receive the technical assistance they need to stay productive. From troubleshooting software and hardware to setting up workstations, we’ve got you covered.
          </p>
          <ul>
            <li><strong>Hardware Troubleshooting:</strong> Diagnose and resolve desktop, laptop, and peripheral issues</li>
            <li><strong>Software Support:</strong> Install, update, and troubleshoot operating systems and applications</li>
            <li><strong>Remote Assistance:</strong> Quick problem resolution through remote desktop support</li>
            <li><strong>Network Connectivity:</strong> Fix LAN/Wi-Fi issues and maintain network reliability</li>
            <li><strong>User Account Setup:</strong> Configure new users, permissions, and profiles</li>
            <li><strong>Antivirus and Security:</strong> Install protection software and ensure system safety</li>
          </ul>
          <p>
            Our goal is to reduce downtime, enhance user experience, and provide responsive support whenever you need it.
          </p>
        </div>
        <div className="desktop-support-images">
          <img src={Img1} alt="Desktop Support 1" />
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

export default DesktopSupport;
