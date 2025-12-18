import React, { useState } from "react";
import "./Home.css";
import EnquiryPopup from "../Components/EnquiryPopup";

/* === IMPORT ASSETS === */
import mockup1 from "../assets/caro11.jpg";
import mockup2 from "../assets/business-desktopbg.jpg";
import bannerBG from "../assets/gradient-blue-banner.jpg";
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-wrapper">

      {/* BACKGROUND ANIMATION */}
      <div className="animated-bg"></div>

      {/* HERO CARD */}
      <div className="hero-card">

        <h1 className="hero-title">Transform Your Innovative Ideas Into Reality</h1>

        <p className="hero-text">
          Join our innovation ecosystem where ideas meet opportunity, expertise,
          and funding.
        </p>

        <div className="hero-btn-group">
          <button className="hero-btn primary" onClick={() => setOpen(true)}>
            Submit Your Idea
          </button>

          <button className="hero-btn secondary">
            Learn More
          </button>
        </div>

      </div>
            {/* SERVICES SECTION */}
      <section className="services-section">

        <h2 className="section-title">Our Innovation Services</h2>

        <div className="services-container">

          <div className="service-card">
            <h3>Innovation Consulting</h3>
            <p>Transform ideas into actionable strategies and market-ready solutions.</p>
          </div>

          <div className="service-card">
            <h3>Digital Transformation</h3>
            <p>Leverage technology to modernize workflows and accelerate growth.</p>
          </div>

          <div className="service-card">
            <h3>AI & Data Solutions</h3>
            <p>Build data-driven systems with automation, predictions, and insights.</p>
          </div>

          <div className="service-card">
            <h3>Cloud & DevOps</h3>
            <p>Scale securely with CI/CD, cloud infrastructure, and automation.</p>
          </div>

        </div>
      </section>


      {/* BANNER SECTION 1 */}
<section
        className="banner-dark"
        style={{
          backgroundImage: `linear-gradient(145deg, rgba(1,39,49,0.9), rgba(3,152,158,0.9)), url(${bannerBG})`
        }}
      >
        <div className="banner-content">

          <div className="banner-text">
            <h2>Build With Confidence</h2>
            <p>
              Leverage robust software solutions and future-ready architecture to scale faster and smarter.
            </p>
          </div>

          <div className="banner-image">
            <img src={mockup1} alt="Mockup Preview" />
          </div>

        </div>
      </section>

            {/* PRODUCTS SECTION */}
      <section className="product-section">

        <h2 className="section-title">High-Impact Product Design</h2>

        <p className="section-subtitle">
          We build digital products that solve real-world challenges and drive measurable results.
        </p>

        <div className="product-container">

          <div className="product-card">
            <h3>LMS</h3>
            <p>Learning Management System for modern education delivery and tracking.</p>
            <button className="product-btn">Explore More</button>
          </div>

          <div className="product-card">
            <h3>POS</h3>
            <p>Point of Sale system designed for seamless billing and business operations.</p>
            <button className="product-btn">Explore More</button>
          </div>

        </div>
      </section>

      {/* BANNER LIGHT */}
      <section className="banner-light">
        <div className="banner-light-content">

          <h2>Unlock Growth & Operational Excellence</h2>

          <p>
            Empower your teams with easy-to-use tools, seamless integrations,
            and scalable solutions built for real-world challenges.
          </p>

          <img src={mockup2} alt="Platform Demo" />

        </div>
      </section>

          {/* INDUSTRIES SECTION */}
      <section className="industries-section">

        <h2 className="section-title">Industries We Serve</h2>

        <p className="section-subtitle">
          Delivering customized IT solutions across diverse sectors to drive growth and innovation.
        </p>

        <div className="industries-container">

          <div className="industry-card">
            <h3>Agriculture</h3>
            <p>Digital solutions for farming, supply chain, and agri-management.</p>
          </div>

          <div className="industry-card">
            <h3>Education</h3>
            <p>Modern learning platforms and academic automation.</p>
          </div>

          <div className="industry-card">
            <h3>Healthcare</h3>
            <p>Smart patient systems, telemedicine, and digital health.</p>
          </div>

          <div className="industry-card">
            <h3>Banking & Finance</h3>
            <p>Secure platforms for financial automation and digital payments.</p>
          </div>

          <div className="industry-card">
            <h3>HRM & CRM</h3>
            <p>Optimized workforce and customer management solutions.</p>
          </div>

          <div className="industry-card">
            <h3>E-Commerce</h3>
            <p>Retail automation, dropshipping, and business intelligence.</p>
          </div>

        </div>
      </section>
            {/* MISSION & VISION SECTION */}
      <section className="mission-vision-section">

        <h2 className="section-title">Our Mission & Vision</h2>

        <div className="mv-container">

          <div className="mv-card">
            <h3>Mission</h3>
            <p>
              To empower businesses and innovators by delivering scalable,
              transformative, and future-ready technology solutions that drive
              measurable impact.
            </p>
          </div>

          <div className="mv-card">
            <h3>Vision</h3>
            <p>
              To become a global leader in digital innovation, fostering a world
              where ideas evolve into breakthrough solutions that shape industries
              and uplift communities.
            </p>
          </div>

        </div>

      </section>
      {/* BANNER SECTION 2 */}
<section className="banner-light">
  <div className="banner-light-content">
    <h2>Unlock Growth & Operational Excellence</h2>
    <p>
      Empower your teams with easy-to-use tools, seamless integrations, and scalable solutions built for real-world challenges.
    </p>
    <img src="/assets/mockup2.png" alt="Platform Demo" />
  </div>
</section>


            {/* WHY CHOOSE US SECTION */}
      <section className="why-section">

        <h2 className="section-title">Why Choose Syntiaro?</h2>

        <div className="why-container">

          <div className="why-card">
            <h3>Innovation First</h3>
            <p>We bring cutting-edge technology and modern frameworks to turn ideas into digital reality.</p>
          </div>

          <div className="why-card">
            <h3>Quality & Scalability</h3>
            <p>Our solutions are engineered to scale with your business while maintaining top-tier performance.</p>
          </div>

          <div className="why-card">
            <h3>Agile Delivery</h3>
            <p>Our iterative development ensures transparency, flexibility, and rapid deployment.</p>
          </div>

          <div className="why-card">
            <h3>Industry-Aligned</h3>
            <p>We develop tailored solutions based on specific industry trends and unique business needs.</p>
          </div>

          <div className="why-card">
            <h3>Long-Term Partnership</h3>
            <p>We focus on sustainable relationships and continuous support throughout your journey.</p>
          </div>

        </div>

      </section>
            {/* CAREERS SECTION */}
      <section className="careers-section">

        <h2 className="section-title">Build the Future with Syntiaro</h2>

        <p className="careers-text">
          We nurture curious minds, encourage breakthrough thinking, and empower innovators
          to turn ideas into impact. Whether you're starting your career or scaling your expertise,
          Syntiaro gives you the platform to learn, innovate, and grow.
        </p>

        <div className="careers-container">

          <div className="career-card">
            <h3>Collaborative Culture</h3>
            <p>A work environment driven by transparency, teamwork, and ownership.</p>
          </div>

          <div className="career-card">
            <h3>Innovation Focus</h3>
            <p>A culture where ideas thrive and innovation is valued at every stage.</p>
          </div>

          <div className="career-card">
            <h3>Continuous Learning</h3>
            <p>Upskill through real-world challenges, mentorship, and training.</p>
          </div>

          <div className="career-card">
            <h3>Growth & Leadership</h3>
            <p>Build your future with opportunities designed to scale your career.</p>
          </div>

        </div>

        <div className="career-btns">
          <button className="career-primary-btn">Current Openings</button>
          <button className="career-secondary-btn">Start Your Journey</button>
        </div>

      </section>
            {/* FINAL CTA SECTION */}
      <section className="final-cta-section">

        <h2 className="final-cta-text">
          Be a Part of Innovation. <br /> Be a Part of Excellence.
        </h2>

        <button className="final-cta-btn">
          Join Syntiaro
        </button>

      </section>


      {/* POPUP MODAL */}
      {open && <EnquiryPopup closePopup={() => setOpen(false)} />}
    </div>

    
  );
}
