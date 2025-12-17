import React from "react";
import "./HealthCare.css";
import Img1 from "../../assets/Agriculture/3.png";
import GetInTouch from "../GetInTouch";

const HealthCare = () => {
  return (
    <div className="healthcare-section">
      <h2>Health Care Solutions</h2>
      <div className="healthcare-content">
        <div className="healthcare-text">
          <p>
            Our Health Care IT solutions are designed to enhance patient care, streamline hospital operations, and ensure data security and compliance.
          </p>
          <p>
            We help hospitals, clinics, and diagnostic centers improve their services through smart healthcare technologies, including EMR/EHR, telemedicine, and patient management systems.
          </p>
          <ul>
            <li>Electronic Medical Records (EMR)</li>
            <li>Telemedicine and Remote Consultations</li>
            <li>Hospital Information Systems (HIS)</li>
            <li>Patient Appointment & Billing Management</li>
            <li>Lab and Pharmacy Integration</li>
            <li>HIPAA and Data Privacy Compliance</li>
          </ul>
        </div>
        <div className="healthcare-images">
          <img src={Img1} alt="Healthcare 1" />
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

export default HealthCare;
