import React from "react";
import "./lms.css";
import lmsImage from "../../assets/lms.jpg"; // Why LMS image
import featureBg from "../../assets/lmscovers.jpg"; // Features section background

export default function LMS() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="reveal">LMS – Learning Management System</h1>
          <p className="hero-quote reveal delay-1">
            “Smart Learning. Scalable Growth. Measurable Outcomes.”
          </p>
          <p className="hero-desc reveal delay-2">
            A powerful cloud-based LMS helping institutions and enterprises deliver
            modern, data-driven digital learning experiences.
          </p>
        </div>
      </section>

      {/* WHY LMS */}
      <section className="why">
        <div className="container why-grid">
          <div className="why-visual reveal">
            <img src={lmsImage} alt="LMS" />
          </div>
          <div className="why-text reveal delay-1">
            <h2>Why Choose Our Smart LMS?</h2>
            <p>
              Designed for scale, security, and simplicity — our LMS enables
              institutions to manage learning effortlessly and grow confidently.
            </p>
            <ul className="checklist">
              <li>Integrated attendance, exams & analytics</li>
              <li>Live classes, recordings & virtual classrooms</li>
              <li>Mobile learning with automated certification</li>
              <li><strong>Trusted by 1000+ institutions</strong></li>
            </ul>
            <div className="highlight">
              Elevate academic & corporate training with a next-gen LMS platform.
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        className="lms-features"
        style={{ backgroundImage: `url(${featureBg})` }}
      >
        <div className="lms-features-overlay"></div>

        <div className="container">
          <h2 className="section-title reveal">Built for Modern Learning</h2>

          <div className="lms-feature-row">
            <div className="lms-feature-card reveal delay-1">
              <h3>Advanced Analytics</h3>
              <p>Real-time insights into learner performance and engagement.</p>
            </div>
            <div className="lms-feature-card reveal delay-2">
              <h3>Virtual Classrooms</h3>
              <p>Seamless live teaching with recordings and content management.</p>
            </div>
            <div className="lms-feature-card reveal delay-3">
              <h3>Mobile Learning</h3>
              <p>Optimized learning experience across all devices.</p>
            </div>
            <div className="lms-feature-card reveal delay-4">
              <h3>Auto Certification</h3>
              <p>Instant certificates upon successful course completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <h2>With SYNTIARO, Innovate Beyond Limits</h2>
        <a className="btn primary">Get In Touch</a>
      </section>

    
    </>
  );
}
