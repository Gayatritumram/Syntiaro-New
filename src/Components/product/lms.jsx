import React from "react";
import lmsImage from "../../assets/LMS1.jpg";
import "./lms.css";
import GetInTouch from "../GetInTouch";

export default function LMS() {
  return (
    <div className="lms-page">
      {/* Hero Section */}
      <div className="lms-hero-section">
        <div className="lms-overlay">
          <h1>LMS - Learning Management System</h1>
          <p>
            A powerful cloud-based platform designed for institutions, training centers,
            and corporations to manage and enhance education delivery.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="lms-content-section">
        <div className="lms-image-container">
          <img src={lmsImage} alt="Learning Management System" />
        </div>

        <div className="lms-text-content">
          <h2>Why Choose Our Smart LMS ?</h2>
          <p>
            Empower your institution with a future-ready Learning Management System designed to simplify education delivery and boost learner outcomes.
          </p>

          <ul>
            <li>📚 Integrated attendance, assessments & detailed analytics</li>
            <li>🎥 Live classes, virtual classrooms, and recorded sessions</li>
            <li>📱 Mobile learning support with auto-certification</li>
            <li>🏫 Trusted by <strong>1000+ schools, colleges & training centers</strong></li>
          </ul>

          <p className="lms-highlight">
            Elevate your academic or corporate training with our next-gen LMS platform.
          </p>
        </div>
      </div>

      {/* Get in Touch Section */}
      <section>
        <GetInTouch />
      </section>
    </div>
  );
}
