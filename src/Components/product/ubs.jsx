import React from "react";
import cafeMenu from "../../assets/rest.png";
import "./ubs.css";
import GetInTouch from "../GetInTouch";

export default function UBS() {
  return (
    <div className="ubs-page">
      <div className="ubs-hero-section">
        <div className="ubs-overlay">
          <h1>UBS – Unique Billing Software</h1>
          <p>
            Transforming the way food businesses operate with smart billing solutions.
          </p>
        </div>
      </div>

      <div className="ubs-content-section">
        <div className="ubs-image-container">
          <img src={cafeMenu} alt="UBS System Demo" />
        </div>
        <div className="ubs-text-content">
          <h2>Why UBS?</h2>
          <p>
            UBS is a powerful cloud-based billing platform tailored for Restaurants, Cafés,
            Bars, QSRs, Ice Cream Parlors, Bakeries, and Cake Shops. It offers end-to-end
            digital transformation for modern food outlets.
          </p>

          <ul>
            <li>Fast & intuitive billing system</li>
            <li>QR Code Ordering</li>
            <li>CRM & Loyalty Programs</li>
            <li>Aggregator Integrations</li>
            <li>Inventory & Recipe Management</li>
            <li>Centralized Menu & Vendor Management</li>
          </ul>

          <p className="ubs-highlight">
            Trusted by <strong>1500+ clients</strong> in <strong>15+ cities</strong>, UBS is shaping the future of food tech.
          </p>
        </div>
      </div>

      {/* Get in Touch Section */}
      <section className="inquiry-section fade-up">
        <GetInTouch />
      </section>
    </div>
  );
}
