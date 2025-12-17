import React from "react";
import "./Vision.css";
import VisionData from "../assets/Vision.png";

const visionParagraphs = [
  `At SYNTIARO, our vision is to redefine the future of business operations by pioneering intelligent, intuitive, and industry-specific software solutions. We aim to be a global leader in digital transformation by equipping businesses across every sector with tools that simplify complexity, enhance decision-making, and accelerate growth.`,

  `Our aspiration is not merely to develop software, but to craft digital ecosystems that evolve with the unique challenges and aspirations of each business. From bustling restaurants and dynamic garment houses to evolving education platforms, our goal is to provide deeply integrated systems that bring visibility, efficiency, and innovation into every layer of operation.`,

  `We envision a future where even the smallest local business can operate with the sophistication of an enterprise. Through continuous innovation, user-first design, and data-driven strategies, SYNTIARO seeks to bridge the gap between potential and performance.`,

  `Our vision extends beyond technology — it’s about empowering people. We’re committed to fostering a digital world where business owners, employees, and customers alike benefit from seamless, secure, and impactful interactions. As industries transform, SYNTIARO will stand at the forefront — adapting, leading, and delivering software solutions that don’t just support business goals, but redefine them.`
];

const Vision = () => {
  return (
    <section>
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-image">
            <img src={VisionData} alt="Vision Visual" />
          </div>
          <div className="vision-text">
            <h2 className="vision-title">Vision</h2>
            {visionParagraphs.map((para, idx) => (
              <p key={idx} className="vision-description">{para}</p>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Vision;