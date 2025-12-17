import React from "react";
import Retail from "../../assets/POS1.png";
import "./pos.css"; 
import GetInTouch from "../GetInTouch";

export default function POS() {
  return (
    <div className="pos-page">
      <div className="pos-hero-section">
        <div className="pos-overlay">
          <h1>POS – Point of Sale Software</h1>
          <p>
            Streamlining retail operations for grocery stores, fashion outlets, and electronics shops.
          </p>
        </div>
      </div>

      <div className="pos-content-section">
        <div className="pos-image-container">
          <img src={Retail} alt="POS System Demo" />
        </div>
          <div className="pos-text-content">
            <h2>Why POS ?</h2>
            <p>
              Transform the way you manage sales and inventory with our cutting-edge POS solution — 
              built for modern retailers across supermarkets, kirana stores, apparel outlets, mobile shops, and more.
            </p>

            <ul>
              <li>🚀 Ultra-fast billing with integrated barcode scanning</li>
              <li>📊 Real-time analytics & 100% GST-compliant invoicing</li>
              <li>📦 Effortless stock tracking and intelligent inventory control</li>
              <li>🏬 Seamless multi-store and chain management</li>
              <li>💡 Built-in CRM & loyalty tools to grow your customer base</li>
            </ul>

            <p className="pos-highlight">
              Join <strong>1000+ forward-thinking retailers</strong> across <strong>10+ cities</strong> already growing faster with us.
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
