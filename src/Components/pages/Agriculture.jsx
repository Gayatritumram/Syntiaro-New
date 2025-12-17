import React from "react";
import Img1 from "../../assets/Agriculture/1.png";
import "../pages/Agriculture.css";
import GetInTouch from "../GetInTouch";

const Agriculture = () => {
  return (
    <div className="agriculture-section">
      <h2>Agriculture Solutions</h2>
      <div className="agriculture-content">
        <div className="agriculture-text">
          <p>
            Agriculture is not just the backbone of our economy—it's the foundation of civilization. We empower the sector through modern digital solutions.
          </p>
          <ul>
            <li><strong>Crop Production:</strong> Wheat, rice, pulses, fruits, vegetables</li>
            <li><strong>Animal Husbandry:</strong> Dairy, poultry, fisheries</li>
            <li><strong>Organic & Sustainable Farming:</strong> Eco-friendly practices</li>
            <li><strong>Precision Agriculture:</strong> IoT & AI-based crop monitoring</li>
            <li><strong>Weather & Soil Analysis:</strong> Real-time forecasts & soil mapping</li>
            <li><strong>Drone Technology:</strong> Automated crop spraying and surveillance</li>
          </ul>
          <p>
            Our platform delivers end-to-end support from  sowing to selling, ensuring higher yields and reduced losses for farmers.
          </p>
        </div>
        <div className="agriculture-images">
          <img src={Img1} alt="Agriculture 1" />
        </div>
      </div>

       <div className="get ">
        {/* Get in Touch Section */}
      <section>
        <GetInTouch />
      </section>
       </div>
    </div>
  );
};

export default Agriculture;
