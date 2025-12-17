import React from "react";
import Img1 from "../../assets/Agriculture/18.png";
import "../pages/ITConsulting.css";
import GetInTouch from "../GetInTouch";

const ITConsulting = () => {
  return (
    <div className="it-service-container">
      <h2>IT Consulting Services</h2>
      <div className="it-service-content">
        <div className="it-service-text">
          <p>
            Our IT Consulting services are designed to help businesses leverage technology to achieve their goals. From digital transformation to cloud migration, we provide expert advice and hands-on support.
          </p>
          <ul>
            <li><strong>Technology Strategy:</strong> Tailored IT roadmaps aligned with business objectives</li>
            <li><strong>Cloud Solutions:</strong> Cloud readiness assessments, migrations, and optimization</li>
            <li><strong>Cybersecurity Consulting:</strong> Risk assessments, security architecture, compliance</li>
            <li><strong>Process Automation:</strong> Improve efficiency using smart automation tools</li>
            <li><strong>IT Infrastructure:</strong> Design, implementation, and management of scalable infrastructure</li>
            <li><strong>Software Advisory:</strong> Evaluation, procurement, and implementation of custom or off-the-shelf software</li>
          </ul>
          <p>
            Whether you're a startup or an enterprise, our consultants bring industry expertise and technical know-how to help you stay competitive.
          </p>
        </div>
        <div className="it-service-images">
          <img src={Img1} alt="IT Consulting 1" />
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

export default ITConsulting;
