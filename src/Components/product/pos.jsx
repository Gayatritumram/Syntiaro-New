import React from "react";
import "./pos.css";

export default function POS() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="container nav-flex">
          <div className="logo">SYNTIARO</div>
          <nav>
            <a href="/">Home</a>
            <a href="/pos" className="active">POS</a>
            <a href="/lms">LMS</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content reveal">
          <h1>Syntiaro POS Software</h1>
          <p className="hero-quote">“Sell smarter. Operate faster.”</p>
          <p className="hero-desc">
            Syntiaro Point of Sale is a powerful, cloud-ready solution designed to
            simplify billing, inventory, and business insights — all in one platform.
          </p>
        </div>
      </section>

      {/* ================= WHY POS ================= */}
      <section className="why">
        <div className="container why-grid">
          <div className="why-visual reveal">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              alt="Syntiaro POS"
            />
          </div>

          <div className="why-text reveal delay-1">
            <span className="section-badge">Why Choose Syntiaro POS</span>
            <h2>Built to Power Smarter, Faster Businesses</h2>

            <ul className="checklist">
              <li>
                <strong>Lightning-Fast Billing</strong>
                <span>Complete sales in seconds with smooth checkout</span>
              </li>
              <li>
                <strong>Real-Time Inventory Control</strong>
                <span>Instant stock updates & low-stock alerts</span>
              </li>
              <li>
                <strong>GST-Ready Compliance</strong>
                <span>Accurate invoices and tax-ready reports</span>
              </li>
              <li>
                <strong>Multi-Store & User Access</strong>
                <span>Manage multiple outlets from one dashboard</span>
              </li>
              <li>
                <strong>Smart Analytics & Insights</strong>
                <span>Make data-driven decisions with live reports</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <div className="container">
          <h2 className="reveal">Key Features of Syntiaro POS</h2>

          <div className="feature-grid">
            <div className="feature-card reveal">
              <h3>Smart Billing</h3>
              <p>
                Quick invoicing with barcode scanning, discounts, and tax automation.
              </p>
            </div>

            <div className="feature-card reveal delay-1">
              <h3>Inventory Management</h3>
              <p>
                Track stock levels, purchase orders, and low-stock alerts in real time.
              </p>
            </div>

            <div className="feature-card reveal delay-2">
              <h3>Sales Analytics</h3>
              <p>
                Detailed reports to monitor performance and make data-driven decisions.
              </p>
            </div>

            <div className="feature-card reveal delay-3">
              <h3>Multi-Device Ready</h3>
              <p>
                Seamlessly works across desktop, tablet, and POS terminals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2 className="reveal">Transform Your Business with Syntiaro</h2>
        <p className="reveal delay-1">
          Simplify operations, improve accuracy, and scale confidently with
          Syntiaro POS.
        </p>
        <a href="/contact" className="btn primary">Get Started</a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>Syntiaro</h3>
            <p>Intelligent software solutions for modern businesses.</p>
          </div>

          <div>
            <h4>Products</h4>
            <p>LMS</p>
            <p>POS</p>
          </div>

          <div>
            <h4>Support  </h4>
            <p>Help Center</p>
            <p>Contact Us</p>
          </div>
        </div>
      </footer>
    </>
  );
}
