import React, { useEffect } from "react";
import "./Vision.css";
import VisionData from "../assets/Vision.png";

const visionParagraphs = [
  `At SYNTIARO, our vision is to redefine the future of business operations by pioneering intelligent, intuitive, and industry-specific software solutions. We aim to be a global leader in digital transformation by equipping businesses across every sector with tools that simplify complexity, enhance decision-making, and accelerate growth.`,

  `Our aspiration is not merely to develop software, but to craft digital ecosystems that evolve with the unique challenges and aspirations of each business. From bustling restaurants and dynamic garment houses to evolving education platforms, our goal is to provide deeply integrated systems that bring visibility, efficiency, and innovation into every layer of operation.`,

  `We envision a future where even the smallest local business can operate with the sophistication of an enterprise. Through continuous innovation, user-first design, and data-driven strategies, SYNTIARO seeks to bridge the gap between potential and performance.`,

  `Our vision extends beyond technology — it’s about empowering people. We’re committed to fostering a digital world where business owners, employees, and customers alike benefit from seamless, secure, and impactful interactions.`
];

const Vision = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-left, .reveal-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-section">
      <div className="vision-container">
        
        {/* Image */}
        <div className="vision-image reveal-left">
          <img src={VisionData} alt="Vision Visual" />
        </div>

        {/* Text */}
        <div className="vision-text reveal-right">
          <h2 className="vision-title">Our Vision</h2>
          {visionParagraphs.map((para, idx) => (
            <p key={idx} className="vision-description">
              {para}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Vision;
