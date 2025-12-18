import React from "react";
import "./lms.css";
import lmsImage from "../../assets/lms.jpg"; // update path if needed

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

          <div className="hero-cta reveal delay-3">
            {/* Buttons optional */}
            {/* <a className="btn primary">Request Demo</a>
            <a className="btn ghost">View Features</a> */}
          </div>
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
      <section className="features">
        <h2 className="reveal">Built for Modern Learning</h2>

        <div className="feature-grid container">
          <div className="feature-card reveal delay-1">
            <h3>Advanced Analytics</h3>
            <p>Real-time insights into learner performance and engagement.</p>
          </div>

          <div className="feature-card reveal delay-2">
            <h3>Virtual Classrooms</h3>
            <p>Seamless live teaching with recordings and content management.</p>
          </div>

          <div className="feature-card reveal delay-3">
            <h3>Mobile Learning</h3>
            <p>Optimized learning experience across all devices.</p>
          </div>

          <div className="feature-card reveal delay-4">
            <h3>Auto Certification</h3>
            <p>Instant certificates upon successful course completion.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <h2>With SYNTIARO, Innovate Beyond Limits</h2>
        <p>Upgrade your learning ecosystem with a future-ready LMS.</p>
        <a className="btn primary">Get In Touch</a>
      </section>

      {/* FOOTER */}
      <footer className="footer reveal">
        <div className="container footer-grid">
          {/* <div>
            <h3>SYNTIARO</h3>
            <p>Innovative IT solutions empowering education & enterprises.</p>
          </div> */}

          {/* <div>
            <h4>Services</h4>
            <p>Education</p>
            <p>Enterprise</p>
            <p>Agriculture</p>
          </div> */}

          {/* <div>
            <h4>Legal</h4>
            <p>Mission</p>
            <p>Vision</p>
            <p>Privacy</p>
          </div> */}

          {/* <div>
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div> */}
        </div>
      </footer>
    </>
  );
}
