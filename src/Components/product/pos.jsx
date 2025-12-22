import React, { useEffect, useState } from "react";
import "./pos.css";
import posBg from "../../assets/POS.jpg"; // ✅ CORRECT PATH

export default function POS() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("load", revealOnScroll);
    };
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${posBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay" />

        <div className="hero-content reveal">
          <h1>POS – Point of Sale Software</h1>
          <p className="hero-quote">Sell smarter. Operate faster.</p>
          <p className="hero-desc">
            Syntiaro POS is a powerful, cloud-ready solution designed to simplify
            billing, inventory, and business insights — all in one platform.
          </p>
        </div>
      </section>

      {/* ================= WHY POS ================= */}
      <section className="why">
        <div className="container">
          <div className="why-header">
            <span className="why-label">Why Choose Syntiaro POS</span>
            <h2>
              Built to Power <br />
              Smarter, Faster <br />
              Businesses
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="feature-cards">
            {[
              {
                title: "Lightning-Fast Billing",
                desc: "Complete sales in seconds",
              },
              {
                title: "Real-Time Inventory",
                desc: "Instant stock updates",
              },
              {
                title: "GST Ready",
                desc: "Tax-ready invoices",
              },
              {
                title: "Multi-Store Support",
                desc: "Centralized control",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`feature-card ${
                  activeCard === index ? "active" : ""
                }`}
                onClick={() => setActiveCard(index)}
              >
                <div className="icon">✓</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta reveal">
        <h2>Transform Your Business with Syntiaro</h2>
        <a href="/contact" className="btn primary">
          Get Started
        </a>
      </section>
    </>
  );
}
