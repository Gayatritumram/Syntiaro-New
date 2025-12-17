import React from "react";
import Img1 from "../../assets/Agriculture/1.png";
import "./DropShipping.css";
import GetInTouch from "../GetInTouch";

const DropShipping = () => {
  return (
    <div className="dropshipping-details">
      <h2>Drop Shipping Solutions</h2>
      <div className="dropshipping-content">
        <div className="dropshipping-text">
          <p>Empowering eCommerce businesses to sell without inventory hassles, through fully automated drop shipping platforms.</p>
          <ul>
            <li><strong>Inventory-Free Selling:</strong> Partner with suppliers directly</li>
            <li><strong>Order Management:</strong> Track and fulfill orders easily</li>
            <li><strong>Marketplace Integration:</strong> Amazon, eBay, Shopify</li>
            <li><strong>Product Sync:</strong> Auto-update stock and pricing</li>
            <li><strong>Shipping Automation:</strong> Connect with logistics APIs</li>
            <li><strong>Analytics & Reporting:</strong> Monitor sales and performance</li>
          </ul>
          <p>Start or scale your eCommerce store with less risk and lower upfront costs using our robust drop shipping platform.</p>
        </div>
        <div className="dropshipping-images">
          <img src={Img1} alt="DropShipping 1" />
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

export default DropShipping;
