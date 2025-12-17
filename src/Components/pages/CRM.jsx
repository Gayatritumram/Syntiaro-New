import React from "react";
import Img1 from "../../assets/Agriculture/14.png";
import "../pages/CRM.css";
import GetInTouch from "../GetInTouch";

const CRM = () => {
  return (
    <div className="crm-details-section">
      <h2>Customer Relationship Management (CRM)</h2>
      <div className="crm-content-wrapper">
        <div className="crm-text-content">
          <p>
            CRM systems help businesses manage relationships with current and potential customers through powerful automation and analytics.
          </p>
          <ul>
            <li><strong>Lead Management:</strong> Capture, track, and nurture leads</li>
            <li><strong>Sales Automation:</strong> Streamline the sales pipeline</li>
            <li><strong>Customer Analytics:</strong> Gain insights into customer behavior</li>
            <li><strong>Email & Campaign Tracking:</strong> Marketing tools integration</li>
            <li><strong>Support Ticketing:</strong> Improve customer satisfaction</li>
            <li><strong>Custom Dashboards:</strong> Monitor KPIs and sales data</li>
          </ul>
          <p>
            With our CRM tools, your team can focus on building lasting relationships and converting opportunities into revenue.
          </p>
        </div>
        <div className="crm-image-wrapper">
          <img src={Img1} alt="CRM 1" />
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

export default CRM;
  